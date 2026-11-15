import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const nuclei = [
  {
    name: "Tetuán",
    slug: "tetuan",
    year: "2019",
    description:
      "El núcleo original. Aquí empezó todo: un grupo de vecinos decidió que la comida buena no podía acabar en la basura mientras había familias que la necesitaban.",
    address: "C/ Capitán Blanco Argibay, 114, 28029 Madrid",
    schedule: "Lunes a jueves",
    stats: { establishments: "26", families: "40", volunteers: "50+" },
    image:
      "/images/tetuan-local.jpg",
  },
  {
    name: "Pan Bendito",
    slug: "pan-bendito",
    year: "2022",
    description:
      "Núcleo en Carabanchel impulsado por vecinas y vecinos del barrio. Las familias participan activamente en el rescate y el reparto: aquí todas somos voluntarias.",
    address: "C/ Álvarez Abellán, 37, 28025 Madrid",
    schedule: "Martes y jueves",
    stats: { establishments: "6", families: "20", volunteers: "25" },
    image:
      "/images/pan-bendito-reparto.jpg",
  },
]

export function Nuclei() {
  return (
    <section id="nucleos" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Nuestros núcleos</span>
          <h2 className="text-foreground mb-4">Un modelo, muchos barrios</h2>
          <div className="divider-refood mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto normal-case">
            ReFood se organiza en núcleos autónomos por barrio. Cada núcleo respeta la identidad
            común y se adapta a su contexto.
          </p>
        </div>

        {/* Nuclei Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {nuclei.map((nucleus, index) => (
            <div key={index} className="card-refood overflow-hidden flex flex-col" style={{ borderRadius: 0 }}>
              {/* Image */}
              <div className="relative aspect-video overflow-hidden" style={{ borderRadius: 0 }}>
                <Image
                  src={nucleus.image}
                  alt={`Núcleo ReFood ${nucleus.name}`}
                  fill
                  className="object-cover border-0"
                />
                {/* Name badge — reduced height, sharp corners */}
                <div
                  className="absolute top-0 left-0 bg-primary flex items-center px-3"
                  style={{ borderRadius: 0, height: "2rem", minWidth: "2rem" }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', Impact, sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      color: "#FFFFFF",
                    }}
                  >
                    {nucleus.name}
                  </span>
                </div>
                {/* Year badge — same height as name badge, sharp corners */}
                <div
                  className="absolute top-0 right-0 bg-foreground flex items-center px-3"
                  style={{ borderRadius: 0, height: "2rem", minWidth: "2rem" }}
                >
                  <span className="text-xs font-bold text-background whitespace-nowrap">Desde {nucleus.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-foreground/70 mb-4 normal-case flex-1">{nucleus.description}</p>

                {/* Saber más link */}
                <Link
                  href={`/nucleo/${nucleus.slug}`}
                  className="inline-flex items-center gap-1 text-primary font-bold text-sm mb-6 hover:underline hover:no-underline group"
                >
                  Saber más
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm normal-case">{nucleus.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground/80 text-sm normal-case">{nucleus.schedule}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <span className="stat-number text-2xl">{nucleus.stats.establishments}</span>
                    <span className="stat-label block text-xs mt-1">Comercios</span>
                  </div>
                  <div className="text-center">
                    <span className="stat-number text-2xl">{nucleus.stats.families}</span>
                    <span className="stat-label block text-xs mt-1">Familias</span>
                  </div>
                  <div className="text-center">
                    <span className="stat-number text-2xl">{nucleus.stats.volunteers}</span>
                    <span className="stat-label block text-xs mt-1">Voluntarios</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Tu barrio es el siguiente - Black card, no image, centered */}
          <div
            className="overflow-hidden flex flex-col"
            style={{ backgroundColor: "#1A1A1A", borderRadius: 0 }}
          >
            {/* Van setup image */}
            <div className="relative aspect-video overflow-hidden" style={{ borderRadius: 0 }}>
              <Image
                src="/images/furgoneta-nuevo-nucleo.jpg"
                alt="Voluntario preparando la furgoneta para el primer día del núcleo"
                fill
                className="object-cover border-0"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="text-white mb-6">Tu barrio es el siguiente</h3>
              <p className="text-white/70 mb-8 normal-case max-w-sm leading-relaxed">
                Hacia el desperdicio cero, sin partir de cero. Te ofrecemos todo el apoyo
                para montar un núcleo en tu barrio: formación, materiales y acompañamiento.
              </p>
              <Link href="/descubre-como-empezar" className="btn-refood text-center">
                Descubre cómo empezar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
