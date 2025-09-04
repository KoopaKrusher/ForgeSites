import projects from '@/data/projects.json'
import Link from 'next/link'

type Project = {
  title: string
  description: string
  link: string
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(projects as Project[]).map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <Link
              className="text-blue-600 hover:text-blue-700 font-medium"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
