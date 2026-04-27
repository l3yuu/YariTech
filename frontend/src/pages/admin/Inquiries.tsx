import { useState } from 'react';
import { Search, Mail, X, CornerUpLeft, RefreshCw, Trash2, Quote } from 'lucide-react';

interface Inquiry {
  id: string; name: string; email: string; projectType: string; status: string;
  initials: string; avatarGradient: string; company: string; phone: string;
  budget: string; timeline: string; message: string;
}

const mockInquiries: Inquiry[] = [
  { id: 'YARI-2023-042', name: 'Rico J. Puno', email: 'rico.puno@creativepulse.ph', projectType: 'E-COMMERCE PLATFORM', status: 'IN REVIEW', initials: 'RP', avatarGradient: 'from-blue-500 to-cyan-500', company: 'Creative Pulse PH', phone: '+63 917 123 4567', budget: '₱250,000 - ₱400,000', timeline: '3-4 Months', message: "Hi Yari Tech team, we're looking to revamp our current online store to handle higher traffic volumes during sale seasons. We need a robust solution that integrates with local payment gateways (GCash, Maya) and local logistics partners. We saw your previous work with 'MarketHub' and were very impressed. Looking forward to discussing this project further!" },
  { id: 'YARI-2023-043', name: 'Sonia Mercado', email: 'sonia.m@bakerybox.com', projectType: 'CORPORATE WEB', status: 'NEW', initials: 'SM', avatarGradient: 'from-emerald-500 to-teal-500', company: 'Bakery Box', phone: '+63 920 987 6543', budget: '₱100,000 - ₱150,000', timeline: '1-2 Months', message: "We need a simple corporate website to showcase our bakery products and allow customers to pre-order." },
  { id: 'YARI-2023-044', name: 'Dino Valenzuela', email: 'dino@logisticpro.com.ph', projectType: 'CUSTOM ERP', status: 'REPLIED', initials: 'DV', avatarGradient: 'from-violet-500 to-indigo-500', company: 'Logistic Pro', phone: '+63 999 111 2222', budget: '₱500,000+', timeline: '6+ Months', message: "Looking for a custom ERP solution to manage our growing fleet and warehouse operations." },
  { id: 'YARI-2023-045', name: 'Elena Ledesma', email: 'elena@urbanflow.io', projectType: 'MOBILE APP', status: 'CLOSED', initials: 'EL', avatarGradient: 'from-pink-500 to-rose-500', company: 'Urban Flow', phone: '+63 918 333 4444', budget: '₱300,000 - ₱500,000', timeline: '4-5 Months', message: "We want to build a mobile app for our fitness community." },
];

const statusStyle = (s: string) => {
  if (s === 'IN REVIEW') return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300';
  if (s === 'NEW') return 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300';
  if (s === 'REPLIED') return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300';
  return 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400';
};

const Inquiries = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  const handleRowClick = (inquiry: Inquiry) => { setSelectedInquiry(inquiry); setIsSlideOverOpen(true); };
  const closeSlideOver = () => { setIsSlideOverOpen(false); setTimeout(() => setSelectedInquiry(null), 300); };

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
              <input type="text" placeholder="Search by name or email..." className="block w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <select className="block w-full sm:w-auto pl-3 pr-8 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Projects</option><option>E-Commerce</option><option>Corporate Web</option><option>Mobile App</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
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
                {mockInquiries.map((inq) => (
                  <tr key={inq.id} onClick={() => handleRowClick(inq)} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 cursor-pointer transition-colors group">
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${inq.avatarGradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>{inq.initials}</div>
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{inq.name}</span>
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
          </div>

          {/* Pagination */}
          <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/40">
            <p className="text-xs text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">1-4</span> of <span className="font-bold text-slate-900 dark:text-white">48</span> results</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isSlideOverOpen && <div className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={closeSlideOver} />}

      {/* Slide-over */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-slate-200 dark:border-slate-700 ${isSlideOverOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {selectedInquiry ? (
          <>
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700/60 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">Inquiry Details</h2>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">REF: #{selectedInquiry.id}</p>
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
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedInquiry.avatarGradient} flex items-center justify-center text-white text-lg font-bold shadow-md`}>{selectedInquiry.initials}</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{selectedInquiry.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{selectedInquiry.company}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[['Email Address', selectedInquiry.email], ['Phone Number', selectedInquiry.phone]].map(([label, val]) => (
                    <div key={label} className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-700/60">
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-xs font-medium text-slate-900 dark:text-white truncate">{val}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Project Overview */}
              <section>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Project Overview</h3>
                <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700/60 text-sm">
                  {[['Project Type', selectedInquiry.projectType], ['Budget Range', selectedInquiry.budget], ['Timeline', selectedInquiry.timeline]].map(([label, val], i, arr) => (
                    <div key={label} className={`flex justify-between p-4 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700/60' : ''} bg-white dark:bg-slate-800/40`}>
                      <span className="text-slate-500 dark:text-slate-400">{label}</span>
                      <span className="font-bold text-slate-900 dark:text-white text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Message */}
              <section>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Client Message</h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -right-2 w-9 h-9 text-blue-100 dark:text-blue-900/50 -z-10 transform scale-x-[-1]" />
                  <div className="bg-blue-50/60 dark:bg-blue-950/30 p-5 rounded-xl border-l-4 border-blue-500 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    "{selectedInquiry.message}"
                  </div>
                </div>
              </section>
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-900 space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all shadow-md shadow-blue-500/20">
                <CornerUpLeft className="w-4 h-4 mr-2" />Reply via Email
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition-colors text-sm">
                  <RefreshCw className="w-4 h-4 mr-2" />Status
                </button>
                <button className="w-full bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 dark:text-red-400 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition-colors text-sm">
                  <Trash2 className="w-4 h-4 mr-2" />Delete
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400 dark:text-slate-600">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Inquiries;
