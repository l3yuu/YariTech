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
  Cloud
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
    <div className="flex flex-col h-full max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Account Settings</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Manage your company profile, security credentials, and system notification preferences to optimize your Yari Tech workflow.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Settings Navigation Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.name 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${activeTab === tab.name ? 'text-blue-600' : 'text-gray-400'}`} />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full space-y-8">

          {/* GENERAL TAB */}
          {activeTab === 'General' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">General Information</h2>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                Your basic company information used across the admin panel.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company Name</label>
                  <input 
                    type="text" 
                    defaultValue="Yari Tech Solutions"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Business Email</label>
                  <input 
                    type="email" 
                    defaultValue="contact@yaritech.ph"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="text" 
                    defaultValue="+63 917 123 4567"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Headquarters Address</label>
                  <input 
                    type="text" 
                    defaultValue="BGC, Taguig City, Metro Manila"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm text-gray-900"
                  />
                </div>
              </div>

              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Social Media Presence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-[#0a192f] text-white">
                    <Globe className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Facebook URL" 
                    className="flex-1 block w-full px-4 py-2.5 rounded-none rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
                  />
                </div>
                <div className="flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-[#0a192f] text-white">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="LinkedIn URL" 
                    className="flex-1 block w-full px-4 py-2.5 rounded-none rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
                  />
                </div>
                <div className="flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-[#0a192f] text-white">
                    <Code className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="GitHub Profile" 
                    className="flex-1 block w-full px-4 py-2.5 rounded-none rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
                  />
                </div>
                <div className="flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-[#0a192f] text-white">
                    <Camera className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Instagram Username" 
                    className="flex-1 block w-full px-4 py-2.5 rounded-none rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button className="px-6 py-2.5 bg-[#0a192f] text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'Security' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Security</h2>
                  <p className="text-sm text-gray-500 mt-1">Update your password and manage account security.</p>
                </div>
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="max-w-md space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                  />
                </div>
                
                <button className="w-full mt-2 px-4 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors shadow-sm">
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'Notifications' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>
                <p className="text-sm text-gray-500 mt-1">Choose what events you want to be notified about.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start justify-between py-4 border-b border-gray-100">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">New Inquiry Received</h4>
                    <p className="text-xs text-gray-500 mt-1">Get emailed when a lead submits a form.</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(n => ({ ...n, newInquiry: !n.newInquiry }))}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${notifications.newInquiry ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.newInquiry ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-start justify-between py-4 border-b border-gray-100">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">New Client Registered</h4>
                    <p className="text-xs text-gray-500 mt-1">Alerts for new dashboard registrations.</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(n => ({ ...n, newClient: !n.newClient }))}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${notifications.newClient ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.newClient ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-start justify-between py-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Project Status Updated</h4>
                    <p className="text-xs text-gray-500 mt-1">Weekly summary of all project changes.</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(n => ({ ...n, projectStatus: !n.projectStatus }))}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${notifications.projectStatus ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.projectStatus ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* INTEGRATIONS TAB */}
          {activeTab === 'Integrations' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Active Integrations</h2>
                  <p className="text-sm text-gray-500 mt-1">Connect third-party tools to your admin panel.</p>
                </div>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                  + Explore Marketplace
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Google Analytics */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Google Analytics</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <button className="w-full py-2 border border-gray-200 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-50 transition-colors">
                    Disconnect
                  </button>
                </div>

                {/* PayMongo */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">PayMongo</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <button className="w-full py-2 border border-gray-200 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-50 transition-colors">
                    Disconnect
                  </button>
                </div>

                {/* Calendly */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Calendly</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <span className="text-xs text-gray-400">Not Connected</span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-md text-xs font-medium hover:bg-blue-700 transition-colors shadow-sm">
                    Connect
                  </button>
                </div>

                {/* Cloudinary */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Cloudinary</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <button className="w-full py-2 border border-gray-200 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-50 transition-colors">
                    Disconnect
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
