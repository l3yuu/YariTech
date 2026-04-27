import { useState } from 'react';
import { Edit2, Trash2, EyeOff, Eye, Plus, Star, MessageSquareQuote, CheckCircle2, EyeOff as EyeOffIcon } from 'lucide-react';

interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  content: string;
  rating: number;
  status: 'APPROVED' | 'HIDDEN';
}

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    authorName: 'Maria Santos',
    authorRole: 'Owner, The Daily Knead',
    authorImage: 'https://i.pravatar.cc/150?u=maria',
    content: "The automated inventory system Yari Tech built for my bakery has saved me at least 10 hours of manual work every single week. Highly recommended for any small business owner in Manila.",
    rating: 5,
    status: 'APPROVED'
  },
  {
    id: '2',
    authorName: 'Juan Dela Cruz',
    authorRole: 'BS Computer Science, UP Diliman',
    authorImage: 'https://i.pravatar.cc/150?u=juan',
    content: "As a CS student, the internship program helped me understand the lifecycle of real-world enterprise applications. The mentorship is world-class.",
    rating: 5,
    status: 'APPROVED'
  },
  {
    id: '3',
    authorName: 'Roberto Garcia',
    authorRole: 'Founder, Garcia Logistics',
    authorImage: 'https://i.pravatar.cc/150?u=roberto',
    content: "The initial setup was a bit complex, but the support team guided me through it. I'm still learning the features but it looks promising for my shop.",
    rating: 3,
    status: 'HIDDEN'
  },
  {
    id: '4',
    authorName: 'Sofia Lim',
    authorRole: 'CEO, Urban Finds PH',
    authorImage: 'https://i.pravatar.cc/150?u=sofia',
    content: "Integrating payment gateways used to be a nightmare for my e-commerce site until I partnered with Yari Tech. Their API documentation is flawless.",
    rating: 5,
    status: 'APPROVED'
  },
  {
    id: '5',
    authorName: 'Miguel Rivera',
    authorRole: 'Fullstack Developer Student',
    authorImage: 'https://i.pravatar.cc/150?u=miguel',
    content: "The 'Build Your First App' workshop was the turning point for my career. I went from knowing zero code to deploying a basic CRUD app in a weekend.",
    rating: 5,
    status: 'APPROVED'
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(mockTestimonials);
  const [filter, setFilter] = useState<'ALL' | 'APPROVED' | 'HIDDEN'>('ALL');

  const filteredTestimonials = testimonials.filter(t => filter === 'ALL' || t.status === filter);

  const toggleStatus = (id: string) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, status: t.status === 'APPROVED' ? 'HIDDEN' : 'APPROVED' } : t
    ));
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Testimonials</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage and curate feedback from students and business owners.
          </p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl inline-flex shadow-inner">
          {(['ALL', 'APPROVED', 'HIDDEN'] as const).map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === f 
                  ? 'bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {f.charAt(0) + f.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Reviews', value: '124', icon: MessageSquareQuote, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/30' },
          { label: 'Approved', value: '98', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
          { label: 'Avg. Rating', value: '4.9', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/30' },
          { label: 'Hidden', value: '26', icon: EyeOffIcon, color: 'text-slate-600', bg: 'bg-slate-50 dark:bg-slate-900/30' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">{stat.label}</p>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 flex-1">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className={`bg-white dark:bg-slate-800/60 rounded-2xl border ${testimonial.status === 'HIDDEN' ? 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40' : 'border-slate-200 dark:border-slate-700/60 shadow-sm'} p-6 flex flex-col hover:shadow-md transition-all duration-300 group`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= testimonial.rating ? (testimonial.status === 'HIDDEN' ? 'text-slate-300 dark:text-slate-700 fill-current' : 'text-blue-600 dark:text-blue-500 fill-current') : 'text-slate-200 dark:text-slate-800'}`} 
                  />
                ))}
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                testimonial.status === 'APPROVED' 
                  ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600'
              }`}>
                {testimonial.status}
              </span>
            </div>

            <p className={`italic mb-6 flex-1 text-sm leading-relaxed ${testimonial.status === 'HIDDEN' ? 'text-slate-400 dark:text-slate-600' : 'text-slate-700 dark:text-slate-300'}`}>
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img 
                  src={testimonial.authorImage} 
                  alt={testimonial.authorName} 
                  className={`w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm ${testimonial.status === 'HIDDEN' ? 'opacity-50 grayscale' : ''}`}
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center ${testimonial.status === 'APPROVED' ? 'bg-emerald-500' : 'bg-slate-400'}`}>
                   {testimonial.status === 'APPROVED' && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                </div>
              </div>
              <div>
                <h4 className={`text-sm font-bold ${testimonial.status === 'HIDDEN' ? 'text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                  {testimonial.authorName}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => toggleStatus(testimonial.id)}
                className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${
                  testimonial.status === 'APPROVED'
                    ? 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                }`}
              >
                {testimonial.status === 'APPROVED' ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    Hide
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    Approve
                  </>
                )}
              </button>
            </div>
          </div>
        ))}

        {/* Create New Testimonial Card */}
        <div className="bg-transparent rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-all duration-300 flex flex-col items-center justify-center p-8 min-h-[300px] cursor-pointer group">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm">
            <Plus className="w-8 h-8 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </div>
          <h3 className="text-base font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 text-center transition-colors">Add Testimonial</h3>
          <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[200px]">
            Manually input new customer feedback
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-8">
         <p>© 2024 Yari Tech Admin Panel. Premium Cloud Infrastructure.</p>
         <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Support</a>
         </div>
      </div>
    </div>
  );
};

export default Testimonials;
