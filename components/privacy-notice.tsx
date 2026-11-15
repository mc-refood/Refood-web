import Link from "next/link"

export function PrivacyNotice() {
  return (
    <aside
      aria-label="Información sobre protección de datos"
      className="border-l-2 border-border pl-3 text-xs leading-relaxed text-foreground/60 normal-case space-y-1"
    >
      <div>
        <strong className="font-semibold text-foreground/70">Responsable del tratamiento:</strong> Asociación
        Refood España, C.I.F. G88486006.
      </div>
      <div>
        <strong className="font-semibold text-foreground/70">Finalidades del tratamiento:</strong> la finalidad
        del tratamiento es (i) gestionar su mensaje y responderle.
      </div>
      <div>
        <strong className="font-semibold text-foreground/70">Derechos:</strong> tiene derecho a acceder,
        rectificar, oponerse y suprimir sus datos, entre otros. Puede ejercer sus derechos escribiendo a{" "}
        <a href="mailto:informacion@refoodesp.org" className="underline hover:text-primary">
          informacion@refoodesp.org
        </a>
        .
      </div>
      <div>
        <strong className="font-semibold text-foreground/70">Información adicional:</strong> consulte nuestra{" "}
        <Link href="/privacidad/" className="underline hover:text-primary">
          Política de Privacidad
        </Link>{" "}
        para más información.
      </div>
    </aside>
  )
}
