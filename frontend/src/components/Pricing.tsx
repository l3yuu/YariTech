import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₱15,000',
    priceNote: 'Starting price',
    description: 'Perfect for landing pages and simple web presence.',
    features: [
      'Single Landing Page',
      'Basic Responsive Design',
      'Contact Form Integration',
      '1 Round of Revisions',
    ],
    isPopular: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '₱45,000',
    priceNote: 'Starting price',
    description: 'Great for growing businesses that need a full web presence.',
    features: [
      'Up to 5 Pages',
      'CMS Integration',
      'SEO Optimization',
      '1 Month Support',
      'Performance Audit',
    ],
    isPopular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '₱100,000',
    priceNote: 'Starting price',
    description: 'Enterprise-grade solutions for complex, scalable products.',
    features: [
      'Full Web Application',
      'Database Architecture',
      'Mobile App (Lite)',
      'Priority Support',
      'Monthly Reporting',
    ],
    isPopular: false,
    cta: 'Go Premium',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-blue-100/60 dark:from-blue-900/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Scalable solutions for every stage of your business journey. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#0a192f] to-[#0f2040] dark:from-blue-950 dark:to-slate-900 text-white border border-blue-600/30 shadow-2xl shadow-blue-900/30 scale-105'
                  : 'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm card-hover'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.isPopular ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-extrabold mb-1 ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.price}
                </div>
                <p className={`text-xs mb-3 ${plan.isPopular ? 'text-blue-200/70' : 'text-slate-400'}`}>{plan.priceNote}</p>
                <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isPopular ? 'bg-blue-500/30' : 'bg-blue-50 dark:bg-blue-950/40'}`}>
                      <Check className={`w-3 h-3 ${plan.isPopular ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}`} />
                    </div>
                    <span className={`text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400">
          Need a custom solution? <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Let's talk</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
