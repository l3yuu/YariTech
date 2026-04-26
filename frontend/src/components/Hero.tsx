

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Freelance-first.</span>{' '}
              <span className="block text-blue-600 xl:inline">Built to grow.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We build systems that work for you, empowering Filipino innovators and small businesses with premium digital infrastructure.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#002244] hover:bg-[#003366] md:py-4 md:text-lg transition-colors">
                  Get a Free Quote
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#portfolio" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-colors">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md xl:max-w-lg">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-white border border-gray-200 rounded text-xs px-4 py-1 text-gray-400 w-1/2 text-center">
                    yaritech.com
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-gray-50/30 flex gap-4">
                  <div className="w-1/3 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <div className="h-32 bg-blue-100 rounded-lg border border-blue-200 relative overflow-hidden">
                       <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-3 bg-gray-200 rounded w-full"></div>
                       <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                       <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 transform sm:translate-x-1/2 sm:-translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
