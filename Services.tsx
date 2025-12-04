import React from 'react';
import { Building2, FileText, MapPin, Briefcase, FileCheck, Landmark, AlertTriangle, Users } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Abertura de Empresa",
    description: "MEI, ME, LTDA e EI. Processo completo do início ao fim."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Alteração Contratual",
    description: "Atualização de cláusulas, sócios e capital social com segurança."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Mudança de Endereço",
    description: "Regularização do novo local de atuação da sua empresa."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Razão & Objeto Social",
    description: "Alteração de nome empresarial e atividades econômicas (CNAE)."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Licenciamento e Alvarás",
    description: "Emissão e renovação de licenças para funcionamento legal."
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Regularização Fiscal",
    description: "Resolução de pendências na Receita Federal e Prefeitura."
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Baixa de Empresa",
    description: "Encerramento correto de CNPJ para evitar dívidas futuras."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoria Completa",
    description: "Assessoria especializada para empresários e novos negócios."
  }
];

const Services: React.FC = () => {
  const whatsappNumber = "5511947525644";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um serviço.");

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas para manter sua empresa 100% legalizada e regular, permitindo que você foque no crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-gray p-8 rounded-xl border border-gray-200 hover:border-brand-medium hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-brand-medium group-hover:text-brand-light mb-4 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-brand-medium text-brand-medium hover:bg-brand-medium hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;