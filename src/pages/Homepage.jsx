import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ctaBg } from '../shared';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoint } from '../hooks/useBreakpoint';
import './Homepage.css';

import imgHeroBg from '../hero-bg.svg';
import imgHeroCards from '../assets/credit-card-preview.svg';
import imgIcon from '../assets/icon-payment.svg';
import imgIcon1 from '../assets/icon-acquiring.svg';
import imgIcon2 from '../assets/icon-cards.svg';
import imgSignCheckmark from '../assets/icon-checkmark.svg';
import imgGroup1 from '../assets/shield.svg';
import imgPartnerGatehub from '../assets/partner-gatehub.svg';
import imgPartnerMastercard from '../assets/partner-mastercard.svg';
import imgPartnerGooglepay from '../assets/partner-googlepay.svg';
import imgPartnerApplepay from '../assets/partner-applepay.svg';
import imgPartnerDinit from '../assets/partner-dinit-fav.svg';
import imgPartnerAustriacard from '../assets/partner-austriacard.png';
import imgPartnerTribe from '../assets/partner-tribe.svg';
import imgPartnerComplyadvantage from '../assets/partner-complyadvantage.png';

const whyBg = `linear-gradient(0deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1680 1142' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad2)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad2' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-29.717 97.849 -75.283 -38.625 1137.2 571.64)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const regulatedBg = `linear-gradient(90deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 1224 338' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad4)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad4' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-21.651 28.961 -54.849 -11.432 828.51 169.19)'%3E%3Cstop stop-color='rgba(34,132,155,0.2)' offset='0'/%3E%3Cstop stop-color='rgba(34,132,155,0)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const heroBgMobile = `linear-gradient(44.5deg, rgb(4,67,82) 0%, rgba(4,67,82,0) 100%), linear-gradient(90deg, rgb(4,67,82) 0%, rgb(4,67,82) 100%)`;

const partners = [
	{ src: imgPartnerGatehub, alt: 'GateHub' },
	{ src: imgPartnerDinit, alt: 'Dinit' },
	{ src: imgPartnerAustriacard, alt: 'Austria Card' },
	{ src: imgPartnerTribe, alt: 'Tribe' },
	{ src: imgPartnerComplyadvantage, alt: 'ComplyAdvantage' },
	{ src: imgPartnerMastercard, alt: 'Mastercard' },
	{ src: imgPartnerGooglepay, alt: 'Google Pay' },
	{ src: imgPartnerApplepay, alt: 'Apple Pay' },
];

const WhyCard = ({ title, text, index = 0 }) => (
	<motion.div
		className="hp__why-card"
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.15 }}
		transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
	>
		<div className="hp__why-card-glass" />
		<div className="hp__why-card-body">
			<img alt="" className="hp__why-card-icon" src={imgSignCheckmark} />
			<div>
				<p className="hp__why-card-title">{title}</p>
				<p className="hp__why-card-desc">{text}</p>
			</div>
		</div>
	</motion.div>
);

