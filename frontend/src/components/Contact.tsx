import { MessageSquare, Calendar, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Ready to take your digital presence to the next level? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="https://wa.me/639000000000" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group card-hover"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">WhatsApp Us</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">+63 900 000 0000</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </a>

            <a href="mailto:hello@yaritech.ph"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all group card-hover"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email Us</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">hello@yaritech.ph</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            </a>

            <a href="#"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 hover:border-violet-400 dark:hover:border-violet-600 hover:shadow-lg hover:shadow-violet-500/10 transition-all group card-hover"
            >
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-950/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Book a Call</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">30-min free consultation</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Trust note */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <p className="text-sm font-semibold mb-1">⚡ Fast response time</p>
              <p className="text-xs text-blue-100">We typically respond within 24 hours on business days.</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-xl shadow-black/5 dark:shadow-black/20 p-8">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="juan@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Type</label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                  >
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>System Development</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-shadow"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
