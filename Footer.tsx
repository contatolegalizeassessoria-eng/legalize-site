import React from 'react';
import { BarChart3, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-medium">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded text-brand-dark">
                <BarChart3 size={24} strokeWidth={3} />
              </div>
              <span className="font-heading font-bold text-2xl">LEGALIZE</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Somos especialistas em legalização empresarial e cuidamos de tudo para que você possa focar no que realmente importa: o crescimento da sua empresa.
            </p>
            <div className="flex gap-4">
               <a href="#" className="bg-white/10 hover:bg-brand-light p-2 rounded-full transition-colors"><Instagram size={20} /></a>
               <a href="#" className="bg-white/10 hover:bg-brand-light p-2 rounded-full transition-colors"><Facebook size={20} /></a>
               <a href="#" className="bg-white/10 hover:bg-brand-light p-2 rounded-full transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#hero" className="hover:text-brand-light transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-brand-light transition-colors">Serviços</a></li>
              <li><a href="#features" className="hover:text-brand-light transition-colors">Diferenciais</a></li>
              <li><a href="#contact" className="hover:text-brand-light transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Serviços</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Abertura de Empresa</li>
              <li>Alterações Contratuais</li>
              <li>Licenciamento e Alvarás</li>
              <li>Regularização Fiscal</li>
              <li>Baixa de CNPJ</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-light mt-0.5" />
                <div>
                   <p className="font-bold text-white mb-1">WhatsApp:</p>
                   <a href="https://wa.me/5511947525644" className="hover:text-brand-light transition-colors">(11) 94752-5644</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-light mt-0.5" />
                <div>
                   <p className="font-bold text-white mb-1">E-mail:</p>
                   <a href="mailto:contatolegalizeassessoria@gmail.com" className="hover:text-brand-light transition-colors break-all">contatolegalizeassessoria@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Legalize Assessoria Contábil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <span>CNPJ: 00.000.000/0001-00</span>
             <a href="#" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;