import { useState } from 'react';
import { 
  Search, 
  Mail, 
  X, 
  CornerUpLeft, 
  RefreshCw, 
  Trash2,
  Quote
} from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  status: string;
  initials: string;
  color: string;
  company: string;
  phone: string;
  budget: string;
  timeline: string;
  message: string;
}

const mockInquiries: Inquiry[] = [
  {
    id: 'YARI-2023-042',
    name: 'Rico J. Puno',
    email: 'rico.puno@creativepulse.ph',
    projectType: 'E-COMMERCE PLATFORM',
    status: 'IN REVIEW',
    initials: 'RP',
    color: 'bg-[#001f3f]',
    company: 'Creative Pulse PH',
    phone: '+63 917 123 4567',
    budget: '₱250,000 - ₱400,000',
    timeline: '3-4 Months',
    message: "Hi Yari Tech team, we're looking to revamp our current online store to handle higher traffic volumes during sale seasons. We need a robust solution that integrates with local payment gateways (GCash, Maya) and local logistics partners. We saw your previous work with 'MarketHub' and were very impressed. Looking forward to discussing this project further!"
  },
  {
    id: 'YARI-2023-043',
    name: 'Sonia Mercado',
    email: 'sonia.m@bakerybox.com',
    projectType: 'CORPORATE WEB',
    status: 'NEW',
    initials: 'SM',
    color: 'bg-emerald-200 text-emerald-800',
    company: 'Bakery Box',
    phone: '+63 920 987 6543',
    budget: '₱100,000 - ₱150,000',
    timeline: '1-2 Months',
    message: "We need a simple corporate website to showcase our bakery products and allow customers to pre-order."
  },
  {
    id: 'YARI-2023-044',
    name: 'Dino Valenzuela',
    email: 'dino@logisticpro.com.ph',
    projectType: 'CUSTOM ERP',
    status: 'REPLIED',
    initials: 'DV',
    color: 'bg-blue-100 text-blue-800',
    company: 'Logistic Pro',
    phone: '+63 999 111 2222',
    budget: '₱500,000+',
    timeline: '6+ Months',
    message: "Looking for a custom ERP solution to manage our growing fleet and warehouse operations."
  },
  {
    id: 'YARI-2023-045',
    name: 'Elena Ledesma',
    email: 'elena@urbanflow.io',
    projectType: 'MOBILE APP',
    status: 'CLOSED',
    initials: 'EL',
    color: 'bg-rose-200 text-rose-800',
    company: 'Urban Flow',
    phone: '+63 918 333 4444',
    budget: '₱300,000 - ₱500,000',
    timeline: '4-5 Months',
    message: "We want to build a mobile app for our fitness community."
  }
];

const Inquiries = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  const handleRowClick = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsSlideOverOpen(true);
  };

  const closeSlideOver = () => {
    setIsSlideOverOpen(false);
    // Optional delay to clear data after animation
    setTimeout(() => setSelectedInquiry(null), 300);
  };

  return (
    <div className="flex h-full relative overflow-hidden">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pr-4 sm:pr-6 lg:pr-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Inquiries</h1>
          <p className="mt-2 text-gray-600">
            Manage incoming project requests and client communications.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col flex-1">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search inquiries by name or email..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              />
            </div>
            <select className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Projects</option>
              <option>E-Commerce</option>
              <option>Corporate Web</option>
              <option>Mobile App</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Project Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockInquiries.map((inquiry) => (
                  <tr 
                    key={inquiry.id} 
                    onClick={() => handleRowClick(inquiry)}
                    className="hover:bg-gray-50/80 cursor-pointer transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${inquiry.color.includes('bg-[#') ? inquiry.color : inquiry.color.split(' ')[0]}`}>
                          {inquiry.color.includes('text-') ? (
                             <span className={inquiry.color.split(' ')[1]}>{inquiry.initials}</span>
                          ) : inquiry.initials}
                        </div>
                        <div className="ml-4">
                          <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{inquiry.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {inquiry.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded flex inline-flex w-max uppercase tracking-wider">
                        {inquiry.projectType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50">
            <p className="text-sm text-gray-500">
              Showing <span className="font-bold text-gray-900">1-10</span> of <span className="font-bold text-gray-900">48</span> results
            </p>
          </div>
        </div>
      </div>

      {/* Slide-over Backdrop (Visible on mobile if needed, or general overlay) */}
      {isSlideOverOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={closeSlideOver}
          aria-hidden="true"
        />
      )}

      {/* Slide-over Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col border-l border-gray-200 ${
          isSlideOverOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedInquiry ? (
          <>
            {/* Slide Header */}
            <div className="px-6 py-6 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Inquiry Details</h2>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                    REFERENCE: #{selectedInquiry.id}
                  </p>
                </div>
              </div>
              <button 
                onClick={closeSlideOver}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Content Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Client Info */}
              <section>
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Client Information</h3>
                   <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">
                     {selectedInquiry.status}
                   </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-sm ${selectedInquiry.color.includes('bg-[#') ? selectedInquiry.color : selectedInquiry.color.split(' ')[0]}`}>
                    {selectedInquiry.color.includes('text-') ? (
                        <span className={selectedInquiry.color.split(' ')[1]}>{selectedInquiry.initials}</span>
                    ) : selectedInquiry.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{selectedInquiry.name}</h4>
                    <p className="text-sm text-gray-500">{selectedInquiry.company}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-sm font-medium text-gray-900 truncate" title={selectedInquiry.email}>{selectedInquiry.email}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Number</p>
                    <p className="text-sm font-medium text-gray-900">{selectedInquiry.phone}</p>
                  </div>
                </div>
              </section>

              {/* Project Overview */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Project Overview</h3>
                <div className="border border-gray-100 rounded-xl overflow-hidden text-sm">
                  <div className="flex justify-between p-4 bg-white border-b border-gray-100">
                    <span className="text-gray-500">Project Type</span>
                    <span className="font-bold text-gray-900">{selectedInquiry.projectType.replace('-', ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-white border-b border-gray-100">
                    <span className="text-gray-500">Budget Range</span>
                    <span className="font-bold text-gray-900">{selectedInquiry.budget}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-white">
                    <span className="text-gray-500">Timeline</span>
                    <span className="font-bold text-gray-900">{selectedInquiry.timeline}</span>
                  </div>
                </div>
              </section>

              {/* Message */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Client Message</h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -right-2 w-10 h-10 text-blue-100 -z-10 transform scale-x-[-1]" />
                  <div className="bg-blue-50/50 p-5 rounded-xl border-l-4 border-blue-600 text-sm text-gray-700 leading-relaxed shadow-sm">
                    "{selectedInquiry.message}"
                  </div>
                </div>
              </section>

            </div>

            {/* Slide Footer Actions */}
            <div className="p-6 border-t border-gray-100 bg-white space-y-3">
              <button className="w-full bg-[#0a192f] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors">
                <CornerUpLeft className="w-4 h-4 mr-2" />
                Reply via Email
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors text-sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Change Status
                </button>
                <button className="w-full bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors text-sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </>
        ) : (
           <div className="flex-1 flex items-center justify-center text-gray-400">Loading...</div>
        )}
      </div>

    </div>
  );
};

export default Inquiries;
