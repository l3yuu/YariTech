import { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  UserPlus, 
  Filter,
  ChevronDown,
  Zap
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  isVisible: boolean;
}

const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Isabella Reyes',
    role: 'CHIEF TECHNOLOGY OFFICER',
    description: 'Leading the engineering team with over 10 years of experience in full-stack development and cloud computing architecture.',
    imageUrl: 'https://i.pravatar.cc/150?u=isabella',
    isVisible: true,
  },
  {
    id: '2',
    name: 'Marcus Tan',
    role: 'PRODUCT MANAGER',
    description: 'Focuses on bridge-building between technical constraints and business goals. Marcus manages the product roadmap and stakeholder expectations.',
    imageUrl: 'https://i.pravatar.cc/150?u=marcus',
    isVisible: false,
  },
  {
    id: '3',
    name: 'Sofia Garcia',
    role: 'UI/UX DESIGNER',
    description: 'Architecting the visual language of Yari Tech. Sofia ensures our platform remains accessible and visually stunning for all users.',
    imageUrl: 'https://i.pravatar.cc/150?u=sofia',
    isVisible: true,
  }
];

const Team = () => {
  const [members, setMembers] = useState(mockTeam);

  const toggleVisibility = (id: string) => {
    setMembers(members.map(m => 
      m.id === id ? { ...m, isVisible: !m.isVisible } : m
    ));
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Team Management</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage your core team members and their public presence on the platform.
          </p>
        </div>
        <div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
            <UserPlus className="w-4 h-4" />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
            <Filter className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors mr-2.5" />
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2.5">Filter:</span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white mr-1.5 uppercase tracking-wider">All Members</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
            <Zap className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors mr-2.5" />
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2.5">Sort:</span>
            <span className="text-xs font-extrabold text-slate-900 dark:text-white mr-1.5 uppercase tracking-wider">Recently Added</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">
          Total: <span className="text-blue-600 dark:text-blue-400">12</span> members
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {members.map((member) => (
          <div key={member.id} className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 flex flex-col relative group hover:shadow-md transition-all duration-300">
            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Image */}
            <div className="mb-6 relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-700">
                <img src={member.imageUrl} alt={member.name} className={`w-full h-full object-cover transition-all duration-500 ${!member.isVisible ? 'grayscale opacity-50 scale-110' : 'group-hover:scale-110'}`} />
              </div>
              {!member.isVisible && (
                <div className="absolute -top-1 -left-1 bg-slate-900 dark:bg-slate-700 text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border border-slate-700">
                   Draft
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-1.5 transition-colors ${!member.isVisible ? 'text-slate-500 dark:text-slate-600' : 'text-slate-900 dark:text-white'}`}>{member.name}</h3>
              <p className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">{member.role}</p>
              <p className={`text-sm line-clamp-3 mb-8 leading-relaxed ${!member.isVisible ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-400'}`}>
                {member.description}
              </p>
            </div>

            {/* Bottom Toggle */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-2.5">
                <div className={`w-2 h-2 rounded-full shadow-sm ${member.isVisible ? 'bg-emerald-500 ring-2 ring-emerald-100 dark:ring-emerald-900/50' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {member.isVisible ? 'Visible Public' : 'Hidden'}
                </span>
              </div>
              <button 
                onClick={() => toggleVisibility(member.id)}
                className={`relative inline-flex h-5 w-10 items-center rounded-full transition-all focus:outline-none ${member.isVisible ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700 shadow-inner'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-all ${member.isVisible ? 'translate-x-5' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        ))}

        {/* Add Member Card */}
        <div className="bg-transparent rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-all duration-300 flex flex-col items-center justify-center p-8 min-h-[320px] cursor-pointer group">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm">
            <Plus className="w-8 h-8 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </div>
          <h3 className="text-base font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 text-center transition-colors">Add Member</h3>
          <p className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[200px]">
            Click here to register a new team member to the portal.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-10 relative overflow-hidden flex flex-col lg:flex-row items-center mt-6 group">
        <div className="relative z-10 flex-1">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Empowering the Team</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Our management console uses <code className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded text-xs font-mono">yari-blocks</code> technology to ensure modular team permissions and secure data access across all organizational layers.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-[10px] text-blue-500 dark:text-blue-400 font-bold uppercase tracking-widest">
            <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm">
              {'<team-config active="true" />'}
            </div>
            <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm">
              {'access_level = "admin"'}
            </div>
          </div>
        </div>
        
        {/* Abstract Graphic */}
        <div className="relative w-64 h-64 mt-12 lg:mt-0 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-3xl transform scale-75 translate-x-12"></div>
           <div className="absolute top-4 right-12 w-16 h-16 bg-slate-400 dark:bg-slate-200 transform rotate-12 rounded-xl"></div>
           <div className="absolute top-12 right-2 w-12 h-12 border-4 border-blue-500 transform -rotate-12 rounded-xl"></div>
           <div className="absolute bottom-10 right-20 w-20 h-20 bg-violet-500 transform rotate-45 rounded-2xl"></div>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between mb-8">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Page 1 of 1</p>
        <div className="flex items-center gap-2">
          <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors uppercase tracking-widest">
            Prev
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20">
            1
          </button>
          <button className="px-5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors uppercase tracking-widest">
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Team;
