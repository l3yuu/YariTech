import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Edit3, Eye, Edit2, Trash2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string; title: string; slug: string;
  authorName: string; authorInitials: string; authorGradient: string;
  category: string; status: 'Published' | 'Scheduled' | 'Draft'; date: string;
}

const mockPosts: BlogPost[] = [
  { id: '1', title: 'Implementing Clean Architecture in Node.js', slug: 'yaritech.com/blog/clean-architecture', authorName: 'John Doe', authorInitials: 'JD', authorGradient: 'from-blue-500 to-cyan-500', category: 'ENGINEERING', status: 'Published', date: 'Oct 24, 2023' },
  { id: '2', title: 'Future of AI in Small Business ERPs', slug: 'yaritech.com/blog/ai-smb-erp', authorName: 'Sarah Adams', authorInitials: 'SA', authorGradient: 'from-violet-500 to-indigo-500', category: 'INNOVATION', status: 'Scheduled', date: 'Oct 28, 2023' },
  { id: '3', title: 'Designing for the Next Billion Users', slug: 'yaritech.com/blog/next-billion-ux', authorName: 'Mark Kim', authorInitials: 'MK', authorGradient: 'from-cyan-500 to-teal-500', category: 'DESIGN', status: 'Draft', date: '--' },
];

const statusBadge = (s: string) => {
  if (s === 'Published') return { dot: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60' };
  if (s === 'Scheduled') return { dot: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60' };
  return { dot: 'bg-slate-400', text: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700' };
};

const Blog = () => {
  const [posts] = useState<BlogPost[]>(mockPosts);

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Content Pipeline</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Manage and curate your digital voice for the tech community.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4 mr-2" />Filters
          </button>
          <Link to="/admin/blog/new" className="flex items-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all">
            <Edit3 className="w-4 h-4 mr-2" />Write New Post
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Posts</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">128</h2>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">+12%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Views</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">42.5k</h2>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">+5.2k</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0a192f] to-slate-800 p-6 rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-blue-500/20 transform skew-x-12 translate-x-14" />
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 relative z-10">Next Scheduled</p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-blue-600/30 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Mastering Tailwind v4</h3>
              <p className="text-xs text-slate-400 mt-0.5">Tomorrow at 09:00 AM PHT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700/60 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold bg-slate-50/70 dark:bg-slate-800/80">
                <th className="px-5 py-3.5">Title</th>
                <th className="px-5 py-3.5 hidden md:table-cell">Author</th>
                <th className="px-5 py-3.5 hidden lg:table-cell">Category</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 hidden sm:table-cell">Date</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40">
              {posts.map((post) => {
                const badge = statusBadge(post.status);
                return (
                  <tr key={post.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-5 py-4">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{post.title}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate max-w-[200px]">{post.slug}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.authorGradient} flex items-center justify-center text-[10px] font-bold text-white`}>{post.authorInitials}</div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{post.authorName}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-lg text-[10px] font-bold uppercase tracking-wider">{post.category}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge.text}`}>{post.status}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400 hidden sm:table-cell">{post.date}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {[Eye, Edit2, Trash2].map((Icon, i) => (
                          <button key={i} className={`p-1.5 rounded-lg transition-colors ${i === 2 ? 'text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40' : 'text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'}`}>
                            <Icon className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 10 of 128 entries</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"><ChevronLeft className="w-4 h-4" /></button>
            {[1,2,3].map(n => <button key={n} className={`w-8 h-8 flex items-center justify-center font-medium rounded-lg text-sm transition-colors ${n === 1 ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>{n}</button>)}
            <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Decorative Code Snippets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { accent: 'text-blue-400', lines: [{ c: 'text-blue-400', t: '<yari-tech>' }, { c: 'text-slate-500 pl-4', t: 'status: "verified"' }, { c: 'text-red-400 pl-4', t: 'deployment: "active"' }, { c: 'text-blue-400', t: '</yari-tech>' }] },
          { accent: 'text-indigo-400', lines: [{ c: 'text-indigo-400', t: 'const blogModule = {' }, { c: 'text-slate-500 pl-4', t: 'render: "grid_view",' }, { c: 'text-slate-500 pl-4', t: 'theme: "navy_electric"' }, { c: 'text-slate-500', t: '};' }] },
          { accent: 'text-purple-400', lines: [{ c: 'text-purple-400', t: '.admin-portal {' }, { c: 'text-slate-500 pl-4', t: 'elevation: 0;' }, { c: 'text-slate-500 pl-4', t: 'outline: 1px solid;' }, { c: 'text-slate-500', t: '}' }] },
        ].map((block, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 rounded-xl p-4 font-mono text-xs shadow-sm">
            {block.lines.map((l, j) => <div key={j} className={`${l.c} mt-1`}>{l.t}</div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
