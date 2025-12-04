import React from 'react';
import { Clock, ShieldCheck, MessageSquare, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    text: "Atendimento rápido e humanizado"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    text: "Resposta imediata via WhatsApp"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    text: "Total transparência e segurança jurídica"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    text: "Mais de 500 processos concluídos com sucesso"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-medium rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://picsum.photos/id/3/800/600" 
                  alt="Team working" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-medium/20"></div>
             </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Por que escolher a <span className="text-brand-light">Legalize Assessoria?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Legalizamos sua empresa com rapidez, precisão e zero burocracia. Entendemos que seu tempo é valioso, por isso focamos em resolver seus problemas legais enquanto você cuida do seu negócio.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                  <div className="bg-brand-light text-brand-dark p-2 rounded-full shadow-lg shadow-brand-light/20">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <div className="inline-block bg-brand-medium px-6 py-3 rounded-lg border-l-4 border-brand-light">
                 <p className="font-bold italic">"Somos especialistas em legalização empresarial."</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;