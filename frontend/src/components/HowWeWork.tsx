

const HowWeWork = () => {
  const steps = [
    {
      number: '1',
      title: 'Discovery Call',
      description: 'We discuss your goals, requirements, and budget to find the best approach.',
    },
    {
      number: '2',
      title: 'Design & Prototype',
      description: 'Visualizing the end product with high-fidelity mockups and interactive flows.',
    },
    {
      number: '3',
      title: 'Development',
      description: 'Our experts build your solution using modern, scalable tech stacks.',
    },
    {
      number: '4',
      title: 'Launch & Support',
      description: 'Deployment to production with ongoing maintenance and technical assistance.',
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">How We Work</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A transparent, structured process to bring your vision to life.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-[#0047AB] text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg transform transition-transform hover:scale-105 hover:rotate-3 duration-300">
                  {step.number}
                </div>
                <h3 className="mt-8 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-base text-gray-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
