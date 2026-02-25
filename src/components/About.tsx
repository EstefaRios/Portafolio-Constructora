import { motion } from 'motion/react';
import { Lightbulb, Leaf, Ruler } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Ruler size={32} />,
      title: 'Diseño minimalista',
      description: 'Líneas esenciales que definen espacios únicos'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Materiales auténticos',
      description: 'Selección cuidadosa de elementos naturales'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Innovación sostenible',
      description: 'Soluciones ecológicas para el futuro'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
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
            El <span className="text-[#2C5F7C]">Estudio</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-6 text-lg leading-relaxed text-[#333333]">
            <p>
              Fundado en 2016 por Lorenzo Verri, el estudio nace con el objetivo de crear arquitecturas
              que unan elegancia, innovación y simplicidad.
            </p>
            <p>
              Cada proyecto está pensado como un diálogo entre luz, espacio y materia. Preferimos líneas esenciales,
              materiales naturales y soluciones sostenibles, porque creemos que la belleza reside en el equilibrio.
            </p>
            <p>
              Nuestro enfoque es a medida: cada casa es un proyecto único, creado en torno a las personas
              que la habitarán.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-4 text-[#2C5F7C] flex justify-center group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3
                className="mb-3 text-xl tracking-wide text-[#0A0A0A]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {value.title}
              </h3>
              <p className="text-[#666666]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
