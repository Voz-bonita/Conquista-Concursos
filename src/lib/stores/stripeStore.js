import { getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';

const stripe_public =
	'pk_live_51P9vWcP079yRGsvdlS8iRz7C5lBHcLNbN7Ut1mq08raYsYDQhb0bImdDawcdaog0pFlx7ZnNV875rLlT19GdYR8W00heEIN7Z2';
const stripe = await loadStripe(stripe_public);

const functions = getFunctions();
const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');

export const stripeHandler = {
	checkout: function (constestId) {
		createStripeCheckout({ shoppingCart: constestId }).then((response) => {
			const sessionId = response.data.id;
			stripe.redirectToCheckout({ sessionId: sessionId });
		});
	}
};
