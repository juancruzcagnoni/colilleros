import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-poppins">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="w-full lg:w-80 mx-auto rounded-lg overflow-hidden">
              <video
                src="/video.mp4"
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>

          <div className="w-full md:w-3/4 space-y-6">
            <h1 className="text-3xl font-bold">Salvar el río comienza con apagar una colilla</h1>

            <div className="space-y-4">
              <div className="py-4">
                <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--pink)' }}>¿Por qué es un problema?</h2>
                <p className="">
                  Una sola colilla puede contaminar hasta 50 litros de agua. Al llegar al río Areco, liberan nicotina, metales pesados y microplásticos que dañan la fauna acuática.
                </p>
              </div>

              <div className="py-4">
                <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--pink)' }}>Impacto local</h2>
                <p className="">
                  En San Antonio de Areco, las colillas arrojadas en la vía pública suelen ser arrastradas por la lluvia hacia desagües pluviales, terminando en el río y afectando un ecosistema frágil.
                </p>
              </div>

              <div className="py-4">
                <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--pink)' }}>¿Qué podemos hacer?</h2>
                <p className="">
                  Usá colilleros portátiles, participá de campañas de limpieza y concientización, y ayudá a difundir el mensaje. Cuidar el río también es nuestra responsabilidad.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <Image 
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200} 
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
