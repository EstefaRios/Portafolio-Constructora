import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const projectsData: Record<string, any> = {
    'attico-milano': {
      title: 'Ático Milán',
      location: 'Centro de Milán, Italia',
      year: '2024',
      area: '280 m²',
      materials: 'mármol, madera de nogal, vidrio, acero',
      description: [
        'Ático Milán representa el equilibrio perfecto entre elegancia urbana y confort contemporáneo.',
        'La gran terraza panorámica ofrece una vista impresionante de la ciudad, mientras que los interiores se caracterizan por materiales preciosos y acabados refinados.',
        'Cada detalle ha sido estudiado para crear un ambiente sofisticato que refleja el estilo de vida cosmopolita milanés.'
      ],
      images: [
        'https://images.unsplash.com/photo-1677129666408-19aceac7d293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxhbiUyMHBlbnRob3VzZSUyMGx1eHVyeSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxNDAxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA2MTMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'villa-alba': {
      title: 'Villa Alba',
      location: 'Toscana, Italia',
      year: '2023',
      area: '480 m²',
      materials: 'hormigón blanco, roble claro, piedra',
      description: [
        'Villa Alba se distingue por su forma monolítica y la pureza de sus líneas.',
        'La fachada blanca contrasta con los interiores cálidos en roble claro, creando una dialéctica entre exterior e interior.',
        'La luz cenital atraviesa los ambientes, enfatizando los materiales naturales y creando atmósferas siempre diferentes.'
      ],
      images: [
        'https://images.unsplash.com/photo-1622015663084-307d19eabbbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3aGl0ZSUyMHZpbGxhJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDYxMzExNHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA2MTMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'residenza-l20': {
      title: 'Residencia L20',
      location: 'Milán, Italia',
      year: '2024',
      area: '180 m²',
      materials: 'metal, vidrio, mármol',
      description: [
        'Un apartamento urbano transformado en un refugio contemporáneo en el corazón de Milán.',
        'Los tonos neutros y los detalles metálicos crean un ambiente sofisticado y luminoso.',
        'Los juegos de reflejos y las superficies brillantes amplifican la percepción del espacio.'
      ],
      images: [
        'https://images.unsplash.com/photo-1760503850317-f398353073a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxMzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA2MTMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'casa-sul-lago': {
      title: 'Casa en el Lago',
      location: 'Lago de Como, Italia',
      year: '2023',
      area: '360 m²',
      materials: 'vidrio estructural, piedra a la vista, acero',
      description: [
        'Una arquitectura que parece flotar sobre el agua, en perfecta simbiosis con el paisaje.',
        'El minimalismo extremo deja espacio a la naturaleza, que se convierte en protagonista.',
        'La continuidad visual entre interior y paisaje disuelve los límites entre vivienda y entorno natural.'
      ],
      images: [
        'https://images.unsplash.com/photo-1716124095942-c6ff3ad0541c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlc2lkZSUyMG1vZGVybiUyMGhvdXNlJTIwZ2xhc3N8ZW58MXx8fHwxNzYwNjEzMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA2MTMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  };

  const project = projectsData[projectId];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[#2C5F7C] hover:text-[#3a7594] mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Volver a proyectos</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className="text-4xl md:text-6xl mb-8 tracking-wide text-[#0A0A0A]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {project.title}
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mb-12 text-[#666666]">
            <div>
              <div className="text-[#2C5F7C] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ubicación</div>
              <div>{project.location}</div>
            </div>
            <div>
              <div className="text-[#2C5F7C] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Año</div>
              <div>{project.year}</div>
            </div>
            <div>
              <div className="text-[#2C5F7C] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Superficie</div>
              <div>{project.area}</div>
            </div>
            <div>
              <div className="text-[#2C5F7C] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Materiales</div>
              <div>{project.materials}</div>
            </div>
          </div>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-[#333333] mb-16">
            {project.description.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {project.images.map((image: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full aspect-[16/10] overflow-hidden"
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
