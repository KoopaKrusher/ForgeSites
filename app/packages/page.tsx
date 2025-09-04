function Card({ title, price, children }: { title: string; price: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition duration-200 motion-reduce:transition-none hover:shadow-lg">
      <h3 className="text-xl font-extrabold mb-1">{title}</h3>
      <p className="text-gold font-semibold mb-3">{price}</p>
      <div className="text-steel/80">{children}</div>
    </article>
  )
}

export default function PackagesPage() {
  return (
    <section className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold mb-2">Packages</h1>
        <p className="text-steel/80">Clear options for every stage of your business.</p>
      </header>

      <div>
        <h2 className="text-2xl font-extrabold mb-4">Option 1: Build & Hand Off (Squarespace/Wix/etc.)</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="💻 Basic Site (Starter)" price="$300">
            <ul className="list-disc pl-5 space-y-1">
              <li>1–3 pages (Home, About, Contact)</li>
              <li>Mobile-friendly</li>
              <li>Business info, hours, services/menu, contact form</li>
              <li>Basic SEO setup</li>
            </ul>
          </Card>
          <Card title="📸 Business Site (Professional)" price="$500">
            <ul className="list-disc pl-5 space-y-1">
              <li>4–6 pages (adds Services, Gallery, Testimonials)</li>
              <li>Branded design (logo/colors)</li>
              <li>Social media links</li>
              <li>Google Maps integration</li>
              <li>Client tutorial on updates</li>
            </ul>
          </Card>
          <Card title="🏆 Premium Site (Showcase)" price="$750–900">
            <ul className="list-disc pl-5 space-y-1">
              <li>6–10 pages (Blog, Menu, Booking, or light E-commerce)</li>
              <li>Custom branding/design touches</li>
              <li>Up to 20 product uploads</li>
              <li>Basic analytics integration</li>
              <li>30 days of email support after launch</li>
            </ul>
          </Card>
        </div>
        <p className="mt-3 text-sm text-steel/80">
          ✅ One-time fee. Client pays host (Squarespace/Wix). You hand off.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-extrabold mb-4">Option 2: Monthly Hosting & Maintenance</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="🌱 Basic Plan" price="$25/mo (+ $300–400 setup)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Hosting + domain management</li>
              <li>SSL</li>
              <li>Monthly backups</li>
              <li>Emergency email support</li>
            </ul>
          </Card>
          <Card title="🚀 Growth Plan" price="$50/mo (+ $400–500 setup)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Basic +</li>
              <li>Monthly plugin/theme updates</li>
              <li>Minor content edits (up to 2 per month)</li>
              <li>Security & performance monitoring</li>
            </ul>
          </Card>
          <Card title="🏆 Pro Plan" price="$100/mo (+ $600–700 setup)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Growth +</li>
              <li>Unlimited content edits (reasonable)</li>
              <li>Priority support</li>
              <li>SEO monitoring + quarterly review</li>
              <li>Advanced analytics dashboard</li>
            </ul>
          </Card>
        </div>
        <p className="mt-3 text-sm text-steel/80">
          🔑 For budget clients → sell Squarespace/Wix one-offs. For serious owners → pitch hosting/maintenance as peace of mind.
        </p>
      </div>
    </section>
  )
}
