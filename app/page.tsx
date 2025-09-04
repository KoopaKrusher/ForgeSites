import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Hi, I’m Braden</h1>
      <p className="text-lg text-gray-600 mb-8">
        I build useful software and enjoy sharing what I learn.
      </p>
      <Link
        href="/projects"
        className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
      >
        See my projects
      </Link>
    </section>
  )
}
