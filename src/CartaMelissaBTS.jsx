import React, { useState } from 'react';

const CartaMelissaBTS = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ece9f1] flex items-center justify-center p-4 md:p-8 font-serif relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-[-10%] left-[-10%] w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full blur-[80px] md:blur-[120px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full blur-[80px] md:blur-[120px] opacity-50"></div>

      {!isOpen ? (
        /* PANTALLA INICIAL */
        <div className="text-center z-30 animate-fade-in px-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative bg-white/80 backdrop-blur-md px-8 py-6 md:px-12 md:py-8 rounded-[25px] md:rounded-[30px] shadow-2xl border border-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-4xl md:text-5xl block group-hover:animate-bounce mb-4">🎁</span>
            <p className="text-[#6d4c7d] font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-black">
              Abrir regalo para Meli
            </p>
          </button>
          <p className="mt-6 text-[#6d4c7d]/50 text-[10px] font-sans tracking-widest animate-pulse">
            TAP PARA REVELAR
          </p>
        </div>
      ) : (
        /* LA CARTA FINAL RESPONSIVE */
        <div className="relative bg-white w-full max-w-[400px] md:max-w-[850px] flex flex-col md:flex-row shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white animate-fade-in-up">
          
          {/* Lado Izquierdo/Superior: Identidad BTS */}
          <div className="w-full md:w-[35%] h-32 md:h-auto bg-gradient-to-br from-[#b39ddb] via-[#9575cd] to-[#7e57c2] flex flex-col items-center justify-center relative p-4">
            <div className="z-10 text-center scale-90 md:scale-110">
              <div className="bg-[#1e4ccf] text-white text-3xl md:text-5xl font-bold px-4 py-2 md:px-5 md:py-3 shadow-2xl transform -rotate-3 mb-2 md:mb-4">
                2026
              </div>
              <p className="text-white text-[8px] md:text-[10px] tracking-[0.6em] font-sans uppercase font-black">-----</p>
            </div>
            {/* Detalles de líneas decorativas (solo visibles en desktop para no saturar) */}
            <div className="hidden md:block absolute top-0 left-8 w-[1px] h-full bg-white/20"></div>
            <div className="hidden md:block absolute top-0 left-12 w-[1px] h-full bg-white/10"></div>
          </div>

          {/* Lado Derecho/Inferior: Contenido */}
          <div className="w-full md:w-[65%] p-8 md:p-16 lg:p-20 flex flex-col justify-center relative bg-[#fdfcfb]">
            
            {/* Cinta '2026' en la esquina */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden pointer-events-none">
              <div className="bg-[#bda7d1] text-white text-[8px] md:text-[9px] py-1 md:py-1.5 px-8 md:px-10 transform rotate-45 translate-x-7 translate-y-4 md:translate-x-8 md:translate-y-5 shadow-sm font-sans tracking-widest uppercase font-bold text-center">
                2026
              </div>
            </div>

            <header className="mb-6 md:mb-10 text-left">
              <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight leading-tight">
                ¡Feliz Cumple, <br />
                <span className="text-[#6d4c7d] font-bold italic">Meli!</span>
              </h1>
              <div className="h-1 md:h-1.5 w-12 md:w-16 bg-[#b39ddb] mt-4 md:mt-6 rounded-full"></div>
            </header>

            {/* Mensaje de Jorge */}
            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-light">
              <p className="text-lg md:text-xl font-medium text-[#6d4c7d]">¡Hola Meliii! </p>
              <p>
                wiiii!! En este dia que esta a punto de acabar quiero desearte que te vaya muy bien este año por tu cumpleañoss. 
                Espero que sigas dándole con todo a tus <span className="text-[#6b46c1] font-semibold italic">estudios y a tus proyectos</span> de diseño, la verdad  ¡tienes mucho talento!
              </p>
              <p>
                Que pases una noche genial y que este nuevo año de vida venga lleno de cosas buenas para ti.
              </p>
            </div>

            {/* Firma y Logo */}
            <footer className="mt-8 md:mt-12 flex items-end justify-between">
              <div>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-sans uppercase tracking-[0.2em] mb-1">By,</p>
                <p className="text-3xl md:text-4xl font-serif italic text-[#6d4c7d]">Jorge</p>
              </div>

              {/* Logo BTS */}
              <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-500 scale-75 md:scale-100">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#7e57c2" strokeWidth="1.2">
                   <path d="M6 3L2 21L11 22V2L6 3Z" />
                   <path d="M18 3L22 21L13 22V2L18 3Z" />
                </svg>
                <p className="text-[7px] text-center mt-1 text-[#7e57c2] font-sans font-black tracking-tighter uppercase">Army</p>
              </div>
            </footer>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CartaMelissaBTS;