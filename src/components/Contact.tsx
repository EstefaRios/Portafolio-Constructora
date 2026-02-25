import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl mb-6 tracking-wide uppercase text-[#0A0A0A]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-[#2C5F7C]">Contacto</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl mb-6 tracking-wide text-[#0A0A0A]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Studio Verri Arquitectura
            </h3>
            <div className="space-y-4 text-[#666666]">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#2C5F7C] mt-1 flex-shrink-0" />
                <div>
                  Milán, Italia<br />
                  Via dei Navigli 24
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#2C5F7C] flex-shrink-0" />
                <div>+39 02 1234 5678</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#2C5F7C] flex-shrink-0" />
                <div>info@studioverri.com</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl mb-6 tracking-wide text-[#0A0A0A]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Síguenos
            </h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-[#666666] hover:text-[#2C5F7C] transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[#666666] hover:text-[#2C5F7C] transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl mb-6 tracking-wide text-[#0A0A0A]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Solicita información
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#E0E0E0] text-[#0A0A0A] placeholder-[#999999] focus:border-[#2C5F7C] focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#E0E0E0] text-[#0A0A0A] placeholder-[#999999] focus:border-[#2C5F7C] focus:outline-none transition-colors"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#E0E0E0] text-[#0A0A0A] placeholder-[#999999] focus:border-[#2C5F7C] focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-[#2C5F7C] text-white hover:bg-[#3a7594] transition-colors disabled:opacity-50"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {submitted ? '¡Enviado!' : 'Enviar'}
              </button>
            </form>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
