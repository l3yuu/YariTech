import { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  UserPlus, 
  Loader2,
  X,
  Globe
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import API_URL from '../../config';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  order: number;
  isVisible?: boolean; // We'll use this for the toggle even if model doesn't have it yet, or add it to model
}

const Team = () => {
  const { user } = useAuth();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image: 'https://i.pravatar.cc/150',
    order: 0,
    socials: {
      twitter: '',
      linkedin: '',
      github: ''
    }
  });

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/team`);
      if (response.ok) {
        const data = await response.json();
        setMembers(data);
      }
    } catch (err) {
      console.error('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: '',
      role: '',
      bio: '',
      image: 'https://i.pravatar.cc/150',
      order: 0,
      socials: {
        twitter: '',
        linkedin: '',
        github: ''
      }
    });
    setIsModalOpen(false);
  };

  const handleEdit = (member: TeamMember) => {
    setEditingId(member._id);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image || 'https://i.pravatar.cc/150',
      order: member.order || 0,
      socials: {
        twitter: member.socials?.twitter || '',
        linkedin: member.socials?.linkedin || '',
        github: member.socials?.github || ''
      }
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to remove this team member?')) return;
    try {
      const response = await fetch(`${API_URL}/team/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      if (response.ok) {
        setMembers(members.filter(m => m._id !== id));
      }
    } catch (err) {
      alert('Failed to delete team member');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingId 
        ? `${API_URL}/team/${editingId}`
        : `${API_URL}/team`;
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchMembers();
        resetForm();
      }
    } catch (err) {
      alert('Failed to save team member');
    }
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Team Management</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage your core team members and their public presence on the platform.
          </p>
        </div>
        <div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
          >
            <UserPlus className="w-4 h-4" />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
            <p className="font-medium">Loading team members...</p>
          </div>
        ) : (
          <>
            {members.map((member) => (
              <div key={member._id} className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 flex flex-col relative group hover:shadow-md transition-all duration-300">
                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleEdit(member)}
                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(member._id)}
                    className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Profile Image */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1.5 text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-sm line-clamp-3 mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
                    {member.bio}
                  </p>
                </div>

                {/* Socials Link Icons */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-700/60">
                  {member.socials?.linkedin && <Globe className="w-4 h-4 text-slate-400" />}
                  {member.socials?.twitter && <Globe className="w-4 h-4 text-slate-400" />}
                  {member.socials?.github && <Globe className="w-4 h-4 text-slate-400" />}
                  {!member.socials?.linkedin && !member.socials?.twitter && !member.socials?.github && (
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No socials linked</span>
                  )}
                </div>
              </div>
            ))}

            {/* Add Member Card */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-all duration-300 flex flex-col items-center justify-center p-8 min-h-[320px] cursor-pointer group"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm">
                <Plus className="w-8 h-8 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 text-center transition-colors">Add Member</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[200px]">
                Click here to register a new team member to the portal.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={resetForm} />
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingId ? 'Edit Team Member' : 'Add New Member'}
              </h3>
              <button onClick={resetForm} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Role / Title</label>
                  <input 
                    type="text" 
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Lead Developer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bio</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Tell us about this member..."
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Twitter URL</label>
                  <input 
                    type="text" 
                    value={formData.socials.twitter}
                    onChange={(e) => setFormData({...formData, socials: {...formData.socials, twitter: e.target.value}})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn URL</label>
                  <input 
                    type="text" 
                    value={formData.socials.linkedin}
                    onChange={(e) => setFormData({...formData, socials: {...formData.socials, linkedin: e.target.value}})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">GitHub URL</label>
                  <input 
                    type="text" 
                    value={formData.socials.github}
                    onChange={(e) => setFormData({...formData, socials: {...formData.socials, github: e.target.value}})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  {editingId ? 'Update Member' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-10 relative overflow-hidden flex flex-col lg:flex-row items-center mt-6 group">
        <div className="relative z-10 flex-1">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Empowering the Team</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Our management console ensures modular team permissions and secure data access across all organizational layers.
          </p>
        </div>
        
        {/* Abstract Graphic */}
        <div className="relative w-64 h-64 mt-12 lg:mt-0 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-3xl transform scale-75 translate-x-12"></div>
           <div className="absolute top-4 right-12 w-16 h-16 bg-slate-400 dark:bg-slate-200 transform rotate-12 rounded-xl"></div>
           <div className="absolute top-12 right-2 w-12 h-12 border-4 border-blue-500 transform -rotate-12 rounded-xl"></div>
           <div className="absolute bottom-10 right-20 w-20 h-20 bg-violet-500 transform rotate-45 rounded-2xl"></div>
        </div>
      </div>

    </div>
  );
};

export default Team;
