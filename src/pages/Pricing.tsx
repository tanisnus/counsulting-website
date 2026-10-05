import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { container } from '../components/layout'

const tiers = [
  {
    name: 'Boutique',
    price: '$18,000',
    priceNote: 'Fixed diagnostic',
    fit: 'A single property under 40 covers, or 1–4 treatment suites.',
    includes: [
      'Mutual non-disclosure before financials or plans are reviewed',
      'Two to four week operational audit',
      'Minimum 72 hours of on-site immersion',
      'Ownership dossier at the close of the mandate',
    ],
  },
  {
    name: 'Flagship',
    price: 'Scoped',
    priceNote: 'Issued after intake',
    fit: 'A mid-scale or high-volume venue, from 40 covers or 5 treatment suites.',
    includes: [
      'The same diagnostic sequence as a boutique mandate',
      'Scope set to seating, suite count, and service lines',
      'Blind guest immersion and back-of-house review',
      'Fee credited if a later implementation retainer is signed',
    ],
  },
  {
    name: 'Collective',
    price: 'Tiered',
    priceNote: 'Estate fee, quoted',
    fit: 'Multi-property resorts and destination campuses.',
    includes: [
      'A portfolio mandate rather than a single-room audit',
      'Shared standards across houses, with property-level findings',
      'Principal review, not a junior triage',
      'Audit fee credited toward a 6-month implementation retainer',
    ],
  },
]

export function Pricing() {
  useEffect(() => {
    document.title = 'Consulting Firm — Advisory Fees'
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header />
      <main>
        <section className={`${container} pt-16 pb-12`}>
          <div className="border-b border-outline-variant/30 pb-12">
            <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
              Advisory fees
            </span>
            <h1 className="mt-3 max-w-3xl font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
              A fixed mandate, not an open retainer.
            </h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg font-light text-on-surface-variant">
              Diagnostics are billed as single engagements, from $18,000 for a
              boutique property to a quoted collective fee for a multi-resort
              estate.
            </p>
          </div>
        </section>

        <section className={`${container} pb-20`}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="flex flex-col rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-sm"
              >
                <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
                  {tier.name}
                </span>
                <p className="mt-4 font-headline-lg text-headline-lg text-primary">{tier.price}</p>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  {tier.priceNote}
                </p>
                <p className="mt-6 font-body-md text-body-md font-light text-on-surface-variant">
                  {tier.fit}
                </p>
                <ul className="mt-8 space-y-3 border-t border-outline-variant/20 pt-6">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="font-body-sm text-body-sm text-on-surface"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-center font-label-md text-label-md text-surface transition-colors duration-300 hover:bg-secondary"
                  to="/contact"
                >
                  Request this mandate
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-3xl font-body-md text-body-md font-light text-on-surface-variant">
            If ownership keeps Consulting Firm for a subsequent 6-month
            operational implementation or menu rebuild, the initial audit fee is
            credited toward that advisory retainer.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
