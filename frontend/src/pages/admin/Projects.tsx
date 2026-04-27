import { useState, useEffect } from 'react';
import { ChevronDown, Plus, Edit2, Trash2, Rocket, X, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import API_URL from '../../config';

interface Project {
  _id: string;
  id?: string;
  title: string;
  description: string;
  badge: 'ACTIVE' | 'INTERNAL' | 'BETA';
  tags: string[];
  isVisible: boolean;
  gradient: string;
}

const badgeStyle = (b: string) => {
  if (b === 'ACTIVE') return 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300';
  if (b === 'BETA') return 'bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300';
  return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
};

const Projects = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    badge: 'ACTIVE' as 'ACTIVE' | 'INTERNAL' | 'BETA',
    tags: '',
    isVisible: true,
    gradient: 'from-blue-500 to-violet-600'
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        badge: project.badge,
        tags: project.tags.join(', '),
        isVisible: project.isVisible,
        gradient: project.gradient
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        badge: 'ACTIVE',
        tags: '',
        isVisible: true,
        gradient: 'from-blue-500 to-violet-600'
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingProject 
      ? `${API_URL}/projects/${editingProject._id}` 
      : `${API_URL}/projects`;
    const method = editingProject ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        })
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchProjects();
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });

      if (response.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleVisibility = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ isVisible: !currentStatus })
      });

      if (response.ok) {
        setProjects(projects.map(p => p._id === id ? { ...p, isVisible: !currentStatus } : p));
      }
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

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
          <button 
            onClick={() => handleOpenModal()}
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-sm"
          >
            <Plus className="w-4 h-4 mr-2" />Add Project
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8 flex-1">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : projects.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-800/40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
            <Rocket className="w-12 h-12 text-slate-300 mb-4" />
            <p className="text-slate-500 dark:text-slate-400 font-medium">No projects found. Create your first one!</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-slate-900/40 transition-all hover:-translate-y-0.5 flex flex-col group">
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
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-400 rounded-md text-xs font-mono font-medium">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => toggleVisibility(project._id, project.isVisible)}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${project.isVisible ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${project.isVisible ? 'translate-x-4' : 'translate-x-1'}`} />
                    </button>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{project.isVisible ? 'Visible' : 'Hidden'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => handleOpenModal(project)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(project._id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Add new card */}
        {!loading && (
          <div 
            onClick={() => handleOpenModal()}
            className="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors flex flex-col items-center justify-center p-8 min-h-[350px] cursor-pointer group"
          >
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/60 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <Plus className="w-7 h-7 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-base font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1.5 text-center transition-colors">Create New Project</h3>
            <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[180px]">Showcase your latest innovation</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Project Title</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="e.g. Analytics Engine"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Description</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="Brief overview of the project..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Badge</label>
                  <select 
                    value={formData.badge}
                    onChange={(e) => setFormData({...formData, badge: e.target.value as any})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer dark:text-white"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INTERNAL">INTERNAL</option>
                    <option value="BETA">BETA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                    placeholder="React, Node.js"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Gradient Class</label>
                <input 
                  type="text" 
                  value={formData.gradient}
                  onChange={(e) => setFormData({...formData, gradient: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  placeholder="from-blue-500 to-violet-600"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, isVisible: !formData.isVisible})}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${formData.isVisible ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${formData.isVisible ? 'translate-x-4' : 'translate-x-1'}`} />
                </button>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Publicly Visible</span>
              </div>

              <div className="flex gap-3 pt-6">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
                >
                  {editingProject ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700/60 mt-auto">
        <p className="text-sm text-slate-600 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">{projects.length}</span> projects</p>
      </div>

      {/* FAB */}
      <button 
        onClick={() => handleOpenModal()}
        className="fixed bottom-8 right-8 w-13 h-13 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all hover:-translate-y-1 p-3.5"
      >
        <Rocket className="w-5 h-5" />
      </button>

    </div>
  );
};

export default Projects;
