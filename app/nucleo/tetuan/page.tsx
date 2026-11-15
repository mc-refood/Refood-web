import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Calendar, Users, Store, Heart, ArrowRight } from "lucide-react"
const donors = [
  { name: "El Cebón", area: "Valdeacederas" },
  { name: "Restaurante Casa Jose Luis", area: "Valdeacederas" },
  { name: "Amor al Plato", area: "Valdeacederas" },
  { name: "Frutería Star", area: "Valdeacederas" },
  { name: "Los Mares", area: "Valdeacederas" },
  { name: "Fundación Esclerosis Múltiple Madrid", area: "Valdeacederas" },
  { name: "Panic La Nave", area: "Valdeacederas" },
  { name: "Casa Ferreira", area: "Valdeacederas" },
  { name: "Frutería Las Gemelas", area: "Tetuán" },
  { name: "Panadería Bonjour", area: "Tetuán" },
  { name: "Eñe + que una letra", area: "Tetuán" },
  { name: "Super Fruta Valencia", area: "Tetuán" },
  { name: "Ludavi Pastelería Antoranz", area: "Tetuán" },
  { name: "Frutería Mariano", area: "Tetuán" },
  { name: "Colegio Mayor Aquinas", area: "Ciudad Universitaria" },
  { name: "Colegio Mayor Vedruna", area: "Ciudad Universitaria" },
  { name: "Colegio Mayor Loyola", area: "Ciudad Universitaria" },
  { name: "Colegio Mayor Santa María del Pino", area: "Ciudad Universitaria" },
  { name: "Colegio Mayor Alcalá", area: "Ciudad Universitaria" },
]

export default function NucleoTetuanPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/#nucleos" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a núcleos</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-foreground text-background px-4 py-1 text-sm font-bold">
              DESDE 2019
            </span>
          </div>
          <h1 className="text-foreground mb-4">
            Núcleo Tetuán
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            El núcleo original. Aquí empezó todo: un grupo de vecinos decidió que la comida 
            buena no podía acabar en la basura mientras había familias que la necesitaban.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="stat-number text-3xl text-primary">26</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Comercios colaboradores</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">40</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Familias beneficiarias</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">50+</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Voluntarios activos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column - History */}
            <div className="lg:col-span-2">
              <h2 className="text-foreground mb-8">Nuestra historia</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/70 mb-6 normal-case text-lg">
                  Refood nació en Portugal en 2012 y actualmente cuenta con más de 60 núcleos 
                  alrededor del país. Es una de las organizaciones más sólidas en materia de 
                  desperdicio alimentario y moviliza a más de 7.000 voluntarias, tiene más de 
                  2.500 donantes, evitando así el desperdicio de más de 1.125 toneladas de 
                  alimentos al año.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  Refood llega a España de la mano de su presidente, <strong>Alfonso Puras</strong>, 
                  quien había sido voluntario en uno de los núcleos de la organización en Lisboa 
                  durante su época de estudiante.
                </p>

                <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary">
                  <p className="text-foreground font-semibold normal-case mb-0">
                    En 2018 se forma un equipo de pioneros que comienza con los preparativos, 
                    realiza estudios de viabilidad en distintos barrios de Madrid y acaba 
                    seleccionando Tetuán como escenario para la creación del primer núcleo 
                    Refood fuera de Portugal.
                  </p>
                </div>

                <p className="text-foreground/70 mb-6 normal-case">
                  En junio de 2019, <strong>Refood España</strong> se constituye como asociación 
                  con CIF G88486006 y se inscribe en el Registro de Asociaciones de la Comunidad 
                  de Madrid con el número 39.246.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  En 2020, tras el confinamiento derivado de la pandemia de COVID-19, un vecino 
                  nos donó generosamente el uso de un local y centro de operaciones en el barrio 
                  de Tetuán. ¡Allí iniciamos nuestra labor!
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  En 2023, nos trasladamos a un nuevo local, más grande, en la calle 
                  <strong> Capitán Blanco Argibay 114, 28029, Madrid</strong>. ¡Desde allí seguimos 
                  con ilusión contribuyendo a lograr un barrio con desperdicio 0!
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">Hitos importantes</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2018</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Se forma el equipo pionero y se realizan estudios de viabilidad en Madrid
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2019</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Se constituye Refood España como asociación. Tetuán se convierte en el 
                        primer núcleo fuera de Portugal
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2020</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Un vecino dona el uso del primer local. Comenzamos operaciones tras el confinamiento
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2023</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Nos trasladamos al local actual en Capitán Blanco Argibay 114
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">El día a día</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/tetuan-local.jpg"
                      alt="Voluntarios preparando el reparto en el local de Tetuán, con cajas de fruta y verdura rescatada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/tetuan-dia-2.jpg"
                      alt="Preparación de alimentos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/galeria-cargando-alimentos.jpg"
                      alt="Voluntario cargando alimentos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/tetuan-dia-4.jpg"
                      alt="Organización de materiales"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Nuestros colaboradores */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">Nuestros colaboradores</h3>
                <p className="text-foreground/70 mb-8 normal-case">
                  ¿No es genial saber que en el barrio hay tantos establecimientos que quieren 
                  evitar el desperdicio y echar una mano a la vez? Estos son los comercios y 
                  entidades que hacen posible el día a día del núcleo de Tetuán.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {donors.map((donor, index) => (
                    <div key={index} className="bg-muted p-4 text-center">
                      <span className="font-semibold text-foreground text-sm normal-case">{donor.name}</span>
                      <span className="label-text text-primary block mt-1">{donor.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Info Card */}
              <div className="bg-muted p-6 mb-8">
                <h3 className="text-foreground mb-6 text-xl normal-case">Información práctica</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Dirección</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        C/ Capitán Blanco Argibay, 114<br />
                        28029 Madrid
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Horario de operaciones</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        Lunes a Jueves<br />
                        19:00 - 21:00
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Días de operación</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        4 días por semana
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <Link 
                  href="/quiero-hacer-rutas" 
                  className="block p-6 bg-primary hover:bg-primary/90 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-6 w-6 text-foreground" />
                    <h4 className="text-foreground font-bold normal-case">Hazte voluntario/a</h4>
                  </div>
                  <p className="text-foreground/80 text-sm normal-case mb-3">
                    Únete a las rutas de recogida y reparto de alimentos
                  </p>
                  <span className="inline-flex items-center gap-1 text-foreground font-bold text-sm group-hover:gap-2 transition-all">
                    Apuntarme
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link 
                  href="/quiero-colaborar" 
                  className="block p-6 border-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Store className="h-6 w-6 text-primary" />
                    <h4 className="text-foreground font-bold normal-case">Dona alimentos</h4>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-3">
                    ¿Tienes un comercio en el barrio? Únete como donante
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Más información
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link 
                  href="/quiero-colaborar-economicamente" 
                  className="block p-6 border-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <h4 className="text-foreground font-bold normal-case">Apóyanos</h4>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-3">
                    Colabora económicamente con el proyecto
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Donar
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-square bg-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground/70 text-sm normal-case">
                    C/ Capitán Blanco Argibay, 114<br />
                    28029 Madrid
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Calle+Capitán+Blanco+Argibay+114+Madrid" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-bold text-sm mt-4 hover:underline"
                  >
                    Ver en Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
