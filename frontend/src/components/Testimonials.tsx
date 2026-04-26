
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Yari Tech transformed our manual inventory into a seamless digital platform. They really understood the local business landscape.",
      author: "Juan Reyes",
      role: "SME Owner",
      initials: "JR",
      color: "bg-blue-600"
    },
    {
      quote: "As a student, finding a team that could build a complex thesis project within budget was a lifesaver. Highly professional.",
      author: "Maria Santos",
      role: "IT Student",
      initials: "MS",
      color: "bg-indigo-600"
    },
    {
      quote: "Fast communication and incredible design. They don't just code; they solve problems. Highly recommend Yari Tech.",
      author: "Leon Beltran",
      role: "Startup Founder",
      initials: "LB",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Trusted by Innovators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
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
