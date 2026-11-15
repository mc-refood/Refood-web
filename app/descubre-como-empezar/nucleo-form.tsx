"use client"

import { useActionState } from "react"
import { submitNucleoForm, type NucleoFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: NucleoFormState = { status: "idle" }

export function NucleoForm() {
  const [state, formAction, isPending] = useActionState(submitNucleoForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por querer empezar!"
        message="Hemos recibido tu solicitud. Nos pondremos en contacto contigo para concertar una primera reunión y explicarte todos los pasos para montar tu núcleo."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo de núcleos"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-2 text-2xl">Cuéntanos tu proyecto</h2>
      <p className="text-foreground/70 normal-case mb-6">
        Déjanos tus datos y nos pondremos en contacto para empezar a construir juntos el núcleo de tu barrio.
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
          <label htmlFor="barrio" className="block text-foreground font-semibold mb-2">
            Barrio o zona donde quieres crear el núcleo *
          </label>
          <input
            type="text"
            id="barrio"
            name="barrio"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Ej: Chamberí, Madrid"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-foreground font-semibold mb-2">
            Cuéntanos tu situación
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="¿Ya tienes un grupo de voluntarios? ¿Has hablado con algún comercio? ¿Dispones de un local?"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Te responderemos para concertar una primera reunión y explicarte todos los pasos.
        </p>
      </form>
    </div>
  )
}
