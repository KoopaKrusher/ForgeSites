import projects from '@/data/projects.json'
import Link from 'next/link'

type Project = {
  title: string
  description: string
  link: string
}

export default function ProjectsPage() {
  return (
    <section className="section-fade">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(projects as Project[]).map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-steel/10 p-5 bg-white shadow-lg transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-steel/80 mb-4">{p.description}</p>
            <Link
              className="text-molten hover:text-gold font-semibold transition duration-200 motion-reduce:transition-none"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit →
            </Link>
            <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
          </article>
        ))}
      </div>
    </section>
  )
}
