import { Star, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  _id: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  content: string;
  rating: number;
  status: string;
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
};

const getGradient = (id: string) => {
  const gradients = [
    { from: 'from-blue-500 to-cyan-500', light: 'border-blue-400', dark: 'dark:border-blue-600' },
    { from: 'from-violet-500 to-purple-500', light: 'border-violet-400', dark: 'dark:border-violet-600' },
    { from: 'from-pink-500 to-rose-500', light: 'border-pink-400', dark: 'dark:border-pink-600' },
    { from: 'from-emerald-500 to-teal-500', light: 'border-emerald-400', dark: 'dark:border-emerald-600' },
    { from: 'from-amber-500 to-orange-500', light: 'border-amber-400', dark: 'dark:border-amber-600' }
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          // Only show approved ones on landing page
          setTestimonials(data.filter((t: Testimonial) => t.status === 'APPROVED'));
        }
      } catch (err) {
        console.error('Failed to fetch testimonials');
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => {
              const theme = getGradient(testimonial._id);
              return (
                <div
                  key={testimonial._id}
                  className={`relative bg-white dark:bg-slate-800/60 border-t-2 ${theme.light} ${theme.dark} border-l border-r border-b border-slate-200 dark:border-slate-700/60 rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50`}
                >
                  {/* Large quote mark */}
                  <span className="absolute top-4 right-5 text-7xl font-serif text-slate-200 dark:text-slate-700/50 leading-none select-none">"</span>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}`} 
                      />
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {testimonial.authorImage ? (
                      <img 
                        src={testimonial.authorImage} 
                        alt={testimonial.authorName}
                        className="w-10 h-10 rounded-full object-cover shadow-md"
                      />
                    ) : (
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme.from} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md`}>
                        {getInitials(testimonial.authorName)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.authorName}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{testimonial.authorRole}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
