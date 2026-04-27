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
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Testimonials Management</h1>
          <p className="mt-2 text-gray-600">
            Manage and curate feedback from students and business owners.
          </p>
        </div>
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button 
            onClick={() => setFilter('ALL')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'ALL' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('APPROVED')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'APPROVED' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Approved
          </button>
          <button 
            onClick={() => setFilter('HIDDEN')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'HIDDEN' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Hidden
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Reviews */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <MessageSquareQuote className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Total Reviews</p>
            <p className="text-3xl font-bold text-gray-900">124</p>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Approved</p>
            <p className="text-3xl font-bold text-gray-900">98</p>
          </div>
        </div>

        {/* Avg Rating */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-500 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Avg. Rating</p>
            <p className="text-3xl font-bold text-gray-900">4.9</p>
          </div>
        </div>

        {/* Hidden */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
            <EyeOffIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Hidden</p>
            <p className="text-3xl font-bold text-gray-900">26</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 flex-1">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className={`bg-white rounded-xl border ${testimonial.status === 'HIDDEN' ? 'border-dashed border-gray-300 bg-gray-50/50' : 'border-gray-200 shadow-sm'} p-6 flex flex-col`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= testimonial.rating ? (testimonial.status === 'HIDDEN' ? 'text-gray-300 fill-current' : 'text-blue-600 fill-current') : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                testimonial.status === 'APPROVED' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {testimonial.status}
              </span>
            </div>

            <p className={`italic mb-6 flex-1 text-sm ${testimonial.status === 'HIDDEN' ? 'text-gray-400' : 'text-gray-700'}`}>
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-3 mb-6">
              <img 
                src={testimonial.authorImage} 
                alt={testimonial.authorName} 
                className={`w-10 h-10 rounded-full object-cover ${testimonial.status === 'HIDDEN' ? 'opacity-50 grayscale' : ''}`}
              />
              <div>
                <h4 className={`text-sm font-bold ${testimonial.status === 'HIDDEN' ? 'text-gray-500' : 'text-gray-900'}`}>
                  {testimonial.authorName}
                </h4>
                <p className="text-xs text-gray-500">{testimonial.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => toggleStatus(testimonial.id)}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded transition-colors ${
                  testimonial.status === 'APPROVED'
                    ? 'text-gray-500 hover:bg-gray-100'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                {testimonial.status === 'APPROVED' ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Hide
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Approve
                  </>
                )}
              </button>
            </div>
          </div>
        ))}

        {/* Create New Testimonial Card */}
        <div className="bg-transparent rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/50 transition-colors flex flex-col items-center justify-center p-8 min-h-[300px] cursor-pointer group">
          <div className="w-14 h-14 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-colors">
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
          </div>
          <h3 className="text-sm font-bold text-gray-500 group-hover:text-blue-600 mb-1 text-center">Create New Testimonial</h3>
          <p className="text-xs text-gray-400 text-center">
            Manually input customer feedback
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
         <p>© 2024 Yari Tech Admin Panel. All rights reserved.</p>
         <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Documentation</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
         </div>
      </div>
    </div>
  );
};

export default Testimonials;
