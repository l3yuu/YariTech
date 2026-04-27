import { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  UserPlus, 
  Filter,
  ChevronDown
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
    description: 'Leading the engineering team with over 10 years of experience in full-stack development and cloud...',
    imageUrl: 'https://i.pravatar.cc/150?u=isabella',
    isVisible: true,
  },
  {
    id: '2',
    name: 'Marcus Tan',
    role: 'PRODUCT MANAGER',
    description: 'Focuses on bridge-building between technical constraints and business goals. Marcus manages the roadma...',
    imageUrl: 'https://i.pravatar.cc/150?u=marcus',
    isVisible: false,
  },
  {
    id: '3',
    name: 'Sofia Garcia',
    role: 'UI/UX DESIGNER',
    description: 'Architecting the visual language of Yari Tech. Sofia ensures our platform remains accessible for students and...',
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
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Team Management</h1>
          <p className="mt-2 text-gray-600">
            Manage your team members and their public visibility on the platform.
          </p>
        </div>
        <div>
          <button className="flex items-center px-4 py-2 bg-[#0a192f] text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <Filter className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600 mr-2">Filter Visibility:</span>
            <span className="text-sm font-bold text-gray-900 mr-1">All Members</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <Filter className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
            <span className="text-sm font-bold text-gray-900 mr-1">Recently Added</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="text-sm text-gray-600 px-2">
          Showing <span className="font-bold text-gray-900">12</span> team members
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col relative group">
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Image */}
            <div className="mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                <img src={member.imageUrl} alt={member.name} className={`w-full h-full object-cover ${!member.isVisible ? 'grayscale opacity-70' : ''}`} />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-1 ${!member.isVisible ? 'text-gray-500' : 'text-gray-900'}`}>{member.name}</h3>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-4">{member.role}</p>
              <p className={`text-sm line-clamp-3 mb-6 ${!member.isVisible ? 'text-gray-400' : 'text-gray-600'}`}>
                {member.description}
              </p>
            </div>

            {/* Bottom Toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${member.isVisible ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                <span className="text-xs font-medium text-gray-500">
                  {member.isVisible ? 'Visible on About page' : 'Hidden from public'}
                </span>
              </div>
              <button 
                onClick={() => toggleVisibility(member.id)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${member.isVisible ? 'bg-[#0a192f]' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${member.isVisible ? 'translate-x-4' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        ))}

        {/* Add Member Card */}
        <div className="bg-transparent rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/50 transition-colors flex flex-col items-center justify-center p-8 min-h-[320px] cursor-pointer group">
          <div className="w-14 h-14 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <UserPlus className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-500 group-hover:text-blue-600 mb-2 text-center">Add Member</h3>
          <p className="text-sm text-gray-400 text-center max-w-[200px]">
            Click here to register a new team member to the portal.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 relative overflow-hidden flex flex-col md:flex-row items-center mt-4">
        <div className="relative z-10 flex-1">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Empowering the Team</h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            Our management console uses <code className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-xs">yari-blocks</code> technology to ensure modular team permissions and secure data access across all organizational layers.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-xs text-blue-400">
            <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-md">
              {'<team-config active="true" />'}
            </div>
            <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-md">
              {'access_level = "admin"'}
            </div>
          </div>
        </div>
        
        {/* Abstract Graphic */}
        <div className="relative w-48 h-48 mt-8 md:mt-0 opacity-20">
          <div className="absolute top-4 right-12 w-12 h-12 bg-gray-400 transform rotate-12"></div>
          <div className="absolute top-6 right-2 w-10 h-10 border-2 border-gray-400 transform rotate-12"></div>
          <div className="absolute top-16 right-24 w-12 h-12 border-2 border-gray-400 transform rotate-12"></div>
          <div className="absolute top-20 right-10 w-12 h-12 bg-gray-300 transform rotate-12"></div>
          <div className="absolute bottom-10 right-4 w-12 h-12 border-2 border-gray-400 transform rotate-12"></div>
          <div className="absolute bottom-16 right-20 w-12 h-12 bg-blue-400 transform rotate-12"></div>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="pt-4 border-t border-gray-200 flex items-center justify-between mb-8">
        <p className="text-sm text-gray-600">Page 1 of 1</p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#0a192f] text-white text-sm font-medium rounded-md">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Team;
