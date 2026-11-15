"use client"

import { useActionState } from "react"
import { submitHelpForm, type HelpFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: HelpFormState = { status: "idle" }

export function HelpForm() {
  const [state, formAction, isPending] = useActionState(submitHelpForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="Hemos recibido tu solicitud"
        message="Gracias por confiar en nosotros. Un miembro del equipo del núcleo se pondrá en contacto contigo lo antes posible para conocer tu situación. Todo se trata con total confidencialidad."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo por WhatsApp"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-2 text-2xl">Cuéntanos tu situación</h2>
      <p className="text-foreground/70 normal-case mb-6">
        Rellena el formulario y un miembro del equipo se pondrá en contacto contigo lo antes posible.
      </p>

      {state.status === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div>
          <label htmlFor="nombre" className="block text-foreground font-semibold mb-2">
            Nombre *
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
          <label htmlFor="telefono" className="block text-foreground font-semibold mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="600 000 000"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="barrio" className="block text-foreground font-semibold mb-2">
            Barrio donde vives *
          </label>
          <select
            id="barrio"
            name="barrio"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona tu barrio</option>
            <option value="tetuan">Tetuán</option>
            <option value="pan-bendito">Pan Bendito</option>
            <option value="otro">Otro barrio</option>
          </select>
        </div>

        <div>
          <label htmlFor="personas" className="block text-foreground font-semibold mb-2">
            Personas en el hogar *
          </label>
          <select
            id="personas"
            name="personas"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona una opción</option>
            <option value="1">1 persona</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5+">5 o más personas</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-foreground font-semibold mb-2">
            Cuéntanos algo más *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="Cualquier información que nos ayude a entender mejor tu situación"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Tu información es confidencial y solo la verá el equipo del núcleo.
        </p>
      </form>
    </div>
  )
}
