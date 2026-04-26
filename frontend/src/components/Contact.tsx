
import { MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Let's Build Something Great</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Ready to take your digital presence to the next level? Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp Us</h4>
                  <p className="text-gray-500 text-sm">+63 900 000 0000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Schedule a Call</h4>
                  <p className="text-gray-500 text-sm">Calendly Link</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
             {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow"
                    placeholder="juan@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select 
                  id="projectType" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow bg-white"
                >
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>System Development</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-shadow resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-[#001f3f] hover:bg-[#003366] text-white font-bold py-4 px-8 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
