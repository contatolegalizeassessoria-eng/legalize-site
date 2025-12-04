import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappNumber = "5511947525644";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de falar com um especialista sobre legalização de empresas.");

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/4/1920/1080" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-medium/70 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-in-up">
          <div className="inline-block bg-brand-light/20 border border-brand-light/30 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className="text-brand-light font-bold text-sm tracking-wider uppercase">Assessoria Contábil Especializada</span>
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Legalização de Empresas com <span className="text-brand-light">Agilidade</span> e <span className="text-brand-light">Segurança</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Abertura, alterações, regularização e licenciamento empresarial sem complicação. Cuidamos de tudo para você iniciar ou organizar sua empresa no menor tempo possível.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Especialista
            </a>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            * Atendimento imediato via WhatsApp
          </p>
        </div>

        {/* Optional Visual Element for Desktop */}
        <div className="hidden md:block relative">
           <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center text-white font-bold text-xl">L</div>
                <div>
                    <h3 className="text-white font-bold text-lg">Legalize Assessoria</h3>
                    <p className="text-green-400 text-sm flex items-center gap-1">● Online agora</p>
                </div>
              </div>
              <div className="space-y-4">
                  <div className="bg-white/10 p-3 rounded-lg rounded-tl-none text-white text-sm max-w-[80%]">
                      Olá! Como podemos ajudar a regularizar sua empresa hoje?
                  </div>
                  <div className="bg-brand-light p-3 rounded-lg rounded-tr-none text-white text-sm ml-auto max-w-[80%]">
                      Preciso fazer uma alteração no contrato social da minha LTDA.
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg rounded-tl-none text-white text-sm max-w-[80%]">
                      Perfeito! Somos especialistas nisso. Vamos agilizar esse processo para você.
                  </div>
              </div>
              <div className="mt-6">
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-brand-dark font-bold py-3 rounded hover:bg-gray-100 transition-colors">
                      Começar Atendimento
                  </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;