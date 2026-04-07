// Route preloading map - matches lazy imports from App.jsx
const routeLoaders = {
	'/': () => import('../pages/Homepage'),
	'/products/individuals': () => import('../pages/Individuals'),
	'/products/business-account': () => import('../pages/BusinessAccount'),
	'/products/debit-cards/individual': () => import('../pages/IndividualDebitCard'),
	'/products/debit-cards/business': () => import('../pages/BusinessDebitCard'),
	'/products/emt': () => import('../pages/EMT'),
	'/products/acquiring/e-commerce': () => import('../pages/AcquiringECommerce'),
	'/products/acquiring/payment-modules': () => import('../pages/PaymentModules'),
	'/solutions/banking-api': () => import('../pages/BankingAPI'),
	'/solutions/cards-api': () => import('../pages/CardsAPI'),
	'/solutions/whitelabel/onboarding': () => import('../pages/WhitelabelOnboarding'),
	'/solutions/whitelabel/ramp': () => import('../pages/WhitelabelRamp'),
	'/solutions/whitelabel/custom': () => import('../pages/WhitelabelCustom'),
	'/company': () => import('../pages/Company'),
	'/contact': () => import('../pages/Contact'),
	'/privacy-policy': () => import('../pages/PrivacyPolicy'),
	'/terms': () => import('../pages/TermsConditions'),
	'/complaints': () => import('../pages/Complaints'),
};

const preloadedRoutes = new Set();

export function usePreloadRoute() {
	return (path) => {
		if (!path || preloadedRoutes.has(path)) return;

		const loader = routeLoaders[path];
		if (loader) {
			preloadedRoutes.add(path);
			loader().catch(() => {
				// If preload fails, remove from set so it can retry
				preloadedRoutes.delete(path);
			});
		}
	};
}
