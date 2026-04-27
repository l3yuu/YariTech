import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Hero = () => {
  const { user } = useAuth();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-[#0a0f1a]">
      
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-100" />

      {/* Gradient orb top-right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-400/20 via-violet-400/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-20 lg:pt-12 lg:pb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-6">
              <Sparkles className="w-3 h-3" />
              Built for Filipino Innovators 🇵🇭
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-6">
              Freelance‑first.{' '}
              <span className="gradient-text">Built to grow.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              We build systems that work for you — empowering Filipino businesses and innovators with premium digital infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {user ? (
                <Link
                  to="/admin/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
                >
                  Manage Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                {['JR', 'MS', 'LB', 'KA'].map((init, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-white ${['bg-blue-500','bg-violet-500','bg-indigo-500','bg-cyan-500'][i]}`}>
                    {init}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200">50+</span> clients trust Yari Tech
              </p>
            </motion.div>
          </div>

          {/* Right: Floating UI mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Main card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="flex-1 mx-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-3 py-1 text-xs text-slate-400 dark:text-slate-500">
                    yaritech.com/dashboard
                  </div>
                </div>

                {/* Dashboard preview */}
                <div className="p-5 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Revenue', val: '₱128k', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                      { label: 'Projects', val: '24', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                      { label: 'Clients', val: '51', color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/40' },
                    ].map(s => (
                      <div key={s.label} className={`${s.bg} rounded-xl p-3`}>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{s.label}</p>
                        <p className={`text-lg font-bold ${s.color}`}>{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-end gap-1.5 h-20">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-violet-500 opacity-80" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {['Jan','Mar','May','Jul','Sep','Nov'].map(m => (
                        <span key={m} className="text-[9px] text-slate-400">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project list */}
                  <div className="space-y-2">
                    {[
                      { name: 'Eco-Commerce Hub', status: 'Active', color: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' },
                      { name: 'LogiTrack Pro', status: 'In Review', color: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300' },
                    ].map(p => (
                      <div key={p.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{p.name}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.color}`}>{p.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-black/10 dark:shadow-black/30 px-4 py-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-lg">🎉</div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">New project launched</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">2 mins ago</p>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl px-4 py-3 shadow-xl shadow-blue-500/30"
              >
                <p className="text-xs font-bold text-white">⚡ 98% On-time delivery</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
