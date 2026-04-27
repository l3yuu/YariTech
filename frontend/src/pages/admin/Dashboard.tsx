import { 
  Inbox, Rocket, Users, Wallet, Plus, Eye, UserPlus, MoreVertical, Pencil
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { label: 'Total Inquiries', value: '128', icon: Inbox, change: '+12%', changeType: 'positive', gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/40', iconColor: 'text-blue-600 dark:text-blue-400' },
    { label: 'Active Projects', value: '14', icon: Rocket, change: 'Stable', changeType: 'neutral', gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-950/40', iconColor: 'text-violet-600 dark:text-violet-400' },
    { label: 'Total Clients', value: '85', icon: Users, change: '+5', changeType: 'positive', gradient: 'from-orange-500 to-amber-500', bg: 'bg-orange-50 dark:bg-orange-950/40', iconColor: 'text-orange-600 dark:text-orange-400' },
    { label: 'Revenue This Month', value: '₱245k', icon: Wallet, change: '+24%', changeType: 'positive', gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  ];

  const inquiries = [
    { id: 1, name: 'Juan dela Cruz', email: 'juan.dc@example.com', type: 'Web Dashboard', status: 'NEW', date: 'Oct 24, 2023' },
    { id: 2, name: 'Maria Santos', email: 'm.santos@biz.ph', type: 'E-commerce App', status: 'IN REVIEW', date: 'Oct 23, 2023' },
    { id: 3, name: 'Antonio Luna', email: 'luna.general@corp.com', type: 'Cloud Migration', status: 'REPLIED', date: 'Oct 21, 2023' },
    { id: 4, name: 'Liza Soberano', email: 'liza@media.ph', type: 'Portfolio Design', status: 'CLOSED', date: 'Oct 18, 2023' },
  ];

  const chartData = [
    { month: 'May', value: 40 }, { month: 'Jun', value: 55 },
    { month: 'Jul', value: 45 }, { month: 'Aug', value: 70 },
    { month: 'Sep', value: 85 }, { month: 'Oct', value: 65 },
  ];

  const activities = [
    { id: 1, text: 'New inquiry received from Juan dela Cruz', time: '2 minutes ago', icon: Inbox, bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-600 dark:text-blue-400' },
    { id: 2, text: 'Project "Web Dashboard" updated by System Admin', time: '1 hour ago', icon: Pencil, bg: 'bg-violet-50 dark:bg-violet-950/40', color: 'text-violet-600 dark:text-violet-400' },
    { id: 3, text: 'New client Antonio Luna added to database', time: '3 hours ago', icon: UserPlus, bg: 'bg-emerald-50 dark:bg-emerald-950/40', color: 'text-emerald-600 dark:text-emerald-400' },
    { id: 4, text: 'Invoice #INV-9421 marked as paid', time: '5 hours ago', icon: Wallet, bg: 'bg-orange-50 dark:bg-orange-950/40', color: 'text-orange-600 dark:text-orange-400' },
  ];

  const statusStyle = (s: string) => {
    if (s === 'NEW') return 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300';
    if (s === 'IN REVIEW') return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300';
    if (s === 'REPLIED') return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300';
    return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
  };

  return (
    <div className="space-y-6">

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/40 transition-shadow flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center`}>
                <m.icon className={`w-5 h-5 ${m.iconColor}`} />
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m.changeType === 'positive' ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50' : 'text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700'}`}>
                {m.change}{m.changeType === 'positive' && ' ↗'}
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{m.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{m.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Inquiries Table */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-700/60 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recent Inquiries</h3>
            <a href="#" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/70 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700/60">
                <tr>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold hidden md:table-cell">Email</th>
                  <th className="px-5 py-3 font-semibold hidden lg:table-cell">Project Type</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold hidden sm:table-cell">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-slate-900 dark:text-white whitespace-nowrap">{inq.name}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 hidden md:table-cell">{inq.email}</td>
                    <td className="px-5 py-3.5 text-slate-700 dark:text-slate-300 hidden lg:table-cell">{inq.type}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${statusStyle(inq.status)}`}>{inq.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:table-cell">{inq.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Quick Actions</h3>
            <div className="space-y-2.5">
              <button className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all group">
                <div className="flex items-center"><Plus className="w-4 h-4 mr-2.5" /><span>Add Project</span></div>
                <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-slate-700/50 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl text-sm font-medium transition-colors group">
                <div className="flex items-center"><Eye className="w-4 h-4 mr-2.5" /><span>View Inquiries</span></div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl text-sm font-medium transition-colors group">
                <div className="flex items-center"><UserPlus className="w-4 h-4 mr-2.5" /><span>Add Team Member</span></div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Inquiry Volume</h3>
              <select className="text-xs border border-slate-200 dark:border-slate-600 rounded-lg text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 outline-none p-1.5">
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="h-36 flex items-end justify-between gap-2">
              {chartData.map((d, idx) => (
                <div key={idx} className="flex flex-col items-center w-full group relative">
                  <div className="absolute -top-8 bg-slate-800 dark:bg-slate-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                    {d.value} inquiries
                  </div>
                  <div className="w-full rounded-t-lg overflow-hidden h-28 flex items-end">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${idx === chartData.length - 1 ? 'bg-gradient-to-t from-blue-600 to-violet-500' : 'bg-slate-200 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-500'}`}
                      style={{ height: `${(d.value / 100) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 font-medium uppercase">{d.month}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Avg. Monthly</p>
                <p className="text-base font-bold text-slate-900 dark:text-white">42 inquiries</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-lg">↑ 18%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-700/60">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recent Activity</h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700/40">
          {activities.map((a) => (
            <div key={a.id} className="p-4 sm:p-5 flex items-start gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors group">
              <div className={`p-2 rounded-xl ${a.bg} flex-shrink-0 mt-0.5`}>
                <a.icon className={`w-4 h-4 ${a.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {a.text.split('"').length > 1 ? (
                    <>{a.text.split('"')[0]}<span className="font-bold text-blue-600 dark:text-blue-400">"{a.text.split('"')[1]}"</span>{a.text.split('"')[2]}</>
                  ) : a.text}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{a.time}</p>
              </div>
              <button className="text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100 dark:border-slate-700/60 text-center">
          <a href="#" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">View All Activity</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
