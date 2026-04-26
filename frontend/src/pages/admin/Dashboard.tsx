import { 
  Inbox, 
  Rocket, 
  Users, 
  Wallet,
  Plus,
  Eye,
  UserPlus,
  MoreVertical,
  Pencil
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { label: 'Total Inquiries', value: '128', icon: Inbox, change: '+12%', changeType: 'positive', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Projects', value: '14', icon: Rocket, change: 'Stable', changeType: 'neutral', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Total Clients', value: '85', icon: Users, change: '+5', changeType: 'positive', color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Revenue This Month', value: '₱245,000', icon: Wallet, change: '+24%', changeType: 'positive', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const inquiries = [
    { id: 1, name: 'Juan dela Cruz', email: 'juan.dc@example.com', type: 'Web Dashboard', status: 'NEW', date: 'Oct 24, 2023' },
    { id: 2, name: 'Maria Santos', email: 'm.santos@biz.ph', type: 'E-commerce App', status: 'IN REVIEW', date: 'Oct 23, 2023' },
    { id: 3, name: 'Antonio Luna', email: 'luna.general@corp.com', type: 'Cloud Migration', status: 'REPLIED', date: 'Oct 21, 2023' },
    { id: 4, name: 'Liza Soberano', email: 'liza@media.ph', type: 'Portfolio Design', status: 'CLOSED', date: 'Oct 18, 2023' },
  ];

  const chartData = [
    { month: 'May', value: 40 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 45 },
    { month: 'Aug', value: 70 },
    { month: 'Sep', value: 85 },
    { month: 'Oct', value: 65 },
  ];

  const activities = [
    { id: 1, text: 'New inquiry received from Juan dela Cruz', time: '2 minutes ago', icon: Inbox, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 2, text: 'Project "Web Dashboard" updated by System Admin', time: '1 hour ago', icon: Pencil, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 3, text: 'New client Antonio Luna added to database', time: '3 hours ago', icon: UserPlus, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 4, text: 'Invoice #INV-9421 marked as paid', time: '5 hours ago', icon: Wallet, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${metric.bg}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <span className={`text-xs font-semibold ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'
              }`}>
                {metric.change}
                {metric.changeType === 'positive' && ' ↗'}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{metric.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Inquiries Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Inquiries</h3>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Project Type</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{inquiry.name}</td>
                    <td className="px-6 py-4 text-gray-500">{inquiry.email}</td>
                    <td className="px-6 py-4 text-gray-700">{inquiry.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        inquiry.status === 'NEW' ? 'bg-orange-100 text-orange-800' :
                        inquiry.status === 'IN REVIEW' ? 'bg-blue-100 text-blue-800' :
                        inquiry.status === 'REPLIED' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{inquiry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors group">
                <div className="flex items-center">
                  <Plus className="w-4 h-4 mr-3" />
                  <span className="font-medium text-sm">Add Project</span>
                </div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors group">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-3" />
                  <span className="font-medium text-sm">View Inquiries</span>
                </div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group">
                <div className="flex items-center">
                  <UserPlus className="w-4 h-4 mr-3" />
                  <span className="font-medium text-sm">Add Team Member</span>
                </div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
            </div>
          </div>

          {/* Inquiry Volume Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">Inquiry Volume</h3>
              <select className="text-xs border-gray-200 rounded text-gray-500 bg-gray-50 outline-none p-1">
                <option>Last 6 Months</option>
              </select>
            </div>
            
            <div className="h-40 flex items-end justify-between gap-2 mt-4">
              {chartData.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center w-full group relative">
                  {/* Tooltip */}
                  <div className="absolute -top-8 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                    {data.value} Inquiries
                  </div>
                  {/* Chart Bar */}
                  <div className="w-full bg-gray-100 rounded-t-sm relative flex items-end justify-center h-full">
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-500 ${idx === chartData.length - 1 ? 'bg-slate-900' : 'bg-blue-300 hover:bg-blue-400'}`}
                      style={{ height: `${(data.value / 100) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400 mt-2 font-medium uppercase">{data.month}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-end">
               <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Avg. Monthly</p>
                  <p className="text-lg font-bold text-gray-900">42 inquiries</p>
               </div>
               <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">↑ 18%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors group">
              <div className={`p-2 rounded-lg ${activity.bg} flex-shrink-0 mt-1`}>
                <activity.icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {/* Using basic string replacement to bold names/projects for demo purposes */}
                  {activity.text.split('"').length > 1 ? (
                    <>
                      {activity.text.split('"')[0]}
                      <span className="font-bold text-blue-700">"{activity.text.split('"')[1]}"</span>
                      {activity.text.split('"')[2]}
                    </>
                  ) : activity.text}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 p-2">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100 text-center">
           <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">View All Activity</a>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
