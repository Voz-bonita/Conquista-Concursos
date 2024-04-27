import { getFunctions, httpsCallable } from 'firebase/functions';
import Stripe from 'stripe';

const stripe_public =
	'pk_test_51P9vWcP079yRGsvd4LPSCgcmLqjFIj9DfViVD06LAaLc7Vjw920ZfylElsdNJwIhspN2h4dqZctlbouCXFXpSsSb00UwhgPnSa';
const stripe = Stripe(stripe_public);

const functions = getFunctions();
const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');

export const stripeHandler = {
	checkout: function () {
		createStripeCheckout().then((response) => {
			const sessionId = response.data.id;
			stripe.redirectToCheckout({ sessionId: sessionId });
		});
	}
};
