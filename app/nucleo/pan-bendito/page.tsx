import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Calendar, Users, Store, Heart, ArrowRight } from "lucide-react"
export default function NucleoPanBenditoPage() {
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
              DESDE 2022
            </span>
          </div>
          <h1 className="text-foreground mb-4">
            Núcleo Pan Bendito
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            El segundo núcleo de ReFood en España. La prueba de que el modelo funciona 
            y se puede replicar en cualquier barrio con ganas de organizarse.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="stat-number text-3xl text-primary">6</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Rutas de rescate</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">20</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Familias (unas 60 personas)</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">25</span>
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
                  Pan Bendito es un barrio del distrito de Carabanchel, en el sur de Madrid, 
                  con una fuerte identidad vecinal y una larga tradición de solidaridad y 
                  organización comunitaria.
                </p>

                <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary">
                  <p className="text-foreground font-semibold normal-case mb-0">
                    Todo empezó cuando <strong>Teresa</strong>, profesora de la Universidad 
                    Complutense de Madrid, se puso en contacto con ReFood España. Junto a otros 
                    vecinos y vecinas activos del barrio y del mundo del asociacionismo, montaron 
                    Refood Pan Bendito en septiembre de 2022.
                  </p>
                </div>

                <p className="text-foreground/70 mb-6 normal-case">
                  ReFood trabaja de forma microlocal: los procedimientos están estandarizados 
                  y cada núcleo es totalmente autónomo bajo el paraguas de ReFood España. Así 
                  nació Pan Bendito, el segundo núcleo en España tras Tetuán.
                </p>

                <h3 className="text-foreground mb-4 mt-8">Los primeros pasos</h3>

                <p className="text-foreground/70 mb-6 normal-case">
                  El centro de mayores <strong>La Rosaleda</strong> se ofreció a colaborar desde 
                  el primer momento como donante. Se buscó un local para el reparto, se fijaron 
                  los martes como día de actividad y se impartieron cursos de manipulación de 
                  alimentos a todas las personas participantes.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  Desde el principio se tomó una decisión clave: involucrar a las familias 
                  receptoras como parte activa del proyecto, tanto en la recogida de las 
                  donaciones como en el reparto en el local. Hasta diciembre de 2022 se 
                  realizó un periodo de prueba con personas de confianza.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  A principios de 2023 la evaluación fue muy satisfactoria: las familias 
                  valoraban especialmente sentirse integradas, como &ldquo;una gran familia&rdquo;. 
                  Se decidió abrir el proyecto al resto del barrio y se sumaron nuevos donantes 
                  como el Colegio Vedruna Carabanchel, la Panadería &ldquo;Madre mía&rdquo;, el 
                  catering El Sitio de tu Recreo, el Colegio Santa Beatriz de Silva y el 
                  Colegio Escolapias Carabanchel.
                </p>
              </div>

              {/* How it works */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">¿Cómo funcionamos?</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-6 bg-muted">
                    <span className="label-text text-primary block mb-2">1. Rescate</span>
                    <p className="text-foreground/70 text-sm normal-case mb-0">
                      Martes y jueves de 15:00 a 16:00, seis rutas recogen la comida sobrante de 
                      colegios y centros de mayores. Se registra procedencia, tipo, cantidad y 
                      alérgenos, y se mantiene refrigerada o congelada.
                    </p>
                  </div>
                  <div className="p-6 bg-muted">
                    <span className="label-text text-primary block mb-2">2. Local</span>
                    <p className="text-foreground/70 text-sm normal-case mb-0">
                      Los martes de 18:30 a 20:00 un equipo de 9 a 11 personas redistribuye la 
                      comida rescatada entre las familias y registra su trazabilidad.
                    </p>
                  </div>
                  <div className="p-6 bg-muted">
                    <span className="label-text text-primary block mb-2">3. Recogida</span>
                    <p className="text-foreground/70 text-sm normal-case mb-0">
                      Las familias traen los tuppers limpios de la semana anterior y se llevan 
                      los nuevos con comida a casa.
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 mt-6 normal-case">
                  Donantes actuales: Colegio Escolapias, Colegio Santa Beatriz de Silva, 
                  Colegio Vedruna Carabanchel, Centro de Mayores La Rosaleda y Colegio Salesianos.
                </p>
              </div>

              {/* Growth Vision */}
              <div className="mt-12 p-8 bg-foreground text-background">
                <h3 className="text-primary mb-4">Un núcleo en crecimiento</h3>
                <p className="text-background/80 normal-case mb-6">
                  Hoy rescatamos entre 80 y 100 kg de alimentos cada semana. Nuestros retos: 
                  sumar donantes de fruta y verdura fresca, lograr una financiación estable y 
                  llegar a más familias y personas voluntarias del barrio.
                </p>
                <p className="text-background/80 normal-case mb-0">
                  Si vives o trabajas en Pan Bendito, Carabanchel o alrededores, te invitamos 
                  a conocernos y formar parte de este proyecto. Cada persona suma.
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">El día a día</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/pan-bendito-reparto.jpg"
                      alt="Tuppers con comida rescatada preparados con el nombre de cada familia en el local de Pan Bendito"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/pan-bendito-dia-2.jpg"
                      alt="Equipo de voluntarios"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">Hitos importantes</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2022</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Septiembre: nace Refood Pan Bendito. Periodo de prueba hasta diciembre
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2023</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Apertura al barrio y nuevos donantes. Primer curso: más de 1.000 kg 
                        rescatados y 15 familias (50 personas) atendidas
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2026</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Curso 2025-2026: 1.340 kg rescatados, más de 20 familias (unas 60 
                        personas) y 25 personas voluntarias
                      </p>
                    </div>
                  </div>
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
                        C/ Álvarez Abellán, 37<br />
                        28025 Madrid
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Horario de operaciones</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        Rescate: 15:00 - 16:00<br />
                        Reparto: 18:30 - 20:00
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Días de operación</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        Rescate martes y jueves<br />
                        Reparto los martes
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
                    C/ Álvarez Abellán, 37<br />
                    28025 Madrid
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Calle+Álvarez+Abellán+37+Madrid" 
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
