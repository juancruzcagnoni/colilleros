import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between py-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image 
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
        <h2 className="text-3xl font-semibold text-center mt-10 max-w-md w-90">
          Por ésto es importante que tires acá tu colilla...
        </h2>
      </div>
      
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
        <div 
          className="h-full bg-[var(--pink)] rounded-full animate-[loading_2s_ease-in-out_infinite]"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Loader;