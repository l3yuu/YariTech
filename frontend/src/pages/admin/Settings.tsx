import { useState } from 'react';
import { 
  Info, 
  Shield, 
  Bell, 
  Blocks, 
  Globe, 
  Briefcase, 
  Code, 
  Camera,
  BarChart,
  CreditCard,
  Calendar,
  Cloud,
  Save,
  Trash2,
  ExternalLink
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [notifications, setNotifications] = useState({
    newInquiry: true,
    newClient: true,
    projectStatus: false,
  });

  const tabs = [
    { name: 'General', icon: Info },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
    { name: 'Integrations', icon: Blocks },
  ];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Account Settings</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Manage your company profile, security credentials, and system notification preferences to optimize your Yari Tech workflow.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start pb-10">
        
        {/* Settings Navigation Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-2.5 sticky top-24">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab.name 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mr-3.5 flex-shrink-0 transition-colors ${activeTab === tab.name ? 'text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600'}`} />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full space-y-10">

          {/* GENERAL TAB */}
          {activeTab === 'General' && (
            <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 lg:p-10">
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">General Information</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Your basic company information used across the admin panel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  { label: 'Company Name', val: 'Yari Tech Solutions', type: 'text' },
                  { label: 'Business Email', val: 'contact@yaritech.ph', type: 'email' },
                  { label: 'Phone Number', val: '+63 917 123 4567', type: 'text' },
                  { label: 'Headquarters', val: 'BGC, Taguig City, Metro Manila', type: 'text' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{field.label}</label>
                    <input 
                      type={field.type} 
                      defaultValue={field.val}
                      className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Social Media Presence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Globe, placeholder: 'Facebook URL' },
                    { icon: Briefcase, placeholder: 'LinkedIn URL' },
                    { icon: Code, placeholder: 'GitHub Profile' },
                    { icon: Camera, placeholder: 'Instagram Username' },
                  ].map((social, i) => (
                    <div key={i} className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                      <span className="inline-flex items-center px-5 bg-slate-900 dark:bg-slate-800 text-white border-r border-slate-700">
                        <social.icon className="w-4 h-4" />
                      </span>
                      <input 
                        type="text" 
                        placeholder={social.placeholder} 
                        className="flex-1 block w-full px-5 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm font-semibold bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-8 border-t border-slate-100 dark:border-slate-700/60">
                <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'Security' && (
            <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 lg:p-10">
              <div className="flex items-center justify-between mb-10 pb-10 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Security & Privacy</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Update your password and manage account security.</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              
              <div className="max-w-md space-y-6">
                {[
                  { label: 'Current Password', type: 'password' },
                  { label: 'New Password', type: 'password' },
                  { label: 'Confirm New Password', type: 'password' },
                ].map((pw) => (
                  <div key={pw.label}>
                    <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{pw.label}</label>
                    <input 
                      type={pw.type} 
                      className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                ))}
                
                <button className="w-full mt-4 px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all shadow-sm">
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'Notifications' && (
            <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 lg:p-10">
              <div className="mb-10 pb-10 border-b border-slate-100 dark:border-slate-700/60">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Notification Settings</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Choose what events you want to be notified about.</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: 'newInquiry', title: 'New Inquiry Received', desc: 'Get emailed when a lead submits a form.' },
                  { id: 'newClient', title: 'New Client Registered', desc: 'Alerts for new dashboard registrations.' },
                  { id: 'projectStatus', title: 'Project Status Updated', desc: 'Weekly summary of all project changes.' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/30 group hover:border-blue-200 dark:hover:border-blue-800/50 transition-colors">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => setNotifications(n => ({ ...n, [item.id]: !n[item.id as keyof typeof notifications] }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none ${notifications[item.id as keyof typeof notifications] ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-all ${notifications[item.id as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTEGRATIONS TAB */}
          {activeTab === 'Integrations' && (
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Integrations</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Connect third-party tools to your admin panel.</p>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:underline">
                  <ExternalLink className="w-3.5 h-3.5" /> Explore Marketplace
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  { name: 'Google Analytics', status: 'Connected', icon: BarChart, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/30' },
                  { name: 'PayMongo', status: 'Connected', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/30' },
                  { name: 'Calendly', status: 'Not Connected', icon: Calendar, color: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-50 dark:bg-slate-900/30' },
                  { name: 'Cloudinary', status: 'Connected', icon: Cloud, color: 'text-cyan-600', bg: 'bg-cyan-50 dark:bg-cyan-900/30' },
                ].map((int) => (
                  <div key={int.name} className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 flex flex-col items-center text-center group hover:shadow-md transition-all duration-300">
                    <div className={`w-14 h-14 ${int.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500`}>
                      <int.icon className={`w-7 h-7 ${int.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{int.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-8">
                      <div className={`w-2 h-2 rounded-full shadow-sm ${int.status === 'Connected' ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${int.status === 'Connected' ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400'}`}>{int.status}</span>
                    </div>
                    
                    <div className="w-full flex gap-3">
                       {int.status === 'Connected' ? (
                          <>
                             <button className="flex-1 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Config</button>
                             <button className="p-2.5 border border-red-100 dark:border-red-900/30 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </>
                       ) : (
                          <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all">Connect Now</button>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
