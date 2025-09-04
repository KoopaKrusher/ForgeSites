function Card({ title, price, children }: { title: string; price: string; children: React.ReactNode }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-steel/10 bg-white p-5 shadow-md transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <h3 className="text-xl font-extrabold mb-1">{title}</h3>
      <p className="text-gold font-semibold mb-3">{price}</p>
      <div className="text-steel/80">{children}</div>
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
    </article>
  )
}

export default function PackagesPage() {
  return (
    <section className="space-y-12 section-fade">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold mb-2">Packages</h1>
        <p className="text-steel/80">Clear options for every stage of your business.</p>
      </header>

      {/* Build & Hand Off */}
      <div>
        <h2 className="text-2xl font-extrabold mb-2">Build & Hand Off</h2>
        <p className="text-steel/80 mb-6">
          One simple setup fee covers your website build, with add-ons available at each tier.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Basic Site (Starter)" price="$300 flat fee">
            <ul className="list-disc pl-5 space-y-1">
              <li>1–3 pages (Home, About, Contact)</li>
              <li>Fully responsive design that works on any device</li>
              <li>Business info, hours, services/menu, contact form</li>
              <li>Basic SEO setup for search visibility</li>
            </ul>
          </Card>
          <Card title="Business Site (Professional)" price="$500 flat fee">
            <ul className="list-disc pl-5 space-y-1">
              <li>4–6 pages (adds Services, Gallery, Testimonials)</li>
              <li>Branded look using your logo and colors</li>
              <li>Social links and Google Map embedded</li>
              <li>Short handoff tutorial for updates</li>
            </ul>
          </Card>
          <Card title="Premium Site (Showcase)" price="$750–$900 flat fee">
            <ul className="list-disc pl-5 space-y-1">
              <li>6–10 pages (Blog, Menu, Booking, or light e‑commerce)</li>
              <li>Custom design touches and polish</li>
              <li>Up to 20 product uploads</li>
              <li>Analytics connected and 30 days of email support</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Hosting & Maintenance */}
      <div>
        <h2 className="text-2xl font-extrabold mb-2">Hosting & Maintenance</h2>
        <p className="text-steel/80 mb-6">
          Ongoing monthly plans for hosting, updates, and support. Choose the level of care that fits your business.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Basic Plan" price="$25/month + $300–$400 setup">
            <ul className="list-disc pl-5 space-y-1">
              <li>Managed hosting and domain</li>
              <li>SSL certificate included</li>
              <li>Monthly backups</li>
              <li>Email support for issues</li>
            </ul>
          </Card>
          <Card title="Growth Plan" price="$50/month + $400–$500 setup">
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Basic, plus monthly updates</li>
              <li>Two minor content edits per month</li>
              <li>Security and performance monitoring</li>
            </ul>
          </Card>
          <Card title="Pro Plan" price="$100/month + $600–$700 setup">
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Growth, plus priority support</li>
              <li>Unlimited reasonable content edits</li>
              <li>SEO monitoring with quarterly review</li>
              <li>Advanced analytics dashboard</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
