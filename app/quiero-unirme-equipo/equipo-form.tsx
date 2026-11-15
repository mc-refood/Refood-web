"use client"

import { useActionState } from "react"
import { submitEquipoForm, type EquipoFormState } from "./actions"
import { PrivacyNotice } from "@/components/privacy-notice"
import { FormSuccess } from "@/components/form-success"

const initialState: EquipoFormState = { status: "idle" }

export function EquipoForm() {
  const [state, formAction, isPending] = useActionState(submitEquipoForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por dar el paso!"
        message="Hemos recibido tu candidatura. El equipo de gestión la revisará y te contactará para una entrevista informal y conocernos mejor."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo gestor"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
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
          <label htmlFor="area" className="block text-foreground font-semibold mb-2">
            Área de interés *
          </label>
          <select
            id="area"
            name="area"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona un área</option>
            <option value="comunicacion">Comunicación y redes sociales</option>
            <option value="coordinacion">Coordinación de voluntarios</option>
            <option value="logistica">Logística y relación con comercios</option>
            <option value="administracion">Administración y captación de fondos</option>
            <option value="digitalizacion">Digitalización y tecnología</option>
            <option value="otra">Otra área</option>
          </select>
        </div>

        <div>
          <label htmlFor="motivacion" className="block text-foreground font-semibold mb-2">
            ¿Por qué quieres unirte?
          </label>
          <textarea
            id="motivacion"
            name="motivacion"
            rows={3}
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="Cuéntanos qué te motiva a formar parte del equipo de gestión"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Revisaremos tu solicitud y te contactaremos para una entrevista informal.
        </p>
      </form>
    </div>
  )
}
