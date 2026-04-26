
import { ExternalLink, ArrowRight } from 'lucide-react';

const SelectedWork = () => {
  const projects = [
    {
      title: 'Eco-Commerce Hub',
      description: 'A high-performance marketplace for sustainable Filipino products.',
      category: ['React', 'Node.js'],
      color: 'bg-blue-900',
    },
    {
      title: 'LogiTrack Pro',
      description: 'Fleet logistics and fleet management app for a Manila-based firm.',
      category: ['Next.js', 'WebRTC'],
      color: 'bg-slate-900',
    },
    {
      title: 'TalentConnect',
      description: 'Job board and profile portal for Filipino creative freelancers.',
      category: ['React JS', 'Tailwind'],
      color: 'bg-yellow-900',
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b-2 border-gray-100 pb-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Selected Work</h2>
            <div className="h-1 w-1/2 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 group transition-colors">
            View all projects 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] ${project.color}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-3">
                {project.category.map((cat, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4 line-clamp-2">{project.description}</p>
              
              <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
