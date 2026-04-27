import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Eco-Commerce Hub',
    description: 'A high-performance marketplace for sustainable Filipino products.',
    tags: ['React', 'Node.js'],
    gradient: 'from-blue-600 via-blue-700 to-indigo-900',
    accentColor: 'bg-blue-400/20',
  },
  {
    title: 'LogiTrack Pro',
    description: 'Fleet logistics and management app for a Manila-based logistics firm.',
    tags: ['Next.js', 'WebRTC'],
    gradient: 'from-slate-700 via-slate-800 to-gray-900',
    accentColor: 'bg-slate-400/20',
  },
  {
    title: 'TalentConnect',
    description: 'Job board and profile portal for Filipino creative freelancers.',
    tags: ['React', 'Tailwind'],
    gradient: 'from-amber-600 via-orange-700 to-yellow-900',
    accentColor: 'bg-amber-400/20',
  },
];

const SelectedWork = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group transition-colors shrink-0"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image area */}
              <div className={`relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-gradient-to-br ${project.gradient}`}>
                {/* Abstract decorations */}
                <div className={`absolute top-4 right-4 w-24 h-24 ${project.accentColor} rounded-full blur-xl`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold shadow-lg">
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
