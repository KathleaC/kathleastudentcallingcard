import { ArrowUpRight, GraduationCap, Mail } from 'lucide-react'

const EMAIL = 'kathleac@yahoo.com'

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-xl shadow-primary/10">
      <div
        aria-hidden="true"
        className="h-28 bg-gradient-to-br from-primary/30 via-primary/70 to-primary"
      />

      <div className="flex flex-col gap-6 px-8 pb-8">
        <div className="-mt-10 flex size-20 items-center justify-center rounded-full border-4 border-card bg-primary font-serif text-2xl font-semibold text-primary-foreground">
          KC
        </div>

        <header className="flex flex-col gap-1">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-balance">
            Kathlea Corla
          </h1>
          <p className="text-lg text-primary">Computer Science BS</p>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            University of Central Florida
          </p>
        </header>

        <p className="flex items-center gap-2 text-muted-foreground">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          Graduating in 2027
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="group flex items-center justify-between gap-3 rounded-xl bg-primary px-5 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
        >
          <span className="flex items-center gap-3">
            <Mail className="size-5" aria-hidden="true" />
            {EMAIL}
          </span>
          <ArrowUpRight
            className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}
