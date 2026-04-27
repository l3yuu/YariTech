import { useState } from 'react';
import { ChevronDown, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';

interface Project {
  id: string; title: string; description: string;
  badge: 'ACTIVE' | 'INTERNAL' | 'BETA'; tags: string[];
  isVisible: boolean; gradient: string;
}

const mockProjects: Project[] = [
  { id: '1', title: 'Analytics Engine', description: 'Real-time data processing and visualization platform for SME...', badge: 'ACTIVE', tags: ['React', 'Node.js', 'MongoDB'], isVisible: true, gradient: 'from-blue-500 to-cyan-600' },
  { id: '2', title: 'Inventory API', description: 'Robust backend infrastructure for handling multi-channel retail...', badge: 'INTERNAL', tags: ['Node.js', 'Express', 'PostgreSQL'], isVisible: false, gradient: 'from-slate-600 to-slate-800' },
  { id: '3', title: 'Student Portal v2', description: 'Complete overhaul of the academic learning management...', badge: 'ACTIVE', tags: ['React Native', 'Firebase'], isVisible: true, gradient: 'from-teal-500 to-emerald-600' },
  { id: '4', title: 'SupplyChain AI', description: 'Machine learning models for predicting delivery delays in rur...', badge: 'BETA', tags: ['Python', 'TensorFlow'], isVisible: true, gradient: 'from-violet-500 to-blue-600' },
];

const badgeStyle = (b: string) => {
  if (b === 'ACTIVE') return 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300';
  if (b === 'BETA') return 'bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300';
  return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
};

const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const toggleVisibility = (id: string) => setProjects(projects.map(p => p.id === id ? { ...p, isVisible: !p.isVisible } : p));

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Portfolio Projects</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Manage and monitor the Yari Tech project ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-2.5 pl-4 pr-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm cursor-pointer">
              <option>All Status</option><option>Active</option><option>Internal</option><option>Beta</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-sm">
            <Plus className="w-4 h-4 mr-2" />Add Project
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8 flex-1">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-slate-900/40 transition-all hover:-translate-y-0.5 flex flex-col group">
            {/* Image placeholder */}
            <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-500" />
              <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm ${badgeStyle(project.badge)}`}>
                {project.badge}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-400 rounded-md text-xs font-mono font-medium">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => toggleVisibility(project.id)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${project.isVisible ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${project.isVisible ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{project.isVisible ? 'Visible' : 'Hidden'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add new */}
        <div className="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors flex flex-col items-center justify-center p-8 min-h-[350px] cursor-pointer group">
          <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/60 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <Plus className="w-7 h-7 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>
          <h3 className="text-base font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1.5 text-center transition-colors">Create New Project</h3>
          <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[180px]">Templates and boilerplates available</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700/60 mt-auto">
        <p className="text-sm text-slate-600 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">4</span> of <span className="font-bold text-slate-900 dark:text-white">24</span> projects</p>
        <div className="flex items-center gap-1">
          {[ChevronLeft, null, null, null, ChevronRight].map((Icon, i) => (
            Icon ? (
              <button key={i} className="p-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <Icon className="w-4 h-4" />
              </button>
            ) : (
              <button key={i} className={`px-3 py-1.5 font-medium rounded-lg text-sm transition-colors ${i === 1 ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                {i}
              </button>
            )
          ))}
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-13 h-13 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all hover:-translate-y-1 p-3.5">
        <Rocket className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Projects;
