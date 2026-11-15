import Link from "next/link"
import { ArrowLeft, Heart, Smartphone, Building, CheckCircle, Star } from "lucide-react"

const destinos = [
  "Alquiler y mantenimiento del local",
  "Carritos de transporte y bolsas reutilizables",
  "Tuppers y envases para las familias",
  "Suministros (luz, agua, limpieza)",
  "Formación de voluntarios",
  "Expansión a nuevos barrios",
]

function ConceptoNucleo({ ejemplo }: { ejemplo: string }) {
  return (
    <div className="mt-4 border-2 border-dashed border-primary bg-background p-3 text-sm normal-case">
      <span className="font-bold text-foreground block mb-1">Concepto: indica el núcleo</span>
      <span className="text-foreground/70">
        Escribe el núcleo al que va tu donación (<strong>Tetuán</strong> o <strong>Pan Bendito</strong>).
        Ejemplo: <span className="font-mono text-foreground">{ejemplo}</span>
      </span>
    </div>
  )
}

export default function QuieroColaborarEconomicamentePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/#colabora" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a formas de colaborar</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-foreground mb-4">
            Haz una donación
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Tu aporte económico nos ayuda a mantener el local, los carritos de transporte, 
            los tuppers y todo lo necesario para rescatar y repartir comida cada día.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Por qué donar</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                ReFood funciona íntegramente con voluntarios, pero tenemos gastos fijos que 
                necesitamos cubrir: el alquiler del local, los materiales de transporte, 
                los envases, los suministros...
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                Cada euro que donas se invierte directamente en el proyecto. No tenemos 
                personal contratado, así que tu aportación va íntegramente a hacer posible 
                el rescate de alimentos.
              </p>

              <h3 className="text-foreground mb-4 text-xl normal-case">Tu donación se destina a</h3>
              <ul className="space-y-3 text-foreground/70 normal-case mb-8">
                {destinos.map((destino) => (
                  <li key={destino} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {destino}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-primary/10 border-2 border-primary">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-foreground font-bold mb-2">Desgravación fiscal</h4>
                <p className="text-foreground/70 text-sm normal-case">
                  ReFood España es una asociación declarada de <strong>Utilidad Pública en 2024</strong>. Tus donaciones 
                  pueden desgravar hasta un 80% en el IRPF (los primeros 250 euros) y un 40% 
                  del resto (45% a partir del tercer año de donación continuada).
                </p>
              </div>
            </div>

            {/* Ways to donate */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Cómo donar</h2>

              <div className="space-y-6">
                <article className="relative p-6 bg-muted border-2 border-primary">
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-primary px-2 py-0.5 text-xs font-bold uppercase text-foreground">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    Opción recomendada
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <h3 className="text-foreground text-xl normal-case">1. Bizum (Donar a ONG)</h3>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-4">
                    Es la forma más sencilla. Al donar por Bizum, tu banco nos comunica tus datos
                    fiscales, así que tu donación queda registrada para la desgravación sin que
                    tengas que enviarnos nada más.
                  </p>
                  <p className="text-foreground text-sm normal-case mb-3">
                    Código ONG: <strong className="font-mono text-base">11800</strong> (ReFood España)
                  </p>
                  <ol className="text-foreground/70 text-sm normal-case list-decimal pl-5 space-y-1">
                    <li>Abre Bizum en tu banco y selecciona <strong>Donar a ONG</strong>.</li>
                    <li>Introduce el código <strong>11800</strong> o busca ReFood España.</li>
                    <li>Elige el importe y escribe el núcleo en el concepto.</li>
                    <li>Confirma tu donación.</li>
                  </ol>
                  <ConceptoNucleo ejemplo="Pan Bendito" />
                </article>

                <article className="p-6 bg-muted">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="h-6 w-6 text-primary" />
                    <h3 className="text-foreground text-xl normal-case">2. Transferencia bancaria</h3>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-4">
                    Si prefieres hacer una transferencia, usa estos datos:
                  </p>
                  <dl className="text-sm normal-case font-mono space-y-1 text-foreground">
                    <div>
                      <dt className="inline text-foreground/60">IBAN: </dt>
                      <dd className="inline">ES86 0049 6976 2524 1003 8471</dd>
                    </div>
                    <div>
                      <dt className="inline text-foreground/60">Titular: </dt>
                      <dd className="inline">Refood España</dd>
                    </div>
                  </dl>
                  <ConceptoNucleo ejemplo="Donación Tetuán - Ana García" />
                  <p className="text-foreground/70 text-sm normal-case mt-4">
                    Para que tu transferencia desgrave, escríbenos a{" "}
                    <a href="mailto:financiacion@refoodesp.org" className="text-primary underline font-medium">
                      financiacion@refoodesp.org
                    </a>{" "}
                    con tu nombre completo y DNI.
                  </p>
                </article>

                <p className="text-foreground/70 text-sm normal-case">
                  ¿Dudas sobre donaciones o empresas? Escríbenos a{" "}
                  <a href="mailto:financiacion@refoodesp.org" className="text-primary underline font-medium">
                    financiacion@refoodesp.org
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
