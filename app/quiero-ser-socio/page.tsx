import Link from "next/link"
import { ArrowLeft, Mail, Heart, CheckCircle } from "lucide-react"
import { SocioForm } from "./socio-form"
export default function QuieroSerSocioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/#sumate" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a formas de participar</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-foreground mb-4">
            Quiero ser socio/a
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Mantente conectado con la comunidad ReFood como miembro asociado. Recibe 
            información actualizada y apoya el proyecto de forma continuada.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Qué significa ser socio/a</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                Ser socio/a de ReFood España es una forma de apoyar el proyecto de manera 
                sostenible. Con tu cuota mensual, nos ayudas a mantener la infraestructura 
                necesaria para rescatar y repartir alimentos cada día.
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                Pero ser socio/a es mucho más que una aportación económica: es formar parte 
                de una comunidad comprometida con el desperdicio cero y la solidaridad vecinal.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Newsletter</span>
                    <span className="text-foreground/70 normal-case">Noticias, comunicaciones y eventos</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Heart className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Contribución</span>
                    <span className="text-foreground/70 normal-case block">Cuota mensual desde 6 euros (deducible en el IRPF por Utilidad Pública)</span>
                    <a
                      href="mailto:socios@refoodesp.org"
                      className="text-primary text-sm underline normal-case mt-1 inline-block"
                    >
                      socios@refoodesp.org
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-foreground mb-4 text-xl normal-case">Tu aportación se destina a</h3>
              <ul className="space-y-3 text-foreground/70 normal-case">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Alquiler y mantenimiento del local
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Material de transporte (carritos, bolsas, tuppers)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Suministros y limpieza
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Formación de voluntarios
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Expansión a nuevos barrios
                </li>
              </ul>
            </div>

            {/* Form Column */}
            <div>
              <SocioForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
