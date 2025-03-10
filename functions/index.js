const { onCall, onRequest } = require('firebase-functions/v2/https');
const { config } = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { setGlobalOptions } = require('firebase-functions/v2');
const { defineSecret } = require('firebase-functions/params');

const STRIPE_SECRET = defineSecret('STRIPE_SECRET');
const STRIPE_WEBHOOK = defineSecret('STRIPE_WEBHOOK');

setGlobalOptions({ region: 'us-central1' });

const admin_app = initializeApp();
const db = getFirestore(admin_app);

exports.createStripeCheckout = onCall({ secrets: [STRIPE_SECRET] }, async ({ data, auth }) => {
	const contestId = data.shoppingCart;

	let metadata;
	const docPromisse = db.collection('contests_questions').doc(contestId).get();
	await docPromisse
		.then((snapshot) => {
			metadata = snapshot.data().metadata;
		})
		.catch((error) => {
			console.log(error);
		});

	const stripe_module = require('stripe');
	const stripe = stripe_module.Stripe(STRIPE_SECRET.value());

	const session = await stripe.checkout.sessions.create({
		allow_promotion_codes: true,
		customer_email: auth.token.email,
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: 'https://conquista-concursos.com/simulados',
		cancel_url: 'https://conquista-concursos.com/simulados',
		metadata: { id: contestId, customer_uid: auth.token.uid },
		line_items: [
			{
				quantity: 1,
				price_data: {
					currency: 'brl',
					unit_amount: metadata.price,
					product_data: {
						name: metadata.name,
						description: `Simulado com ${metadata.length} questões entregue por conquista-concursos.com, totalmente elaborado por IA (Pode conter alucinações).`
					}
				}
			}
		]
	});

	return { id: session.id };
});

exports.stripeWebhook = onRequest(
	{ secrets: [STRIPE_SECRET, STRIPE_WEBHOOK] },
	async (request, response) => {
		const stripe_module = require('stripe');
		const stripe = stripe_module.Stripe(STRIPE_SECRET.value());
		let event;
		try {
			event = stripe.webhooks.constructEvent(
				request.rawBody,
				request.headers['stripe-signature'],
				STRIPE_WEBHOOK.value()
			);
		} catch (error) {
			console.error('O Webhook falhou');
			return response.sendStatus(403);
		}

		const dataObject = event.data.object;
		const eventType = event.type;
		switch (eventType) {
			case 'checkout.session.completed':
				const session = await stripe.checkout.sessions.retrieve(dataObject.id);
				const contestId = session.metadata.id;
				const uid = session.metadata.customer_uid;
				const permission = {};
				permission[contestId] = true;
				const docReference = db.collection('users').doc(uid);
				await docReference.update(permission).catch((error) => {
					if (error.code == 5) {
						docReference.set(permission).catch((setError) => {
							console.log(setError);
						});
					}
				});
				break;
		}
		response.sendStatus(200);
	}
);
