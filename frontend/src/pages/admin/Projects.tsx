import { useState } from 'react';
import { Search, ChevronDown, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  badge: 'ACTIVE' | 'INTERNAL' | 'BETA';
  badgeColor: string;
  tags: string[];
  isVisible: boolean;
  gradient: string;
  imagePlaceholder?: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Analytics Engine',
    description: 'Real-time data processing and visualization platform for SME...',
    badge: 'ACTIVE',
    badgeColor: 'bg-blue-100 text-blue-700',
    tags: ['React', 'Node.js', 'MongoDB'],
    isVisible: true,
    gradient: 'from-blue-50 to-white',
  },
  {
    id: '2',
    title: 'Inventory API',
    description: 'Robust backend infrastructure for handling multi-channel retail...',
    badge: 'INTERNAL',
    badgeColor: 'bg-gray-100 text-gray-700',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    isVisible: false,
    gradient: 'from-slate-900 to-slate-800',
  },
  {
    id: '3',
    title: 'Student Portal v2',
    description: 'Complete overhaul of the academic learning management...',
    badge: 'ACTIVE',
    badgeColor: 'bg-blue-100 text-blue-700',
    tags: ['React Native', 'Firebase'],
    isVisible: true,
    gradient: 'from-teal-100 to-emerald-50',
  },
  {
    id: '4',
    title: 'SupplyChain AI',
    description: 'Machine learning models for predicting delivery delays in rur...',
    badge: 'BETA',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    tags: ['Python', 'TensorFlow'],
    isVisible: true,
    gradient: 'from-cyan-600 to-blue-800',
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);

  const toggleVisibility = (id: string) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, isVisible: !p.isVisible } : p
    ));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Portfolio Projects</h1>
          <p className="mt-2 text-gray-600">
            Manage and monitor the Yari Tech project ecosystem.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm shadow-sm cursor-pointer">
              <option>All Status</option>
              <option>Active</option>
              <option>Internal</option>
              <option>Beta</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="bg-[#0a192f] hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg flex items-center shadow-sm transition-colors text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </button>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8 flex-1">
        
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            {/* Card Header / Image Placeholder */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center border-b border-gray-100`}>
               {/* Abstract placeholder shape */}
               <div className="absolute inset-0 opacity-20 flex items-center justify-center mix-blend-overlay">
                  <div className="w-32 h-32 bg-white rounded-full blur-2xl"></div>
               </div>
               {project.gradient.includes('slate') ? (
                  <div className="text-slate-700 opacity-20 font-mono text-xs w-full p-4 overflow-hidden break-all">
                     {`const init = () => { console.log('system online'); return true; };`}
                     <br/>{`app.listen(3000, () => console.log('Running...'));`}
                     <br/>{`SELECT * FROM users WHERE active=1;`}
                  </div>
               ) : (
                  <div className="w-3/4 h-3/4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm flex flex-col p-2">
                     <div className="w-full h-3 bg-white/60 rounded mb-2 w-1/3"></div>
                     <div className="flex-1 flex items-end gap-1">
                        <div className="w-full bg-blue-400/50 rounded-t h-1/3"></div>
                        <div className="w-full bg-blue-500/50 rounded-t h-2/3"></div>
                        <div className="w-full bg-blue-300/50 rounded-t h-1/2"></div>
                        <div className="w-full bg-blue-600/50 rounded-t h-full"></div>
                     </div>
                  </div>
               )}
               
              <span className={`absolute top-4 right-4 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${project.badgeColor} shadow-sm`}>
                {project.badge}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-mono font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleVisibility(project.id)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${project.isVisible ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${project.isVisible ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-sm font-medium text-gray-600">
                    {project.isVisible ? 'Visible' : 'Hidden'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Project Card */}
        <div className="bg-transparent rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/50 transition-colors flex flex-col items-center justify-center p-8 min-h-[400px] cursor-pointer group">
          <div className="w-16 h-16 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-400 group-hover:text-blue-600 mb-2 text-center">Create New Project</h3>
          <p className="text-sm text-gray-400 text-center max-w-[200px]">
            Templates and boilerplates available
          </p>
        </div>

      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between py-4 border-t border-gray-200 mt-auto">
        <p className="text-sm text-gray-600">
          Showing <span className="font-bold">4</span> of <span className="font-bold">24</span> projects
        </p>
        <div className="flex items-center gap-1">
          <button className="p-2 bg-white border border-gray-200 text-gray-500 rounded hover:bg-gray-50 transition-colors focus:outline-none">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-3 py-1.5 bg-[#0a192f] text-white font-medium rounded focus:outline-none shadow-sm">
            1
          </button>
          <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors focus:outline-none">
            2
          </button>
          <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors focus:outline-none">
            3
          </button>
          <button className="p-2 bg-white border border-gray-200 text-gray-500 rounded hover:bg-gray-50 transition-colors focus:outline-none">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Floating Action Button (Matches the rocket in design) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-transform hover:-translate-y-1">
         <Rocket className="w-6 h-6" />
      </button>

    </div>
  );
};

export default Projects;
