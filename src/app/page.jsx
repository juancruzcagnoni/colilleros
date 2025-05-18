"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div className="min-h-screen p-4 md:p-8 font-poppins">
        <main className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/4"
            >
              <div className="w-full lg:w-80 mx-auto rounded-lg overflow-hidden relative">
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  autoPlay
                  loop
                  controls
                  className="w-full"
                />
              </div>
            </motion.div>

            <div className="w-full md:w-3/4 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
              >
                Salvar el río comienza con apagar una colilla
              </motion.h1>

              <div className="space-y-4">
                {['¿Por qué es un problema?', 'Impacto local', '¿Qué podemos hacer?'].map((title, index) => (
                  <motion.div 
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="py-4"
                  >
                    <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--pink)' }}>
                      {title}
                    </h2>
                    <p className="">
                      {title === '¿Por qué es un problema?' && 'Una sola colilla puede contaminar hasta 50 litros de agua. Al llegar al río Areco, liberan nicotina, metales pesados y microplásticos que dañan la fauna acuática.'}
                      {title === 'Impacto local' && 'En San Antonio de Areco, las colillas arrojadas en la vía pública suelen ser arrastradas por la lluvia hacia desagües pluviales, terminando en el río y afectando un ecosistema frágil.'}
                      {title === '¿Qué podemos hacer?' && 'Usá colilleros portátiles, participá de campañas de limpieza y concientización, y ayudá a difundir el mensaje. Cuidar el río también es nuestra responsabilidad.'}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-end mt-10"
              >
                <Image 
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={150} 
                />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
