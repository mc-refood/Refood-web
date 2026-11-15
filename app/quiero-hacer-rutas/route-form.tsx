"use client"

import { useActionState } from "react"
import { Calendar, Mail, MessageCircle, CheckCircle2 } from "lucide-react"
import { submitRouteForm, type RouteFormState } from "./actions"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: RouteFormState = { status: "idle" }

export function RouteForm() {
  const [state, formAction, isPending] = useActionState(submitRouteForm, initialState)

  if (state.status === "success") {
    return (
      <div className="bg-muted p-8">
        <div className="flex flex-col items-center text-center">
          <div className="refood-icon mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="text-foreground mb-4 text-2xl">¡Bienvenido/a a ReFood!</h2>

          <p className="text-foreground/80 normal-case mb-6 leading-relaxed">
            Gracias por dar el paso. Tu primer día será el{" "}
            <strong className="text-foreground">{state.nextDate}</strong>. Te esperamos con
            muchas ganas para empezar a rescatar comida y aportar al barrio. ¡Cada par de
            manos cuenta y la tuya va a marcar la diferencia!
          </p>

          <div className="w-full bg-background border-2 border-border p-5 mb-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground font-semibold normal-case">
                Tu primer día: {state.nextDate}
              </span>
            </div>
            <p className="text-foreground/70 normal-case text-sm">
              Si tienes cualquier duda o quieres saber más antes de empezar, puedes escribir
              directamente al responsable del {state.dayLabel}:
            </p>
          </div>

          <div className="w-full space-y-3">
            {state.whatsappme && (
              <a
                href={state.whatsappme}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-refood w-full justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
            )}
            {state.delivery === "fallback" && state.mailtoUrl && (
              <a
                href={state.mailtoUrl}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail className="h-5 w-5" />
                Enviar también por email
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-6 text-2xl">Formulario de inscripción</h2>

      {state.status === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div>
          <label htmlFor="nombre" className="block text-foreground font-semibold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-foreground font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="600 000 000"
          />
        </div>

        <div>
          <label htmlFor="nucleo" className="block text-foreground font-semibold mb-2">
            Núcleo *
          </label>
          <select
            id="nucleo"
            name="nucleo"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona un núcleo</option>
            <option value="tetuan">Tetuán</option>
            <option value="pan-bendito">Pan Bendito</option>
          </select>
        </div>

        <div>
          <label htmlFor="disponibilidad" className="block text-foreground font-semibold mb-2">
            Día disponible *
          </label>
          <select
            id="disponibilidad"
            name="disponibilidad"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona tu día</option>
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-foreground font-semibold mb-2">
            Cuéntanos algo sobre ti
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="¿Por qué quieres unirte? ¿Tienes alguna experiencia previa?"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Al enviar, avisaremos al responsable del día elegido y te confirmaremos tu primer día.
        </p>
      </form>
    </div>
  )
}
