import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Edit2, Globe, Loader2, Search, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Client {
  _id: string;
  name: string;
  industry: string;
  logo?: string;
  website?: string;
  status: 'Active' | 'Past' | 'Lead';
  createdAt: string;
}

export default function Clients() {
  const { user } = useAuth();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    website: '',
    status: 'Active' as 'Active' | 'Past' | 'Lead'
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/clients', {
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      const data = await response.json();
      setClients(data);
      if (data.length > 0 && !selectedClient) setSelectedClient(data[0]);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing 
      ? `http://localhost:5000/api/clients/${selectedClient?._id}` 
      : 'http://localhost:5000/api/clients';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchClients();
      }
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this client?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/clients/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });

      if (response.ok) {
        if (selectedClient?._id === id) setSelectedClient(null);
        fetchClients();
      }
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ name: '', industry: '', website: '', status: 'Active' });
    setIsModalOpen(true);
  };

  const openEditModal = (client: Client) => {
    setIsEditing(true);
    setFormData({ 
      name: client.name, 
      industry: client.industry, 
      website: client.website || '', 
      status: client.status 
    });
    setIsModalOpen(true);
  };

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] min-h-[600px]">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Clients</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl text-sm">Manage your business partnerships and service agreements.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={openAddModal}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />Add Client
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-5 min-h-0">
        {/* Client List */}
        <div className="flex-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-700/60 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/60 dark:bg-slate-800/80">
            <div className="col-span-5 pl-2">Client Name</div>
            <div className="col-span-5">Contact Info</div>
            <div className="col-span-2 text-right pr-4">Actions</div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : filteredClients.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <Users className="w-12 h-12 mb-4 opacity-20" />
                <p>No clients found.</p>
              </div>
            ) : (
              filteredClients.map((client) => (
                <div
                  key={client._id}
                  onClick={() => setSelectedClient(client)}
                  className={`grid grid-cols-12 gap-4 p-4 border-b border-slate-50 dark:border-slate-700/30 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors items-center ${selectedClient?._id === client._id ? 'bg-blue-50/40 dark:bg-blue-950/20 border-l-2 border-l-blue-500' : ''}`}
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm`}>
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{client.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{client.industry}</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col justify-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">{client.website || 'No website'}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{client.status}</p>
                  </div>
                  <div className="col-span-2 flex justify-end pr-2 gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); openEditModal(client); }}
                      className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDelete(client._id); }}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Showing {filteredClients.length} clients</span>
            <div className="flex items-center gap-1.5">
              {['Previous', '1', 'Next'].map((p, i) => (
                <button key={p} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i === 1 ? 'bg-blue-600 text-white' : 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Pane */}
        {selectedClient && (
          <div className="w-[400px] bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl flex flex-col overflow-hidden shadow-sm shrink-0">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 relative shrink-0">
              <button onClick={() => setSelectedClient(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md`}>
                  {selectedClient.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{selectedClient.name}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedClient.industry} • Joined {new Date(selectedClient.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-7">
              {/* Info */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Client Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/50">
                    <Globe className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{selectedClient.website || 'No website'}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/50">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${selectedClient.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>{selectedClient.status}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Internal Profile</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  This client is currently in the <strong>{selectedClient.status}</strong> phase. They operate in the <strong>{selectedClient.industry}</strong> sector.
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-700/60 shrink-0 flex gap-3">
              <button 
                onClick={() => openEditModal(selectedClient)}
                className="flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white font-semibold py-2.5 px-4 rounded-xl transition-all shadow-sm text-sm"
              >
                Edit Profile
              </button>
              <button 
                onClick={() => handleDelete(selectedClient._id)}
                className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 p-2.5 rounded-xl border border-red-100 dark:border-red-900/50 hover:bg-red-100 transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
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
                {isEditing ? 'Edit Client' : 'Add New Client'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Client Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="e.g. Solana Marketplace"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Industry</label>
                <input 
                  type="text" 
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="e.g. Tech Startup"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Website (optional)</label>
                <input 
                  type="text" 
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  placeholder="https://client.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Status</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer dark:text-white"
                >
                  <option value="Active">Active</option>
                  <option value="Past">Past</option>
                  <option value="Lead">Lead</option>
                </select>
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
                  {isEditing ? 'Save Changes' : 'Create Client'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
