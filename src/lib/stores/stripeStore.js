import { db } from '$lib/firebase';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';

const stripe_public =
	'pk_test_51P9vWcP079yRGsvd4LPSCgcmLqjFIj9DfViVD06LAaLc7Vjw920ZfylElsdNJwIhspN2h4dqZctlbouCXFXpSsSb00UwhgPnSa';
const stripe = await loadStripe(stripe_public);

const functions = getFunctions();
const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');

export const stripeHandler = {
	checkout: function (constestId) {
		createStripeCheckout({ shoppingCart: constestId }).then((response) => {
			const sessionId = response.data.id;
			console.log(sessionId);
			stripe.redirectToCheckout({ sessionId: sessionId });
		});
	}
};
