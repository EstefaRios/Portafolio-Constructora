import { motion } from 'motion/react';
import { Building2, Palette, MonitorPlay } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Diseño Arquitectónico',
      description: 'Desde el concepto hasta la realización, cuidamos cada detalle.'
    },
    {
      icon: <Palette size={48} />,
      title: 'Diseño de Interiores',
      description: 'Espacios interiores coherentes, elegantes y funcionales.'
    },
    {
      icon: <MonitorPlay size={48} />,
      title: 'Renderizado 3D y Visualización',
      description: 'Mostramos la idea antes de que se convierta en realidad.'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
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
            Qué <span className="text-[#2C5F7C]">Hacemos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mb-6 text-[#2C5F7C] flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3
                className="text-xl mb-4 tracking-wide text-[#0A0A0A]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[#666666] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
