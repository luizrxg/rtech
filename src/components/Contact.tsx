
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Mande um email",
      value: "rh@rtech.com",
      description: "Entre em contato a qualquer momento"
    },
    {
      icon: Phone,
      title: "Nos ligue",
      value: "(34) 9999-9999",
      description: "Seg-Sex 9-18 GMT"
    },
    {
      icon: MapPin,
      title: "Nos visite",
      value: "Uberlândia, MG",
      description: "Agende uma reunião"
    }
  ];

  return (
    <section id="contact" className="pb-20 pt-32 bg-gradient-to-b from-primary to-primary-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Vamos construir o <span className="text-gradient">Futuro</span> juntos
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pronto para transformar seu negócio com tecnologia de ponta?
            Adoraríamos saber mais sobre seu projeto e descobrir como podemos ajudá-lo a ter sucesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-white mb-6">Inicie seu projeto</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Mensagem enviada!</h4>
                <p className="text-blue-100">Iremos te responder dentro de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nome completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-accent"
                      placeholder="João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-accent"
                      placeholder="joao@empresa.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nome da empresa
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-accent"
                    placeholder="Sua empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Detalhes do projeto *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-accent resize-none"
                    placeholder="Conte-nos sobre seu projeto, seus objetivos e sobre como podemos te ajudar "
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  Enviar mensagem
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em contato</h3>
              <p className="text-blue-100 leading-relaxed">
                Quer você precise de consultoria técnica ou queira explorar oportunidades de parceria,
                nossa equipe está aqui para ajudá-lo a navegar no futuro da tecnologia.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <div className="text-accent font-medium mb-1">{info.value}</div>
                    <div className="text-blue-100 text-sm">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="glass-effect p-6 rounded-xl text-center" data-aos="fade-up" data-aos-delay="900">
              <h4 className="text-white font-semibold mb-2">Precisa de suporte imediato ?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Nossos especialistas em estão disponíveis para consultas de emergência e necessidades urgentes de projetos.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                Agendar chamada de emergência
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
