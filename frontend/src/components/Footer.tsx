import { Send } from 'lucide-react';
import { FaInstagram as Instagram, FaLinkedin as Linkedin, FaTwitter as Twitter, FaGithub as Github } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tight">Yari Tech</span>
            <p className="text-sm text-gray-400">
              Digital Empowerment for Filipino Innovators. Building systems that scale with your ambition.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-blue-500 text-sm"
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 px-3 rounded-r-md flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Yari Tech. Digital Empowerment for Filipino Innovators.</p>
          <p className="mt-2 md:mt-0">PH Based 🇵🇭 | v1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
