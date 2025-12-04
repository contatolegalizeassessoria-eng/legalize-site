import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Construct WhatsApp URL with form data
      const text = `Nome: ${formData.name}%0ATelefone: ${formData.phone}%0AServiço: ${formData.service}%0AMensagem: ${formData.message}`;
      const whatsappUrl = `https://wa.me/5511947525644?text=${text}`;
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-medium relative">
        <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
                
                {/* Info Side */}
                <div className="bg-brand-dark p-10 md:w-2/5 flex flex-col justify-between text-white">
                    <div>
                        <h3 className="font-heading font-bold text-2xl mb-4">Vamos conversar?</h3>
                        <p className="text-gray-300 mb-8">
                            Preencha o formulário e nossa equipe entrará em contato rapidamente para entender sua demanda.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-light rounded-full"></div>
                            <span className="text-sm">Legalização completa</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-light rounded-full"></div>
                            <span className="text-sm">Suporte especializado</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-light rounded-full"></div>
                            <span className="text-sm">Agilidade no processo</span>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-10 md:w-3/5 bg-white">
                    {isSubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-2xl text-brand-dark">Recebemos sua solicitação!</h3>
                            <p className="text-gray-600">
                                Nossa equipe vai te chamar rapidamente no WhatsApp para dar continuidade.
                            </p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="mt-4 text-brand-medium font-medium hover:underline"
                            >
                                Enviar outra mensagem
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp)</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all"
                                    placeholder="(11) 99999-9999"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Serviço</label>
                                <select 
                                    id="service" 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all bg-white"
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="Abertura de Empresa">Abertura de Empresa</option>
                                    <option value="Alteração Contratual">Alteração Contratual</option>
                                    <option value="Regularização">Regularização</option>
                                    <option value="Baixa de Empresa">Baixa de Empresa</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all resize-none"
                                    placeholder="Descreva brevemente sua necessidade..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-brand-medium hover:bg-brand-dark text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                Solicitar Atendimento
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;