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
  Send
} from 'lucide-react';

const NewBlogPost = () => {
  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2 font-medium">
            <Link to="/admin/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-blue-600">New Post</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Write New Post</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-bold text-blue-600 bg-white hover:bg-gray-50 transition-colors shadow-sm">
            Save Draft
          </button>
          <button className="flex items-center px-6 py-2 bg-[#0a192f] text-white rounded-md text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm">
            Publish <Send className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
            
            {/* Post Title */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Title</label>
              <input 
                type="text" 
                placeholder="Enter a compelling title..." 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* SEO Slug */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">SEO Slug</label>
              <div className="flex rounded-lg shadow-sm">
                <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500 sm:text-sm font-medium">
                  yaritech.com/blog/
                </span>
                <input 
                  type="text" 
                  placeholder="your-post-url-here" 
                  className="flex-1 block w-full px-4 py-2.5 min-w-0 rounded-none rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
            {/* Toolbar */}
            <div className="border-b border-gray-200 bg-gray-50/50 p-2 flex items-center flex-wrap gap-1">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><Bold className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><Italic className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><Underline className="w-4 h-4" /></button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><AlignLeft className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><AlignCenter className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><AlignRight className="w-4 h-4" /></button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><List className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><ListOrdered className="w-4 h-4" /></button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><LinkIcon className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><ImageIcon className="w-4 h-4" /></button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><Code className="w-4 h-4" /></button>
            </div>
            
            {/* Editor Textarea */}
            <textarea 
              className="flex-1 w-full p-6 resize-none focus:outline-none text-gray-700"
              placeholder="Start typing your innovation..."
            ></textarea>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          {/* Cover Image */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Cover Image</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 hover:bg-blue-50/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <Upload className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Click to upload</p>
              <p className="text-xs text-gray-400">PNG, JPG or WEBP (Max 5MB)</p>
            </div>
          </div>

          {/* Post Settings */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Post Settings</h3>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium shadow-sm bg-white cursor-pointer appearance-none relative">
                <option value="" disabled selected>Select Category</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="innovation">Innovation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Visibility</label>
              <div className="flex border border-gray-200 rounded-lg p-1 bg-gray-50 shadow-sm">
                <button className="flex-1 py-1.5 bg-white text-blue-600 text-sm font-bold rounded-md shadow-sm border border-gray-200">
                  Public
                </button>
                <button className="flex-1 py-1.5 text-gray-500 hover:text-gray-700 text-sm font-medium rounded-md">
                  Private
                </button>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-medium text-gray-700">Feature this post</span>
              </label>
            </div>
          </div>

          {/* Editor Assistant Info Box */}
          <div className="bg-[#0a192f] rounded-xl shadow-lg p-6 relative overflow-hidden">
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10">
              <span className="text-blue-400 font-mono text-xs block mb-4">{'<editor-assistant />'}</span>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                Empowering Filipino voices.
              </h3>
              <p className="text-sm text-gray-400">
                Your content fuels the digital economy of tomorrow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