function HomepageMobile({ navigate }) {
	return (
		<div className="hp-mobile">
			<Navbar />

			{/* Hero */}
			<div className="hp-mobile__hero" style={{ backgroundImage: heroBgMobile }}>
				<p className="hp-mobile__hero-title">Fintech, Your Way!</p>
				<p className="hp-mobile__hero-subtitle">
					This is fintech, redefined. Build branded banking, issue debit cards, and go global — starting today!
				</p>
				<button type="button" className="hp-mobile__hero-btn" onClick={() => navigate('/contact')}>
					Issue Your First Debit Card
				</button>
			</div>

			{/* Feature Cards */}
			<div className="hp-mobile__features">
				{[
					{ icon: imgIcon, alt: 'Payment accounts', title: 'Payment Accounts', text: 'Dinaro offers payment accounts for individuals, businesses, and white-label partners. Full support for SEPA and Instant SEPA transfers.' },
					{ icon: imgIcon2, alt: 'Card issuing', title: 'Card Issuing', text: 'Order a Dinaro card and shop seamlessly online and in-store. Issue a payment card with your logo and design.' },
					{ icon: imgIcon1, alt: 'Accepting payments', title: 'Accepting Payments', text: "Leverage Dinaro's infrastructure and partnerships to provide seamless payment experiences for your customers." },
				].map(({ icon, alt, title, text }) => (
					<div key={title} className="card hp-mobile__feature-card">
						<img alt={alt} className="hp-mobile__feature-icon" src={icon} />
						<div className="hp-mobile__feature-content">
							<p className="hp-mobile__feature-title">{title}</p>
							<p className="hp-mobile__feature-text">{text}</p>
						</div>
					</div>
				))}
			</div>

			{/* Regulated & Supervised */}
			<div className="hp-mobile__regulated" style={{ backgroundImage: regulatedBg }}>
				<p className="hp-mobile__regulated-title">Regulated &amp; Supervised</p>
				<p className="hp-mobile__regulated-subtitle">
					Dinaro is a regulated and supervised financial institution
				</p>
			</div>

			{/* Solutions */}
			<div className="hp-mobile__solutions">
				{[
					{ title: 'API Driven', text: 'Providing a unified API for payment processing, clearing, settlement and reconciliation of payment operations.' },
					{ title: 'BIN Sponsorship', text: 'Avoid the complexity of a card issuing project. As a Mastercard Principal Member we can sponsor you.' },
					{ title: 'SEPA Payments', text: 'We enable SEPA credit transfers and Instant SEPA payments for fast, secure transactions across Europe.' },
					{ title: 'White Label Cards', text: 'Offering a flexible White Label solution for the turnkey launch of branded debit and prepaid cards, tailored to your business.' },
					{ title: 'ON & OFF Ramp Platform', text: 'Providing flexible topping up and withdrawal options for your marketplace or wallets.' },
				].map(({ title, text }) => (
					<div key={title} className="card hp-mobile__solution-card">
						<p className="hp-mobile__solution-title">{title}</p>
						<p className="hp-mobile__solution-text">{text}</p>
					</div>
				))}
			</div>

			{/* Why Choose Dinaro */}
			<div className="hp-mobile__why" style={{ backgroundImage: whyBg }}>
				<p className="hp-mobile__why-title">Why Choose Dinaro?</p>
				<div className="hp-mobile__why-cards">
					{[
						{ title: 'Individual Approach', text: 'Personalized solutions tailored to your needs.' },
						{ title: 'Secure', text: 'Access worldwide markets through one platform.' },
						{ title: 'Simplicity & Transparency', text: 'Clear processes with no hidden complexities.' },
						{ title: 'EMI Licence', text: 'Dinaro is a licensed e-money institution regulated by the Bank of Slovenia.' },
						{ title: 'Global Reach', text: 'Access worldwide markets through one platform.' },
						{ title: 'PCI DSS Certified', text: 'Dinaro is PCI DSS Level 1 Certified Service Provider.' },
					].map(({ title, text }) => (
						<div key={title} className="hp-mobile__why-card">
							<img alt="" className="hp-mobile__why-card-icon" src={imgSignCheckmark} />
							<div>
								<p className="hp-mobile__why-card-title">{title}</p>
								<p className="hp-mobile__why-card-text">{text}</p>
							</div>
						</div>
					))}
				</div>
				<button type="button" className="hp-mobile__why-cta" onClick={() => navigate('/contact')}>
					Get Started Now
				</button>
			</div>

			{/* Partners */}
			<div className="hp-mobile__partners">
				<p className="hp-mobile__partners-title">Trusted by industry leaders</p>
				<p className="hp-mobile__partners-label">Partners</p>
				<div className="hp-mobile__partners-grid">
					{partners.map(({ src, alt }) => (
						<div key={alt} className="hp-mobile__partner">
							<img alt={alt} src={src} />
						</div>
					))}
				</div>
			</div>

			{/* CTA */}
			<div className="hp-mobile__cta" style={{ backgroundImage: ctaBg }}>
				<p className="hp-mobile__cta-title">Launch Your Financial Product</p>
				<p className="hp-mobile__cta-subtitle">
					Get started with Dinaro and bring your financial services to market faster.
				</p>
				<div className="hp-mobile__cta-actions">
					<button type="button" className="hp-mobile__cta-primary" onClick={() => navigate('/contact')}>
						Get Started Now
					</button>
					<button type="button" className="hp-mobile__cta-secondary" onClick={() => navigate('/contact')}>
						Contact Sales
					</button>
				</div>
			</div>

			{/* Footer */}
			<div className="hp-mobile__footer">
				<p className="hp-mobile__footer-copy">© 2026 Dinaro. All Rights Reserved.</p>
				<div className="hp-mobile__footer-links">
					{[
						{ label: 'Terms & Conditions', href: '/terms' },
						{ label: 'Privacy Policy', href: '/privacy-policy' },
						{ label: 'Complaints', href: '/complaints' },
					].map(({ label, href }) => (
						<a key={label} href={href} className="hp-mobile__footer-link">{label}</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Homepage() {
	const navigate = useNavigate();
	const bp = useBreakpoint();

	if (bp === 'mobile' || bp === 'tablet') {
		return <HomepageMobile navigate={navigate} />;
	}

	return (
		<div className="hp">
			<Navbar />

			{/* ── Hero ── */}
			<section className="hp__hero-section">
				<img alt="" className="hp__hero-bg" src={imgHeroBg} />
				<motion.img
					alt=""
					className="hp__hero-cards"
					src={imgHeroCards}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
				/>
				<motion.div
					className="hp__hero-copy"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
				>
					<p className="hp__hero-title">Fintech, Your Way!</p>
					<p className="hp__hero-subtitle">
						This is fintech, redefined. Build branded banking, issue debit cards, and go global - starting today!
					</p>
				</motion.div>
				<div className="hp__hero-cta-wrap">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
					>
						<button type="button" className="hp__hero-cta-btn" onClick={() => navigate('/contact')}>
							<p className="hp__hero-cta-label">Issue Your First Debit Card</p>
						</button>
					</motion.div>
				</div>
			</section>

			{/* ── Feature Cards ── */}
			<div className="hp__features">
				{[
					{ icon: imgIcon, alt: 'Payment accounts icon', title: 'Payment Accounts', text: 'Dinaro offers payment accounts for individuals, businesses, and white-label partners. With full support for SEPA and Instant SEPA transfers, so your money moves when you need it, in seconds.' },
					{ icon: imgIcon2, alt: 'Card issuing icon', title: 'Card Issuing', text: 'Order a Dinaro card and shop seamlessly online and in-store. Issue a payment card with your logo and design, connected to the Paywiser payment and accounts system.' },
					{ icon: imgIcon1, alt: 'Acquiring payments icon', title: 'Accepting Payments', text: "Use Dinaro's accepting payments solution and leverage our infrastructure and partnerships. Provide your customers seamless and comfortable shopping experiences." },
				].map(({ icon, alt, title, text }, index) => (
					<motion.div
						key={title}
						className="card hp__feature-card"
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
					>
						<img alt={alt} className="hp__feature-icon" src={icon} />
						<div>
							<p className="hp__feature-title">{title}</p>
							<p className="hp__feature-text">{text}</p>
						</div>
					</motion.div>
				))}
			</div>

			{/* ── Regulated & Supervised ── */}
			<motion.div
				className="hp__regulated"
				style={{ backgroundImage: regulatedBg }}
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
			>
				<div className="hp__regulated-dots" />
				<p className="hp__regulated-title">Regulated &amp; Supervised</p>
				<p className="hp__regulated-subtitle">
					Dinaro is a regulated and supervised financial institution
				</p>
				<div className="hp__regulated-shield">
					<motion.img
						alt=""
						className="hp__regulated-shield-img"
						src={imgGroup1}
						animate={{ y: [0, -12, 0] }}
						transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
					/>
				</div>
			</motion.div>

			{/* ── Solutions Grid ── */}
			<div className="hp__solutions">
				<div className="hp__solutions-row">
					{[
						{ width: 392, title: 'API Driven', text: 'Providing a unified API for payment processing, clearing, settlement and reconciliation of payment operations.' },
						{ width: 392, title: 'BIN Sponsorship', text: 'Avoid the complexity of a card issuing project. As a Mastercard Principal Member we can sponsor you.' },
						{ width: 392, title: 'SEPA Payments', text: 'We enable SEPA credit transfers and Instant SEPA payments for fast, secure transactions across Europe.' },
					].map(({ width, title, text }, index) => (
						<motion.div
							key={title}
							className="card hp__solution-card"
							style={{ width }}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
						>
							<div className="hp__solution-spacer" />
							<div className="hp__solution-content">
								<p className="hp__solution-title">{title}</p>
								<p className="hp__solution-text">{text}</p>
							</div>
						</motion.div>
					))}
				</div>
				<div className="hp__solutions-row">
					{[
						{ width: 808, title: 'White Label Cards', text: 'Offering a flexible White Label solution for the turnkey launch of branded debit and prepaid cards, fully tailormade to your business identity and accepted everywhere your customers shop.' },
						{ width: 392, title: 'ON & OFF Ramp Platform', text: 'Providing flexible topping up and withdrawal options for your marketplace or wallets.' },
					].map(({ width, title, text }, index) => (
						<motion.div
							key={title}
							className="card hp__solution-card"
							style={{ width }}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
						>
							<div className="hp__solution-spacer" />
							<div className="hp__solution-content">
								<p className="hp__solution-title">{title}</p>
								<p className="hp__solution-text">{text}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* ── Why Choose Dinaro ── */}
			<div className="hp__why" style={{ backgroundImage: whyBg }}>
				<motion.p
					className="hp__why-heading"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					Why Choose Dinaro?
				</motion.p>

				<div className="hp__why-row">
					<WhyCard index={0} title="Individual Approach" text="Personalized solutions tailored to your needs." />
					<WhyCard index={1} title="Secure" text="Access worldwide markets through one platform" />
					<WhyCard index={2} title="Simplicity & Transparency" text="Clear processes with no hidden complexities." />
				</div>
				<div className="hp__why-row">
					<WhyCard index={0} title="EMI Licence" text="Dinaro is a licensed e-money institution regulated by the Bank of Slovenia," />
					<WhyCard index={1} title="Global Reach" text="Access worldwide markets through one platform." />
					<WhyCard index={2} title="PCI DSS Certified" text="Dinaro is PCI DSS Level 1 Certified Service Provider" />
				</div>

				<div className="hp__why-cta-wrap">
					<button type="button" className="hp__why-cta-btn" onClick={() => navigate('/contact')}>
						<p className="hp__why-cta-label">Get Started Now</p>
					</button>
				</div>

				<motion.p
					className="hp__why-body"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 0.7, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
				>
					Using Mastercard's global network and card products, we enable domestic and cross-border transfers. Offer your cardholders safer, more reliable, and convenient transfers. Or send funds directly to any card in the MoneySend system—in just minutes, 24/7!
				</motion.p>
			</div>

			{/* ── Partners ── */}
			<div className="hp__partners">
				<motion.p
					className="hp__partners-title"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					Trusted by industry leaders and backed by world-class technology
				</motion.p>
				<motion.p
					className="hp__partners-label"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.4 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					Partners
				</motion.p>
				<div className="hp__partners-grid">
					{partners.map(({ src, alt }, index) => (
						<motion.div
							key={alt}
							className="hp__partner"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
						>
							<img alt={alt} src={src} />
						</motion.div>
					))}
				</div>
			</div>

			{/* ── CTA Section ── */}
			<div className="hp__cta" style={{ backgroundImage: ctaBg }}>
				<motion.p
					className="hp__cta-title"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					Launch Your Financial Product
				</motion.p>
				<motion.p
					className="hp__cta-body"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 0.6, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
				>
					Get started with Dinaro and bring your financial services to market faster.<br />
					Have questions? Our team is ready to help you find the right solution.
				</motion.p>
				<div className="hp__cta-actions">
					<button type="button" className="hp__cta-primary" onClick={() => navigate('/contact')}>
						<p className="hp__cta-primary-label">Get Started Now</p>
					</button>
					<button type="button" className="hp__cta-secondary" onClick={() => navigate('/contact')}>
						<p className="hp__cta-secondary-label">Contact Sales</p>
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
}
