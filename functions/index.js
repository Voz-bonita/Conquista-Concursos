const { onCall, onRequest } = require('firebase-functions/v2/https');
const { config } = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { doc, setDoc } = require('firebase/firestore');
const { setGlobalOptions } = require('firebase-functions/v2');

setGlobalOptions({ region: 'southamerica-east1' });

const admin_app = initializeApp();
const db = getDatabase(admin_app);

exports.createStripeCheckout = onCall(async (data, context) => {
	const stripe = require('stripe')(config().stripe.secret);
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
					unit_amount: 20 * 100,
					product_data: {
						name: 'Simulado 1'
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
