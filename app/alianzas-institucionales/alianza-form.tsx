"use client"

import { useActionState } from "react"
import { Handshake } from "lucide-react"
import { submitAlianzaForm, type AlianzaFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: AlianzaFormState = { status: "idle" }

export function AlianzaForm() {
  const [state, formAction, isPending] = useActionState(submitAlianzaForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por tu propuesta!"
        message="Hemos recibido tu propuesta de colaboración. Nuestro equipo de alianzas la revisará y se pondrá en contacto contigo para concretar los detalles."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo de alianzas"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <div className="flex items-center gap-3 mb-2">
        <Handshake className="h-7 w-7 text-primary" />
        <h2 className="text-foreground text-2xl">Construyamos una alianza</h2>
      </div>
      <p className="text-foreground/70 normal-case mb-6">
        Cuéntanos quién eres y qué tienes en mente. Te responderemos para explorar cómo podemos colaborar.
      </p>

      {state.status === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div>
          <label htmlFor="entidad" className="block text-foreground font-semibold mb-2">
            Nombre de la entidad *
          </label>
          <input
            type="text"
            id="entidad"
            name="entidad"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Nombre de tu organización o empresa"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="block text-foreground font-semibold mb-2">
            Tipo de entidad *
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona una opción</option>
            <option value="ong">ONG / Entidad social</option>
            <option value="empresa">Empresa</option>
            <option value="administracion">Administración pública</option>
            <option value="fundacion">Fundación</option>
            <option value="colectivo">Colectivo / Asociación vecinal</option>
            <option value="otro">Otro</option>
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
          <label htmlFor="telefono" className="block text-foreground font-semibold mb-2">
            Teléfono de contacto
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
          <label htmlFor="email" className="block text-foreground font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="email@entidad.org"
          />
        </div>

        <div>
          <label htmlFor="interes" className="block text-foreground font-semibold mb-2">
            ¿En qué te gustaría colaborar?
          </label>
          <select
            id="interes"
            name="interes"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona una opción</option>
            <option value="campanas">Campañas y comunicación</option>
            <option value="voluntariado">Voluntariado corporativo</option>
            <option value="proyectos">Proyectos conjuntos</option>
            <option value="patrocinio">Patrocinio y recursos</option>
            <option value="varios">Varias opciones</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-foreground font-semibold mb-2">
            Cuéntanos tu propuesta
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
            placeholder="Describe brevemente la colaboración que tienes en mente"
          />
        </div>

        <PrivacyNotice />

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Enviar propuesta"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Nuestro equipo se pondrá en contacto contigo para concretar los detalles.
        </p>
      </form>
    </div>
  )
}
