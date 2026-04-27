import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Yari Tech transformed our manual inventory into a seamless digital platform. They really understood the local business landscape.",
    author: "Juan Reyes",
    role: "SME Owner, Metro Manila",
    initials: "JR",
    gradient: 'from-blue-500 to-cyan-500',
    lightAccent: 'border-blue-400',
    darkAccent: 'dark:border-blue-600',
  },
  {
    quote: "As a student, finding a team that could build a complex thesis project within budget was a lifesaver. Highly professional.",
    author: "Maria Santos",
    role: "IT Student, UP Diliman",
    initials: "MS",
    gradient: 'from-violet-500 to-purple-500',
    lightAccent: 'border-violet-400',
    darkAccent: 'dark:border-violet-600',
  },
  {
    quote: "Fast communication and incredible design. They don't just code; they solve problems. Highly recommend Yari Tech.",
    author: "Leon Beltran",
    role: "Startup Founder, Cebu",
    initials: "LB",
    gradient: 'from-pink-500 to-rose-500',
    lightAccent: 'border-pink-400',
    darkAccent: 'dark:border-pink-600',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-50/80 dark:from-blue-900/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Trusted by Innovators</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            From students to SME owners — here's what they say about working with Yari Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800/60 border-t-2 ${testimonial.lightAccent} ${testimonial.darkAccent} border-l border-r border-b border-slate-200 dark:border-slate-700/60 rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50`}
            >
              {/* Large quote mark */}
              <span className="absolute top-4 right-5 text-7xl font-serif text-slate-200 dark:text-slate-700/50 leading-none select-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
