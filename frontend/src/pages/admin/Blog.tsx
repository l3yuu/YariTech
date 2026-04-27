import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Edit3, 
  Eye, 
  Edit2, 
  Trash2, 
  Clock, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  authorName: string;
  authorInitials: string;
  authorColor: string;
  category: string;
  status: 'Published' | 'Scheduled' | 'Draft';
  date: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Implementing Clean Architecture in Node.js',
    slug: 'yari-tech.com/blog/clean-architecture',
    authorName: 'John Doe',
    authorInitials: 'JD',
    authorColor: 'bg-blue-200 text-blue-700',
    category: 'ENGINEERING',
    status: 'Published',
    date: 'Oct 24, 2023'
  },
  {
    id: '2',
    title: 'Future of AI in Small Business ERPs',
    slug: 'yari-tech.com/blog/ai-smb-erp',
    authorName: 'Sarah Adams',
    authorInitials: 'SA',
    authorColor: 'bg-indigo-200 text-indigo-700',
    category: 'INNOVATION',
    status: 'Scheduled',
    date: 'Oct 28, 2023'
  },
  {
    id: '3',
    title: 'Designing for the Next Billion Users',
    slug: 'yari-tech.com/blog/next-billion-ux',
    authorName: 'Mark Kim',
    authorInitials: 'MK',
    authorColor: 'bg-cyan-200 text-cyan-700',
    category: 'DESIGN',
    status: 'Draft',
    date: '--'
  }
];

const Blog = () => {
  const [posts] = useState<BlogPost[]>(mockPosts);

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Content Pipeline</h1>
          <p className="mt-2 text-gray-600">
            Manage and curate your digital voice for the tech community.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </button>
          <Link 
            to="/admin/blog/new"
            className="flex items-center px-4 py-2 bg-[#0a192f] text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            Write New Post
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-2">Total Posts</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-extrabold text-gray-900">128</h2>
            <span className="text-sm font-medium text-blue-600">+12%</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-2">Total Views</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-extrabold text-gray-900">42.5k</h2>
            <span className="text-sm font-medium text-blue-600">+5.2k</span>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl shadow-md relative overflow-hidden flex flex-col justify-center">
          {/* Decorative graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-blue-600/20 transform skew-x-12 translate-x-16 border-l border-blue-500/30"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-blue-500/20 transform skew-x-12 translate-x-24 border-l border-blue-400/30"></div>
          
          <p className="text-sm font-medium text-gray-400 mb-3 relative z-10">Next Scheduled Post</p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Mastering Tailwind v4</h3>
              <p className="text-xs text-gray-400 mt-1">Tomorrow at 09:00 AM PHT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold bg-gray-50/50">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${post.authorColor}`}>
                        {post.authorInitials}
                      </div>
                      <span className="text-sm text-gray-700">{post.authorName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        post.status === 'Published' ? 'bg-emerald-500' : 
                        post.status === 'Scheduled' ? 'bg-amber-500' : 'bg-gray-400'
                      }`}></div>
                      <span className={`text-xs font-medium ${
                        post.status === 'Published' ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full' : 
                        post.status === 'Scheduled' ? 'text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full' : 'text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {post.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing 1 to 10 of 128 entries
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 bg-white border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-medium rounded-md text-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium rounded-md text-sm hover:bg-gray-50">
              3
            </button>
            <button className="p-1.5 bg-white border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Snippets / Decorative Boxes at bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white/50 border border-gray-100 rounded-xl p-4 font-mono text-xs text-gray-400 shadow-sm flex flex-col justify-center">
          <span className="text-blue-400">{'<yari-tech>'}</span>
          <span className="pl-4 mt-1 text-gray-300">status: "verified"</span>
          <span className="pl-4 mt-1 text-red-300">deployment: "active"</span>
          <span className="text-blue-400 mt-1">{'</yari-tech>'}</span>
        </div>
        <div className="bg-white/50 border border-gray-100 rounded-xl p-4 font-mono text-xs text-gray-400 shadow-sm flex flex-col justify-center">
          <span className="text-indigo-400">const</span> blogModule = {'{'}
          <span className="pl-4 mt-1">render: "grid_view",</span>
          <span className="pl-4 mt-1">theme: "navy_electric"</span>
          <span>{'};'}</span>
        </div>
        <div className="bg-white/50 border border-gray-100 rounded-xl p-4 font-mono text-xs text-gray-400 shadow-sm flex flex-col justify-center">
          <span className="text-purple-400">.admin-portal</span> {'{'}
          <span className="pl-4 mt-1">elevation: 0;</span>
          <span className="pl-4 mt-1">outline: 1px_solid;</span>
          <span>{'}'}</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
