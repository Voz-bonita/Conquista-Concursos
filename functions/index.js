const { onCall, onRequest } = require('firebase-functions/v2/https');
const { config } = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { setGlobalOptions } = require('firebase-functions/v2');
const { defineSecret } = require('firebase-functions/params');

const STRIPE_SECRET = defineSecret('STRIPE_SECRET');

setGlobalOptions({ region: 'southamerica-east1' });

const admin_app = initializeApp();
const db = getFirestore(admin_app);

exports.createStripeCheckout = onCall({ secrets: [STRIPE_SECRET] }, async ({ data, auth }) => {
	let metadata;
	const docPromisse = db.collection('contests_questions').doc(data.shoppingCart).get();
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
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: 'http://localhost:5173/',
		cancel_url: 'http://localhost:5173/sobre',
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

exports.stripeWebhook = onRequest(async (request, response) => {
	const stripe = require('stripe')(config().stripe.secret);
	const webhook = require('stripe')(config().stripe.webhook_secret);

	let event;
	try {
		event = stripe.webhook.constructEvent(req.body, req.headers['stripe-signature'], webhook);
	} catch (error) {
		console.error('O Webhook falhou');
		return response.sendStatus(403);
	}

	const dataObject = event.data.object;
	const dataAsDoc = {
		checkoutSessionId: dataObject.id,
		paymentStatus: dataObject.payment_status,
		amountTotal: dataObject.amount_total
	};
	const docRef = doc(db, 'users/teste');
	await setDoc(docRef);
});
