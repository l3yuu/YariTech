const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We discuss your goals, requirements, and budget to find the best approach for your project.',
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
    darkBg: 'dark:bg-blue-950/30',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Visualizing the end product with high-fidelity mockups and interactive prototypes.',
    gradient: 'from-violet-500 to-purple-500',
    lightBg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-950/30',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our experts build your solution using modern, scalable tech stacks with full transparency.',
    gradient: 'from-indigo-500 to-blue-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'dark:bg-indigo-950/30',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment to production with ongoing maintenance and dedicated technical assistance.',
    gradient: 'from-pink-500 to-rose-500',
    lightBg: 'bg-pink-50',
    darkBg: 'dark:bg-pink-950/30',
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-slate-50 dark:bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">How We Work</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            A transparent, structured process to bring your vision to life — on time, every time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`group flex flex-col items-center text-center p-6 rounded-2xl ${step.lightBg} ${step.darkBg} border border-slate-200/60 dark:border-slate-700/40 hover:-translate-y-1 transition-transform duration-300`}>
                {/* Number circle */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="text-xl font-black text-white">{step.number}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
