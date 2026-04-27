import { PhoneCall, PenTool, Terminal, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We dive deep into your vision, target audience, and business goals to define the perfect technical roadmap.',
    icon: PhoneCall,
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers craft high-fidelity interactive prototypes, ensuring a seamless and intuitive user experience.',
    icon: PenTool,
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Agile development using modern tech stacks. We build for scale, performance, and long-term maintainability.',
    icon: Terminal,
    gradient: 'from-indigo-500 to-blue-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Rigorous testing followed by a smooth deployment. We stay by your side with dedicated ongoing support.',
    icon: Rocket,
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-white dark:bg-[#0a0f1a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 mb-4 transition-all hover:scale-105">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Results</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A transparent, structured methodology designed to transform your ambitious ideas into industry-leading digital products.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col">
              {/* Card Container */}
              <div className="relative z-10 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col h-full transition-all duration-500 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/5">
                
                {/* Step Number Tag */}
                <div className="absolute top-4 right-6 text-4xl font-black text-slate-100 dark:text-slate-800/50 select-none group-hover:text-slate-200 dark:group-hover:text-slate-800 transition-colors">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg ${step.glow} transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>

                {/* Minimal Footer Decor */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                   <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`} />
                   <div className="h-0.5 flex-1 bg-slate-100 dark:bg-slate-800/60 rounded-full overflow-hidden">
                      <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${step.gradient} transition-all duration-1000 ease-out`} />
                   </div>
                </div>
              </div>

              {/* Connecting Arrows (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center text-slate-300 dark:text-slate-800 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  <ChevronRight className="w-8 h-8 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center relative">
           {/* Decorative ring */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
           
           <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Ready to build something extraordinary?</h3>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-lg font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:from-blue-700 group-hover:to-violet-700 transition-all" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] blur-xl transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Launch Your Project <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              <p className="mt-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Initial consultation is free</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
