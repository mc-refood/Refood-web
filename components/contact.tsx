"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, CheckCircle2 } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/components/contact-actions"
import { PrivacyNotice } from "@/components/privacy-notice"

const initialState: ContactFormState = { status: "idle" }

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Contacto</span>
          <h2 className="text-foreground mb-4">
            ¿Construimos barrio juntos?
          </h2>
          <div className="divider-refood mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto normal-case">
            ¿Tienes preguntas? ¿Quieres saber más sobre cómo participar? 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-refood p-8">
            {state.status === "success" ? (
              <div className="flex flex-col items-center text-center py-4">
                <div className="refood-icon mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-foreground mb-4 normal-case">¡Mensaje enviado!</h3>
                <p className="text-foreground/80 normal-case mb-6 leading-relaxed">
                  Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                </p>
                {(state.whatsappme || (state.delivery === "fallback" && state.mailtoUrl)) && (
                  <div className="w-full space-y-3">
                    {state.whatsappme && (
                      <>
                        <p className="text-foreground/70 normal-case text-sm">
                          Si prefieres, también puedes escribirnos directamente por WhatsApp:
                        </p>
                        <a
                          href={state.whatsappme}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-refood w-full justify-center"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Contactar por WhatsApp
                        </a>
                      </>
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
                )}
              </div>
            ) : (
              <>
                <h3 className="text-foreground mb-6 normal-case">Envíanos un mensaje</h3>
                {state.status === "error" && (
                  <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
                    {state.message}
                  </div>
                )}
                <form action={formAction} className="space-y-6">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nombre
                    </label>
                    <Input id="name" name="name" type="text" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Voluntariado, donación, información..."
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea id="message" name="message" rows={5} required className="w-full" />
                  </div>
                  <PrivacyNotice />
              <Button type="submit" disabled={isPending} className="w-full btn-refood">
                    {isPending ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="card-refood p-6">
              <div className="flex items-start gap-4">
                <div className="refood-icon shrink-0" style={{ width: '3rem', height: '3rem' }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1 normal-case">Email</h4>
                  <a href="mailto:informacion@refoodesp.org" className="text-primary font-semibold">
                    informacion@refoodesp.org
                  </a>
                </div>
              </div>
            </div>

            {/* Locations with Maps */}
            <div className="card-refood p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="refood-icon shrink-0" style={{ width: '3rem', height: '3rem' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground mb-4 normal-case">Nuestros locales</h4>
                  <div className="space-y-6">
                    <div>
                      <span className="label-text text-primary block mb-2">Tetuán</span>
                      <p className="text-foreground/70 text-sm normal-case mb-3">
                        C/ Capitán Blanco Argibay, 114, 28029 Madrid
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Capitán+Blanco+Argibay,+114,+28029+Madrid" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                      >
                        Ver en Maps ↗
                      </a>
                    </div>
                    <div className="border-t border-border/30 pt-4">
                      <span className="label-text text-primary block mb-2">Pan Bendito</span>
                      <p className="text-foreground/70 text-sm normal-case mb-3">
                        C/ Álvarez Abellán, 37, 28025 Madrid
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Álvarez+Abellán,+37,+28025+Madrid" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                      >
                        Ver en Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-refood p-6">
              <h4 className="text-foreground mb-4 normal-case">Síguenos en redes</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/refoodmadrid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/refoodmadrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/refood-espa%C3%B1a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/RefoodMad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
