import React from 'react';
import { Smartphone, Search, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Você chama no WhatsApp",
    desc: "Entre em contato conosco e explique sua necessidade."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Analisamos sua necessidade",
    desc: "Nossa equipe avalia a situação da sua empresa."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Enviamos orçamento e prazo",
    desc: "Transparência total sobre custos e tempo de execução."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Executamos o processo",
    desc: "Cuidamos de toda a burocracia até a finalização."
  }
];

const Process: React.FC = () => {
  const whatsappNumber = "5511947525644";
  const whatsappMessage = encodeURIComponent("Quero começar meu processo de legalização agora.");

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-medium font-bold uppercase tracking-widest text-sm">Passo a Passo</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mt-2">
            Como funciona a contratação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-4 border-brand-gray group-hover:border-brand-light rounded-full flex items-center justify-center text-brand-dark group-hover:text-brand-light transition-all duration-300 mb-6 shadow-sm z-10 relative">
                 {step.icon}
                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {index + 1}
                 </div>
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-dark hover:bg-brand-medium text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Começar agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;