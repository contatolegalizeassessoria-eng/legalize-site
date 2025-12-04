import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Proprietário de Restaurante",
    text: "A equipe da Legalize foi incrível na obtenção dos meus alvarás. O processo que parecia impossível foi resolvido em semanas. Recomendo muito!"
  },
  {
    name: "Fernanda Costa",
    role: "Empresária - E-commerce",
    text: "Abri minha ME com eles e fiquei impressionada com a agilidade. Tudo feito pelo WhatsApp, sem eu precisar sair de casa. Atendimento nota 10."
  },
  {
    name: "Carlos Eduardo",
    role: "Sócio de Construtora",
    text: "Precisávamos de uma alteração contratual complexa e a Legalize resolveu tudo com muita competência e transparência. Profissionais de excelência."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="h-1 w-20 bg-brand-medium mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative border-t-4 border-brand-light">
              <Quote className="absolute top-4 right-4 text-gray-200 w-10 h-10 transform rotate-180" />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 mb-6 italic relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                  <span className="text-xs text-brand-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;