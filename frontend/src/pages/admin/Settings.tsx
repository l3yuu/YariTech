import { useState, useEffect } from 'react';
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
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Save,
  Trash2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import API_URL from '../../config';

const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('General');
  
  const [companyData, setCompanyData] = useState({
    companyName: 'Yari Tech Solutions',
    businessEmail: 'contact@yaritech.ph',
    phoneNumber: '+63 917 123 4567',
    headquarters: 'BGC, Taguig City, Metro Manila',
    socials: {
      facebook: '',
      linkedin: '',
      github: '',
      instagram: ''
    }
  });

  const [notifications, setNotifications] = useState({
    newInquiry: true,
    newClient: true,
    projectStatus: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // Fetch settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_URL}/settings`, {
          headers: {
            'Authorization': `Bearer ${user?.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setCompanyData({
            companyName: data.companyName,
            businessEmail: data.businessEmail,
            phoneNumber: data.phoneNumber,
            headquarters: data.headquarters,
            socials: data.socials
          });
          setNotifications(data.notifications);
        }
      } catch (err) {
        console.error('Failed to fetch settings');
      }
    };

    if (user?.token) fetchSettings();
  }, [user?.token]);

  const handleGeneralUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback({ type: null, message: '' });

    try {
      const response = await fetch(`${API_URL}/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        setFeedback({ type: 'success', message: 'General settings updated!' });
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationToggle = async (id: string) => {
    const updatedNotifications = { 
      ...notifications, 
      [id]: !notifications[id as keyof typeof notifications] 
    };
    
    setNotifications(updatedNotifications);

    try {
      await fetch(`${API_URL}/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ notifications: updatedNotifications }),
      });
    } catch (err) {
      console.error('Failed to update notifications');
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ type: null, message: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setFeedback({ type: 'error', message: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setFeedback({ type: 'error', message: 'Password must be at least 6 characters' });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/updatepassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update password');
      }

      setFeedback({ type: 'success', message: 'Password updated successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleGeneralUpdate} className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 lg:p-10">
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">General Information</h2>
                {feedback.type === 'success' && activeTab === 'General' && (
                  <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> {feedback.message}
                  </div>
                )}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Your basic company information used across the admin panel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Company Name</label>
                  <input 
                    type="text" 
                    value={companyData.companyName}
                    onChange={(e) => setCompanyData({...companyData, companyName: e.target.value})}
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Business Email</label>
                  <input 
                    type="email" 
                    value={companyData.businessEmail}
                    onChange={(e) => setCompanyData({...companyData, businessEmail: e.target.value})}
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Phone Number</label>
                  <input 
                    type="text" 
                    value={companyData.phoneNumber}
                    onChange={(e) => setCompanyData({...companyData, phoneNumber: e.target.value})}
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Headquarters</label>
                  <input 
                    type="text" 
                    value={companyData.headquarters}
                    onChange={(e) => setCompanyData({...companyData, headquarters: e.target.value})}
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Social Media Presence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                    <span className="inline-flex items-center px-5 bg-slate-900 dark:bg-slate-800 text-white border-r border-slate-700">
                      <Globe className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Facebook URL" 
                      value={companyData.socials.facebook}
                      onChange={(e) => setCompanyData({...companyData, socials: {...companyData.socials, facebook: e.target.value}})}
                      className="flex-1 block w-full px-5 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm font-semibold bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                    <span className="inline-flex items-center px-5 bg-slate-900 dark:bg-slate-800 text-white border-r border-slate-700">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      placeholder="LinkedIn URL" 
                      value={companyData.socials.linkedin}
                      onChange={(e) => setCompanyData({...companyData, socials: {...companyData.socials, linkedin: e.target.value}})}
                      className="flex-1 block w-full px-5 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm font-semibold bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                    <span className="inline-flex items-center px-5 bg-slate-900 dark:bg-slate-800 text-white border-r border-slate-700">
                      <Code className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      placeholder="GitHub Profile" 
                      value={companyData.socials.github}
                      onChange={(e) => setCompanyData({...companyData, socials: {...companyData.socials, github: e.target.value}})}
                      className="flex-1 block w-full px-5 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm font-semibold bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                    <span className="inline-flex items-center px-5 bg-slate-900 dark:bg-slate-800 text-white border-r border-slate-700">
                      <Camera className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Instagram Username" 
                      value={companyData.socials.instagram}
                      onChange={(e) => setCompanyData({...companyData, socials: {...companyData.socials, instagram: e.target.value}})}
                      className="flex-1 block w-full px-5 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm font-semibold bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-8 border-t border-slate-100 dark:border-slate-700/60">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save Changes
                </button>
              </div>
            </form>
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
              
              <form onSubmit={handlePasswordUpdate} className="max-w-md space-y-6">
                {feedback.type && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${feedback.type === 'success' ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 text-red-700 dark:text-red-400'}`}>
                    {feedback.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    <p className="text-sm font-medium">{feedback.message}</p>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Current Password</label>
                  <input 
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    required
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">New Password</label>
                  <input 
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Confirm New Password</label>
                  <input 
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    required
                    className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Shield className="w-4 h-4" />}
                  Update Password
                </button>
              </form>

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
                      onClick={() => handleNotificationToggle(item.id)}
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
