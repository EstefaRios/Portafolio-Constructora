import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onProjectSelect: (projectId: string) => void;
}

export function Projects({ onProjectSelect }: ProjectsProps) {
  const projects = [
    {
      id: 'attico-milano',
      title: 'Ático Milán',
      description: 'Elegante ático en el corazón de Milán con terraza panorámica. Diseño contemporáneo que une lujo y funcionalidad en un espacio urbano exclusivo.',
      image: 'https://images.unsplash.com/photo-1677129666408-19aceac7d293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxhbiUyMHBlbnRob3VzZSUyMGx1eHVyeSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxNDAxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'villa-alba',
      title: 'Villa Alba',
      description: 'Casa monolítica con fachada blanca e interiores en roble claro. Espacios continuos, luz cenital y materiales naturales.',
      image: 'https://images.unsplash.com/photo-1622015663084-307d19eabbbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3aGl0ZSUyMHZpbGxhJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDYxMzExNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'residenza-l20',
      title: 'Residencia L20',
      description: 'Apartamento urbano rediseñado en clave contemporánea. Tonos neutros, detalles metálicos y juegos de reflejos.',
      image: 'https://images.unsplash.com/photo-1760503850317-f398353073a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxMzExNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'casa-sul-lago',
      title: 'Casa en el Lago',
      description: 'Arquitectura suspendida sobre el agua, vidrio y piedra a la vista. Minimalismo extremo y continuidad visual entre interior y paisaje.',
      image: 'https://images.unsplash.com/photo-1716124095942-c6ff3ad0541c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlc2lkZSUyMG1vZGVybiUyMGhvdXNlJTIwZ2xhc3N8ZW58MXx8fHwxNzYwNjEzMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
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
            Proyectos <span className="text-[#2C5F7C]">Seleccionados</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Una selección de residencias privadas donde forma, luz y materia dialogan en armonía.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>

              <h3
                className="text-2xl mb-4 tracking-wide text-[#0A0A0A] group-hover:text-[#2C5F7C] transition-colors duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {project.title}
              </h3>

              <p className="text-[#666666] mb-4 leading-relaxed">
                {project.description}
              </p>

              <button className="flex items-center gap-2 text-[#2C5F7C] group-hover:gap-4 transition-all duration-300">
                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Descubre el proyecto</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
