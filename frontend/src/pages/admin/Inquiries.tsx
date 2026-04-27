import { useState, useEffect } from 'react';
import { Search, Mail, X, CornerUpLeft, RefreshCw, Trash2, Quote, Loader2, Inbox } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import API_URL from '../../config';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  projectType: string;
  status: string;
  message: string;
  createdAt: string;
  // UI helper fields
  initials?: string;
  avatarGradient?: string;
}

const statusStyle = (s: string) => {
  if (s === 'IN REVIEW') return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300';
  if (s === 'NEW') return 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300';
  if (s === 'REPLIED') return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300';
  return 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400';
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
};

const getGradient = (id: string) => {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-indigo-500',
    'from-pink-500 to-rose-500',
    'from-amber-500 to-orange-500'
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
};

const Inquiries = () => {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/inquiries`, {
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error('Connection error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [user?.token]);

  const handleRowClick = (inquiry: Inquiry) => { 
    setSelectedInquiry(inquiry); 
    setIsSlideOverOpen(true); 
  };

  const closeSlideOver = () => { 
    setIsSlideOverOpen(false); 
    setTimeout(() => setSelectedInquiry(null), 300); 
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      if (response.ok) {
        setInquiries(inquiries.filter(inq => inq._id !== id));
        closeSlideOver();
      }
    } catch (err) {
      alert('Failed to delete inquiry');
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        const updated = await response.json();
        setInquiries(inquiries.map(inq => inq._id === id ? updated : inq));
        setSelectedInquiry(updated);
      }
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inq.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-full relative overflow-hidden">
      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Inquiries</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Manage incoming project requests and client communications.</p>
        </div>

        <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden flex flex-col flex-1">
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Filter:</span>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full sm:w-auto pl-3 pr-8 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="NEW">New</option>
                <option value="IN REVIEW">In Review</option>
                <option value="REPLIED">Replied</option>
                <option value="CLOSED">Closed</option>
              </select>
              <button 
                onClick={fetchInquiries}
                className="p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
                <p className="font-medium">Loading inquiries...</p>
              </div>
            ) : filteredInquiries.length > 0 ? (
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-800/80">
                  <tr>
                    <th className="px-5 py-3.5">Name</th>
                    <th className="px-5 py-3.5 hidden md:table-cell">Email</th>
                    <th className="px-5 py-3.5 hidden lg:table-cell">Project Type</th>
                    <th className="px-5 py-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40">
                  {filteredInquiries.map((inq) => (
                    <tr key={inq._id} onClick={() => handleRowClick(inq)} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 cursor-pointer transition-colors group">
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${getGradient(inq._id)} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>{getInitials(inq.name)}</div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{inq.name}</span>
                            <span className="text-[10px] text-slate-400 md:hidden">{inq.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-500 dark:text-slate-400 hidden md:table-cell">{inq.email}</td>
                      <td className="px-5 py-4 hidden lg:table-cell">
                        <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-md uppercase tracking-wider">{inq.projectType}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${statusStyle(inq.status)}`}>{inq.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <Inbox className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-medium">{searchQuery ? 'No inquiries match your search.' : 'No inquiries found.'}</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/40">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {filteredInquiries.length > 0 ? (
                <>Showing <span className="font-bold text-slate-900 dark:text-white">{filteredInquiries.length}</span> results</>
              ) : (
                <>No results to display</>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isSlideOverOpen && <div className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={closeSlideOver} />}

      {/* Slide-over */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-slate-200 dark:border-slate-700 ${isSlideOverOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {selectedInquiry && (
          <>
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700/60 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">Inquiry Details</h2>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">REF: #{selectedInquiry._id.substring(selectedInquiry._id.length - 8).toUpperCase()}</p>
                </div>
              </div>
              <button onClick={closeSlideOver} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-7">
              {/* Client Info */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Client Information</h3>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${statusStyle(selectedInquiry.status)}`}>{selectedInquiry.status}</span>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getGradient(selectedInquiry._id)} flex items-center justify-center text-white text-lg font-bold shadow-md`}>{getInitials(selectedInquiry.name)}</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{selectedInquiry.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Inquiry received on {new Date(selectedInquiry.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-700/60">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-xs font-medium text-slate-900 dark:text-white truncate">{selectedInquiry.email}</p>
                  </div>
                </div>
              </section>

              {/* Project Overview */}
              <section>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Project Overview</h3>
                <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700/60 text-sm">
                  <div className="flex justify-between p-4 bg-white dark:bg-slate-800/40">
                    <span className="text-slate-500 dark:text-slate-400">Project Type</span>
                    <span className="font-bold text-slate-900 dark:text-white text-right">{selectedInquiry.projectType}</span>
                  </div>
                </div>
              </section>

              {/* Message */}
              <section>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Client Message</h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -right-2 w-9 h-9 text-blue-100 dark:text-blue-900/50 -z-10 transform scale-x-[-1]" />
                  <div className="bg-blue-50/60 dark:bg-blue-950/30 p-5 rounded-xl border-l-4 border-blue-500 text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                    "{selectedInquiry.message}"
                  </div>
                </div>
              </section>
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-900 space-y-3">
              <a 
                href={`mailto:${selectedInquiry.email}?subject=Regarding your inquiry at Yari Tech`}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all shadow-md shadow-blue-500/20"
              >
                <CornerUpLeft className="w-4 h-4 mr-2" />Reply via Email
              </a>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition-colors text-sm">
                    <RefreshCw className="w-4 h-4 mr-2" />Status
                  </button>
                  <div className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 p-2 space-y-1">
                    {['NEW', 'IN REVIEW', 'REPLIED', 'CLOSED'].map(s => (
                      <button 
                        key={s}
                        onClick={() => handleStatusUpdate(selectedInquiry._id, s)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-[10px] font-bold ${statusStyle(s)} hover:opacity-80 transition-opacity`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(selectedInquiry._id)}
                  className="w-full bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 dark:text-red-400 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition-colors text-sm"
                >
                  <Trash2 className="w-4 h-4 mr-2" />Delete
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Inquiries;
