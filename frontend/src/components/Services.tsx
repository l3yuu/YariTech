
import { Monitor, Smartphone, Code, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Scalable web applications built with performance and user experience first.',
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform solutions for iOS and Android ecosystems.',
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'System Dev',
      description: 'Corporate backend architecture and internal management systems for growth.',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      bgColor: 'bg-purple-50'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive digital experiences crafted with modern minimalism and purpose.',
      icon: <PenTool className="w-6 h-6 text-pink-600" />,
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b-2 border-gray-100 inline-block pb-2">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Services</h2>
          <div className="h-1 w-1/2 bg-blue-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* WhatsApp sticky icon placeholder - we'll implement this properly later or make it fixed */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </section>
  );
};

export default Services;
