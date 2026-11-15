"use client"

import { useActionState } from "react"
import { submitDonanteForm, type DonanteFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: DonanteFormState = { status: "idle" }

export function DonanteForm() {
  const [state, formAction, isPending] = useActionState(submitDonanteForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por sumarte!"
        message="Hemos recibido los datos de tu negocio. El equipo de donantes de tu núcleo se pondrá en contacto contigo para coordinar una visita y empezar las recogidas."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo de donantes"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-6 text-2xl">Formulario de contacto</h2>

      {state.status === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div>
          <label htmlFor="negocio" className="block text-foreground font-semibold mb-2">
            Nombre del negocio *
          </label>
          <input
            type="text"
            id="negocio"
            name="negocio"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Nombre de tu establecimiento"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="block text-foreground font-semibold mb-2">
            Tipo de negocio *
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona un tipo</option>
            <option value="fruteria">Frutería</option>
            <option value="panaderia">Panadería / Pastelería</option>
            <option value="restaurante">Restaurante / Bar</option>
            <option value="supermercado">Supermercado / Tienda</option>
            <option value="colegio">Colegio / Universidad</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="nucleo" className="block text-foreground font-semibold mb-2">
            Núcleo más cercano *
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
          <label htmlFor="contacto" className="block text-foreground font-semibold mb-2">
            Persona de contacto *
          </label>
          <input
            type="text"
            id="contacto"
            name="contacto"
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
            placeholder="email@tunegocio.com"
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
          <label htmlFor="direccion" className="block text-foreground font-semibold mb-2">
            Dirección del negocio *
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Calle, número, barrio"
          />
        </div>

        <div>
          <label htmlFor="horario" className="block text-foreground font-semibold mb-2">
            Horario de cierre habitual
          </label>
          <input
            type="text"
            id="horario"
            name="horario"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Ej: 20:00 de lunes a viernes"
          />
        </div>

        <div>
          <label htmlFor="comentarios" className="block text-foreground font-semibold mb-2">
            Comentarios adicionales
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            rows={3}
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="¿Qué tipo de productos sueles tener de excedente?"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Nos pondremos en contacto contigo para coordinar una visita y explicarte el proceso en detalle.
        </p>
      </form>
    </div>
  )
}
