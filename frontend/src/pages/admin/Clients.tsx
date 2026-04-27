import { useState } from 'react';
import { Mail, Phone, MapPin, X, Plus } from 'lucide-react';

const mockClients = [
  { id: 1, name: 'Solana Marketplace', type: 'Tech Startup', email: 'contact@solana.ph', phone: '+63 912 345 6789', projects: 5, initials: 'SM', gradient: 'from-blue-500 to-cyan-500', address: 'Makati City, Metro Manila', since: 2022, projectHistory: [{ name: 'Eco-Commerce Hub', status: 'ACTIVE', updated: 'Aug 12, 2023' }], notes: 'Client prefers weekly updates via email every Friday. High priority for SEO-focused development on the Marketplace project.' },
  { id: 2, name: 'EcoKonek', type: 'Sustainability', email: 'admin@ecokonek.com', phone: '+63 928 111 2222', projects: 2, initials: 'EK', gradient: 'from-emerald-500 to-teal-500', address: 'Quezon City, Metro Manila', since: 2023, projectHistory: [], notes: '' },
  { id: 3, name: 'Yari Ledger Group', type: 'Fintech', email: 'billing@yariledger.ph', phone: '+63 999 555 4444', projects: 8, initials: 'YL', gradient: 'from-violet-500 to-purple-500', address: 'BGC, Taguig City', since: 2021, projectHistory: [{ name: 'Yari Ledger', status: 'COMPLETED', updated: 'June 01, 2023' }], notes: '' },
];

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<typeof mockClients[0] | null>(mockClients[0]);

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] min-h-[600px]">
      <div className="mb-6 flex justify-between items-start shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Clients</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl text-sm">Manage your business partnerships and service agreements.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
          <Plus className="w-4 h-4" />Add Client
        </button>
      </div>

      <div className="flex-1 flex gap-5 min-h-0">
        {/* Client List */}
        <div className="flex-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-700/60 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50/60 dark:bg-slate-800/80">
            <div className="col-span-5 pl-2">Client Name</div>
            <div className="col-span-5">Contact Info</div>
            <div className="col-span-2 text-right pr-4">Projects</div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {mockClients.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`grid grid-cols-12 gap-4 p-4 border-b border-slate-50 dark:border-slate-700/30 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors items-center ${selectedClient?.id === client.id ? 'bg-blue-50/40 dark:bg-blue-950/20 border-l-2 border-l-blue-500' : ''}`}
              >
                <div className="col-span-5 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${client.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm`}>{client.initials}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{client.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{client.type}</p>
                  </div>
                </div>
                <div className="col-span-5 flex flex-col justify-center">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{client.email}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{client.phone}</p>
                </div>
                <div className="col-span-2 flex justify-end pr-2">
                  <div className="bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600 rounded-xl px-3 py-1.5 text-center min-w-[64px]">
                    <span className="block text-sm font-bold text-blue-600 dark:text-blue-400">{client.projects}</span>
                    <span className="block text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase mt-0.5">Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Showing 1 to 3 of 42 clients</span>
            <div className="flex items-center gap-1.5">
              {['Previous', '1', '2', 'Next'].map((p, i) => (
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
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedClient.gradient} flex items-center justify-center text-white text-xl font-bold shadow-md`}>{selectedClient.initials}</div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{selectedClient.name}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Active client since {selectedClient.since}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-7">
              {/* Contact */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { Icon: Mail, val: selectedClient.email },
                    { Icon: Phone, val: selectedClient.phone },
                    { Icon: MapPin, val: selectedClient.address },
                  ].map(({ Icon, val }) => (
                    <div key={val} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/50">
                      <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project History */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Project History</h3>
                  <button className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {selectedClient.projectHistory.length > 0 ? selectedClient.projectHistory.map((p, idx) => (
                    <div key={idx} className="p-4 border border-slate-100 dark:border-slate-700/60 rounded-xl bg-slate-50/50 dark:bg-slate-700/30">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{p.name}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${p.status === 'ACTIVE' ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' : 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'}`}>{p.status}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{p.status === 'ACTIVE' ? 'Last updated' : 'Closed'}: {p.updated}</p>
                    </div>
                  )) : <p className="text-sm text-slate-400 dark:text-slate-500 italic">No projects found.</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Internal Notes</h3>
                <textarea className="w-full border border-slate-200 dark:border-slate-600 rounded-xl p-3 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-28 placeholder-slate-400 dark:placeholder-slate-500" value={selectedClient.notes} readOnly placeholder="No internal notes available." />
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-700/60 shrink-0">
              <button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm">
                Save All Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
