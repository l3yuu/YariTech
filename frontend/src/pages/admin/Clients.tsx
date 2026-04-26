import { useState } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

const mockClients = [
  {
    id: 1,
    name: 'Solana Marketplace',
    type: 'Tech Startup',
    email: 'contact@solana.ph',
    phone: '+63 912 345 6789',
    projects: 5,
    initials: 'SM',
    color: 'bg-blue-100 text-blue-600',
    address: 'Makati City, Metro Manila',
    since: 2022,
    projectHistory: [
      { name: 'Eco-Commerce Hub', status: 'ACTIVE', updated: 'Aug 12, 2023' }
    ],
    notes: 'Client prefers weekly updates via email every Friday. High priority for SEO-focused development on the Marketplace project.'
  },
  {
    id: 2,
    name: 'EcoKonek',
    type: 'Sustainability',
    email: 'admin@ecokonek.com',
    phone: '+63 928 111 2222',
    projects: 2,
    initials: 'EK',
    color: 'bg-green-100 text-green-600',
    address: 'Quezon City, Metro Manila',
    since: 2023,
    projectHistory: [],
    notes: ''
  },
  {
    id: 3,
    name: 'Yari Ledger Group',
    type: 'Fintech',
    email: 'billing@yariledger.ph',
    phone: '+63 999 555 4444',
    projects: 8,
    initials: 'YL',
    color: 'bg-purple-100 text-purple-600',
    address: 'BGC, Taguig City',
    since: 2021,
    projectHistory: [
      { name: 'Yari Ledger', status: 'COMPLETED', updated: 'June 01, 2023' }
    ],
    notes: ''
  }
];

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<typeof mockClients[0] | null>(mockClients[0]);

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] min-h-[600px]">
      <div className="mb-6 flex justify-between items-start shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Clients</h1>
          <p className="text-gray-600 mt-2 max-w-xl text-sm">Manage your business partnerships and service agreements.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-600 flex items-center shadow-sm">
          <span className="text-gray-400 mr-2 text-xs uppercase tracking-wider font-semibold">Active Filter:</span> 
          <span className="font-medium text-slate-700 text-sm">All Clients</span>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left List */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/30">
            <div className="col-span-5 pl-2">Client Name</div>
            <div className="col-span-5">Contact Info</div>
            <div className="col-span-2 text-right pr-4">Projects</div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {mockClients.map((client) => (
              <div 
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`grid grid-cols-12 gap-4 p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors items-center ${selectedClient?.id === client.id ? 'bg-blue-50/30' : ''}`}
              >
                <div className="col-span-5 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${client.color}`}>
                    {client.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{client.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{client.type}</p>
                  </div>
                </div>
                <div className="col-span-5 flex flex-col justify-center">
                  <p className="text-sm text-slate-600">{client.email}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{client.phone}</p>
                </div>
                <div className="col-span-2 flex justify-end items-center pr-2">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-center min-w-[70px]">
                    <span className="block text-sm font-bold text-blue-600">{client.projects}</span>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase mt-0.5">Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-white">
            <span>Showing 1 to 3 of 42 clients</span>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 border border-gray-200 bg-white text-gray-600 rounded-md hover:bg-gray-50 text-xs font-medium">Previous</button>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold">1</button>
              <button className="px-3 py-1.5 border border-gray-200 bg-white text-gray-600 rounded-md hover:bg-gray-50 text-xs font-medium">2</button>
              <button className="px-3 py-1.5 border border-gray-200 bg-white text-gray-600 rounded-md hover:bg-gray-50 text-xs font-medium">Next</button>
            </div>
          </div>
        </div>

        {/* Right Details Pane */}
        {selectedClient && (
          <div className="w-[420px] bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden shadow-sm shrink-0">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 relative shrink-0">
              <button 
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl ${selectedClient.color}`}>
                  {selectedClient.initials}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">{selectedClient.name}</h2>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Active Client since {selectedClient.since}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-slate-700">{selectedClient.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-slate-700">{selectedClient.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-slate-700">{selectedClient.address}</span>
                  </div>
                </div>
              </div>

              {/* Project History */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project History</h3>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
                </div>
                <div className="space-y-3">
                  {selectedClient.projectHistory.length > 0 ? (
                    selectedClient.projectHistory.map((project, idx) => (
                      <div key={idx} className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-bold text-slate-900">{project.name}</span>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${project.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{project.status === 'ACTIVE' ? 'Last updated' : 'Closed'}: {project.updated}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 italic">No projects found.</p>
                  )}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Internal Notes</h3>
                <textarea 
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm text-slate-700 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-28"
                  value={selectedClient.notes}
                  readOnly
                  placeholder="No internal notes available."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-white shrink-0">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm">
                Save All Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
