
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Starting at ₱15,000',
      features: [
        'Single Landing Page',
        'Basic Responsive Design',
        'Contact Form'
      ],
      isPopular: false,
      buttonText: 'Choose Basic'
    },
    {
      name: 'Standard',
      price: 'Starting at ₱45,000',
      features: [
        'Up to 5 Pages',
        'CMS Integration',
        'SEO Optimization',
        '1 Month Support'
      ],
      isPopular: true,
      buttonText: 'Choose Standard'
    },
    {
      name: 'Premium',
      price: 'Starting at ₱100,000',
      features: [
        'Full Web Application',
        'Database Architecture',
        'Mobile App (Lite)',
        'Priority Support'
      ],
      isPopular: false,
      buttonText: 'Choose Premium'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Transparent Pricing</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Scalable solutions for every stage of your business journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 ${
                plan.isPopular 
                  ? 'ring-2 ring-blue-600 shadow-2xl transform md:-translate-y-4 relative' 
                  : 'border border-gray-200 shadow-sm hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-6">{plan.price}</div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
