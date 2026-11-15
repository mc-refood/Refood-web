"use client"

import { useActionState } from "react"
import { submitSocioForm, type SocioFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: SocioFormState = { status: "idle" }

export function SocioForm() {
  const [state, formAction, isPending] = useActionState(submitSocioForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por hacerte socio/a!"
        message="Hemos recibido tu solicitud de alta. El equipo de socios la tramitará y te enviará la confirmación con los detalles de tu domiciliación por email."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo de socios"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-6 text-2xl">Formulario de alta</h2>

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
          <label htmlFor="dni" className="block text-foreground font-semibold mb-2">
            DNI/NIE *
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="12345678A"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block text-foreground font-semibold mb-2">
            Dirección postal
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Calle, número, código postal, ciudad"
          />
        </div>

        <div>
          <label htmlFor="cuota" className="block text-foreground font-semibold mb-2">
            Cuota mensual *
          </label>
          <select
            id="cuota"
            name="cuota"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona una cuota</option>
            <option value="6">6 euros/mes</option>
            <option value="10">10 euros/mes</option>
            <option value="15">15 euros/mes</option>
            <option value="20">20 euros/mes</option>
            <option value="otra">Otra cantidad</option>
          </select>
        </div>

        <div>
          <label htmlFor="iban" className="block text-foreground font-semibold mb-2">
            IBAN para domiciliación *
          </label>
          <input
            type="text"
            id="iban"
            name="iban"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="ES00 0000 0000 0000 0000 0000"
          />
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" id="privacidad" name="privacidad" required className="mt-1" />
          <label htmlFor="privacidad" className="text-sm text-foreground/70 normal-case">
            Acepto la política de privacidad y autorizo el tratamiento de mis datos para la gestión de
            mi condición de socio/a de ReFood España.
          </label>
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Darme de alta como socio/a"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Recibirás un email de confirmación con los detalles de tu alta.
        </p>
      </form>
    </div>
  )
}
