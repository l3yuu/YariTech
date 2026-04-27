import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  Code,
  Upload,
  Send,
  Save,
  Eye
} from 'lucide-react';

const NewBlogPost = () => {
  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
            <Link to="/admin/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
            <span className="text-blue-600 dark:text-blue-400 font-bold">New Post</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Create Article</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
            Publish <Send className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 space-y-8">
            
            {/* Post Title */}
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Article Title</label>
              <input 
                type="text" 
                placeholder="Enter a compelling title..." 
                className="w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-xl font-bold placeholder-slate-400 dark:placeholder-slate-600 shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-all"
              />
            </div>

            {/* SEO Slug */}
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">URL Slug</label>
              <div className="flex rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                <span className="inline-flex items-center px-5 border-r border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold font-mono">
                  yaritech.com/blog/
                </span>
                <input 
                  type="text" 
                  placeholder="your-post-url-here" 
                  className="flex-1 block w-full px-5 py-3 min-w-0 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
            {/* Toolbar */}
            <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 p-3 flex items-center flex-wrap gap-1">
              {[
                [Bold, Italic, Underline],
                [AlignLeft, AlignCenter, AlignRight],
                [List, ListOrdered],
                [LinkIcon, ImageIcon, Code]
              ].map((group, idx) => (
                <div key={idx} className="flex items-center">
                  {group.map((Icon, i) => (
                    <button key={i} className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                  {idx < 3 && <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>}
                </div>
              ))}
              <div className="ml-auto flex items-center gap-2">
                 <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Eye className="w-3.5 h-3.5" /> Preview
                 </button>
              </div>
            </div>
            
            {/* Editor Textarea */}
            <textarea 
              className="flex-1 w-full p-8 resize-none focus:outline-none bg-transparent text-slate-700 dark:text-slate-300 leading-relaxed text-lg placeholder-slate-300 dark:placeholder-slate-700"
              placeholder="Start typing your innovation..."
            ></textarea>

            {/* Editor Footer */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
               <span>Characters: 0</span>
               <span>Reading Time: 0 min</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          
          {/* Cover Image */}
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-5">Cover Image</h3>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors shadow-sm">
                <Upload className="w-6 h-6 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Click to upload</p>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">PNG, JPG or WEBP (Max 5MB)</p>
            </div>
          </div>

          {/* Post Settings */}
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm p-8 space-y-8">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Publishing Settings</h3>
            
            <div>
              <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Category</label>
              <div className="relative">
                <select className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-sm font-semibold shadow-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white cursor-pointer appearance-none">
                  <option value="" disabled selected>Select Category</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="innovation">Innovation</option>
                </select>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Visibility</label>
              <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl p-1.5 bg-slate-100 dark:bg-slate-900/50 shadow-inner">
                <button className="flex-1 py-2 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-lg shadow-sm">
                  Public
                </button>
                <button className="flex-1 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-bold transition-colors">
                  Private
                </button>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer w-5 h-5 rounded-lg border-slate-300 dark:border-slate-600 text-blue-600 dark:text-blue-500 focus:ring-blue-500 bg-white dark:bg-slate-900 appearance-none border transition-all checked:bg-blue-600 dark:checked:bg-blue-500 checked:border-blue-600 dark:checked:border-blue-500" />
                  <svg className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Feature article</span>
              </label>
            </div>
          </div>

          {/* Editor Assistant Info Box */}
          <div className="bg-gradient-to-br from-[#0a192f] to-slate-900 rounded-2xl shadow-xl p-8 relative overflow-hidden border border-slate-800">
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                 <Code className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-blue-400 font-mono text-[10px] font-bold block mb-4 tracking-widest">{'<editor-assistant />'}</span>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                Empowering the voices of tomorrow.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Your content fuels the digital economy. Every word contributes to the innovation landscape of the Philippines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
