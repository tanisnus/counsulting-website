import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Icon } from '../components/Icon'
import { container } from '../components/layout'

const sectors = [
  { value: 'fine_dining', label: 'Fine Dining / Restaurant' },
  { value: 'luxury_spa', label: 'Luxury Day Spa' },
  { value: 'bodywork_studio', label: 'Massage Sanctuary / Bodywork' },
  { value: 'resort_hospitality', label: 'Multi-property Resort' },
]

const challenges = [
  { value: 'retention', label: 'Staff Retention & Ritual Training', defaultChecked: false, wide: false },
  { value: 'margins', label: 'Margin & Cost Control Architecture', defaultChecked: true, wide: false },
  { value: 'consistency', label: 'Guest Experience Consistency', defaultChecked: true, wide: false },
  { value: 'protocols', label: 'Menu / Protocol Redesign', defaultChecked: false, wide: false },
  {
    value: 'acoustics',
    label: 'Acoustic, Olfactory & Sensory Spatial Optimization',
    defaultChecked: false,
    wide: true,
  },
]

const offices = [
  {
    city: 'New York',
    atelier: 'SoHo Atelier',
    address: '482 Broome Street, 5th Floor — New York, NY 10013',
    line: 'EST / GMT-5 • +1 (212) 847-0191',
  },
  {
    city: 'Paris',
    atelier: '8ème Arrondissement',
    address: '14 Rue de Marignan — 75008 Paris, France',
    line: 'CET / GMT+1 • +33 1 70 38 42 10',
  },
  {
    city: 'Tokyo',
    atelier: 'Ginza Salon',
    address: '6-10-1 Ginza, Chuo-ku — Tokyo 104-0061, Japan',
    line: 'JST / GMT+9 • +81 3 6280 9140',
  },
]

const faqs = [
  {
    title: 'Confidentiality, NDAs & Data Safeguards',
    body: 'We execute mutual non-disclosure agreements prior to reviewing proprietary financials, architectural blueprints, or staff compensation schedules. All digital telemetry and floor audits are sequestered in zero-knowledge encrypted vaults, permanently anonymized in macroeconomic research datasets.',
  },
  {
    title: 'Audit Durations & Diagnostic Milestones',
    body: 'A sovereign venue operational audit spans between two and four calendar weeks. Week 1 is reserved for quantitative intake and blind mystery guest immersion. Week 2 encompasses back-of-house sensory tracking and labor velocity analysis. By Week 3 or 4, a comprehensive 90-page architectural and P&L dossier is delivered to the ownership committee.',
  },
  {
    title: 'Remote Telemetry vs. On-Site Immersion',
    body: 'While high-level balance sheet modeling is orchestrated remotely from our New York and Paris offices, our partners require a minimum of 72 consecutive hours of covert on-site physical presence. Experiencing lighting transitions, thermal consistency, acoustic spill, and kitchen firing tempos in person is non-negotiable for true diagnostic precision.',
  },
  {
    title: 'Retainer & Diagnostic Fee Structures',
    body: 'Diagnostics are billed as fixed single-engagement mandates ranging from $18,000 for single boutique properties to tiered collective fees for multi-resort estates. If ownership elects to retain Aurelia & Stone for subsequent 6-month operational implementation or menu rebuilds, the initial audit fee is credited directly toward the advisory retainer.',
  },
]

const fieldClass =
  'w-full rounded border border-outline-variant/60 bg-surface-container-lowest px-4 py-3.5 font-body-md text-body-md text-primary outline-none transition-all placeholder:text-outline/60 focus:border-primary focus:ring-1 focus:ring-secondary'

function SectorOption({
  value,
  label,
  selected,
  onSelect,
}: {
  value: string
  label: string
  selected: boolean
  onSelect: (value: string) => void
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center rounded-lg border bg-surface/30 p-3.5 transition-all hover:border-primary/40 ${
        selected
          ? 'border-primary bg-surface-container-high/40'
          : 'border-outline-variant/60'
      }`}
    >
      <input
        className="sr-only"
        checked={selected}
        name="venue_sector"
        type="radio"
        value={value}
        onChange={() => onSelect(value)}
      />
      <span
        className={`mr-3 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
          selected ? 'border-secondary bg-secondary' : 'border-outline'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full bg-surface ${selected ? 'opacity-100' : 'opacity-0'}`}
        />
      </span>
      <span className="font-title-md text-body-md text-primary">{label}</span>
    </label>
  )
}

export function Contact() {
  const [sector, setSector] = useState('fine_dining')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'Aurelia & Stone — Contact & Operational Audit Request'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col justify-between bg-background font-sans text-on-background antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header />
      <main className="grow">
        <section className={`${container} pt-16 pb-12`}>
          <div className="border-b border-outline-variant/30 pb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
                Confidential Diagnostic Intake
              </span>
            </div>
            <div className="contact-intro grid grid-cols-1 items-end gap-8">
              <div className="min-w-0">
                <h1 className="font-display-lg text-display-lg tracking-tight text-primary">
                  Begin the Diagnostic Conversation
                </h1>
              </div>
              <div className="min-w-0">
                <p className="font-body-lg text-body-lg leading-relaxed font-light text-on-surface-variant">
                  Whether preparing a flagship restaurant launch, revamping a spa
                  menu, or scaling a wellness studio collective, our partners
                  conduct confidential diagnostics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${container} scroll-mt-24 pb-24`} id="request-audit">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="rounded-lg border border-primary/10 bg-surface-container-lowest p-8 shadow-[0_12px_32px_-8px_rgba(43,51,56,0.04)] md:p-12 lg:col-span-7">
              <div className="mb-8">
                <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
                  Stage I — Diagnostic Assessment
                </span>
                <h2 className="mt-1 font-headline-sm text-headline-sm text-primary">
                  Operational &amp; Spatial Parameters
                </h2>
              </div>

              {submitted ? (
                <p className="font-body-md text-body-md text-primary" role="status">
                  Inquiry received. A principal partner will review this dossier
                  within 24 business hours under complete confidentiality.
                </p>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label
                      className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                      htmlFor="org_name"
                    >
                      Organization / Venue Name *
                    </label>
                    <input
                      id="org_name"
                      name="org_name"
                      className={fieldClass}
                      placeholder="e.g., The Miraval Salon & Reserve"
                      required
                      type="text"
                    />
                  </div>

                  <fieldset className="space-y-2">
                    <legend className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Venue Sector *
                    </legend>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {sectors.map((item) => (
                        <SectorOption
                          key={item.value}
                          label={item.label}
                          selected={sector === item.value}
                          value={item.value}
                          onSelect={setSector}
                        />
                      ))}
                    </div>
                  </fieldset>

                  <div className="space-y-2">
                    <label
                      className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                      htmlFor="current_stage"
                    >
                      Current Operational Stage *
                    </label>
                    <div className="relative">
                      <select
                        id="current_stage"
                        name="current_stage"
                        className={`${fieldClass} cursor-pointer appearance-none pr-12`}
                        defaultValue="pre_opening"
                      >
                        <option value="pre_opening">
                          Pre-Opening / Conceptual Formulation
                        </option>
                        <option value="active_growth">
                          Active Venue Seeking Margin Growth &amp; RevPAR
                        </option>
                        <option value="turnaround">
                          Turnaround / Operational &amp; Service Distress
                        </option>
                        <option value="expansion">
                          Multi-Location Collective Expansion
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <Icon name="expand_more" className="text-[20px]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                      htmlFor="venue_footprint"
                    >
                      Venue Footprint / Annual Covers / Treatment Suites *
                    </label>
                    <div className="relative">
                      <select
                        id="venue_footprint"
                        name="venue_footprint"
                        className={`${fieldClass} cursor-pointer appearance-none pr-12`}
                        defaultValue="boutique"
                      >
                        <option value="boutique">
                          Boutique (Under 40 Covers or 1-4 Treatment Suites)
                        </option>
                        <option value="midsize">
                          Mid-Scale Flagship (40-120 Covers or 5-10 Suites)
                        </option>
                        <option value="large">
                          High-Volume Sovereign Venue (120+ Covers or 10-25 Suites)
                        </option>
                        <option value="portfolio">
                          Multi-Unit Collective / Destination Campus (25+ Suites)
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <Icon name="expand_more" className="text-[20px]" />
                      </div>
                    </div>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Primary Challenges &amp; Focus Areas (Select All Applicable)
                    </legend>
                    <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                      {challenges.map((item) => (
                        <label
                          key={item.value}
                          className={`flex cursor-pointer items-center gap-3 rounded border border-outline-variant/40 p-3 text-on-surface transition-colors select-none hover:border-primary/40 ${
                            item.wide ? 'challenge-wide' : ''
                          }`}
                        >
                          <input
                            className="h-4 w-4 rounded border-outline-variant/70 accent-primary"
                            name="challenges"
                            type="checkbox"
                            value={item.value}
                            defaultChecked={item.defaultChecked}
                          />
                          <span className="font-body-sm text-body-sm">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="space-y-2">
                    <label
                      className="block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                      htmlFor="confidentiality_notes"
                    >
                      Desired Timeline &amp; Confidentiality Instructions
                    </label>
                    <textarea
                      id="confidentiality_notes"
                      name="confidentiality_notes"
                      className={fieldClass}
                      placeholder="Mention target execution dates, sensitive ownership dynamics, or strict NDA protocols required prior to initial exchange..."
                      rows={3}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      className="group flex w-full items-center justify-center gap-3 rounded bg-primary px-8 py-4 font-label-md text-label-md tracking-widest text-surface uppercase shadow-sm transition-all duration-300 hover:bg-secondary-focus"
                      type="submit"
                    >
                      <span>Request Confidential Diagnostic Session</span>
                      <Icon
                        name="arrow_forward"
                        className="text-[18px] transition-transform group-hover:translate-x-1"
                      />
                    </button>
                    <p className="mt-3 text-center font-body-sm text-body-sm text-on-surface-variant">
                      Protected by strict bilateral attorney-reviewed non-disclosure
                      terms.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <aside className="space-y-8 lg:col-span-5">
              <div className="rounded-lg border border-primary/10 bg-surface-container-low p-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="verified_user"
                    filled
                    className="mt-0.5 text-[28px] text-secondary"
                  />
                  <div>
                    <span className="mb-1 block font-label-sm text-label-sm tracking-widest text-secondary uppercase">
                      Executive Discretion
                    </span>
                    <p className="mb-2 font-headline-sm text-headline-sm text-primary">
                      Principal Review Commitment
                    </p>
                    <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                      Every inquiry is reviewed personally by a principal partner
                      within 24 business hours. No junior triage; strictly
                      peer-level consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 rounded-lg border border-primary/10 bg-surface-container-lowest p-8 shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Direct Practice Inquiries
                </h3>
                <div className="space-y-4">
                  <a className="group flex items-center gap-4" href="mailto:advisory@aureliastone.com">
                    <span className="flex h-10 w-10 items-center justify-center rounded bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-surface">
                      <Icon name="lock" className="text-[20px]" />
                    </span>
                    <span>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Encrypted Executive Desk
                      </span>
                      <span className="font-title-md text-title-md text-primary transition-colors group-hover:text-secondary">
                        advisory@aureliastone.com
                      </span>
                    </span>
                  </a>
                  <a className="group flex items-center gap-4" href="tel:+12128470190">
                    <span className="flex h-10 w-10 items-center justify-center rounded bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-surface">
                      <Icon name="call" className="text-[20px]" />
                    </span>
                    <span>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Direct Partner Telephony
                      </span>
                      <span className="font-title-md text-title-md text-primary transition-colors group-hover:text-secondary">
                        +1 (212) 847-0190
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="space-y-6 rounded-lg border border-primary/10 bg-surface-container-lowest p-8 shadow-sm">
                <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
                  Global Metropoles
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Flagship Practice Studios
                </h3>
                <div className="divide-y divide-outline-variant/30">
                  {offices.map((office) => (
                    <div key={office.city} className="pt-4 first:pt-0">
                      <div className="mb-1 flex items-baseline justify-between">
                        <h4 className="font-title-lg text-title-lg text-primary">
                          {office.city}
                        </h4>
                        <span className="font-label-sm text-label-sm text-secondary uppercase">
                          {office.atelier}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {office.address}
                      </p>
                      <p className="mt-1 font-mono text-label-sm text-outline">
                        {office.line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container p-8">
                <span className="mb-3 inline-block rounded bg-surface px-2.5 py-1 font-label-sm text-label-sm tracking-wider text-primary uppercase">
                  Executive Dossier
                </span>
                <h4 className="font-headline-sm text-headline-sm leading-snug text-primary">
                  2025 Hospitality &amp; Spa Operational Benchmarks
                </h4>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                  A 64-page quantitative study on staff retention, acoustic
                  dampening yields, and treatment room square-meter economics.
                </p>
                <a
                  className="inline-flex items-center gap-2 pt-6 font-label-md text-label-md text-secondary transition-colors duration-200 group-hover:translate-x-1 hover:text-primary"
                  href="#"
                >
                  <Icon name="download" className="text-[18px]" />
                  <span>Download Executive Briefing (PDF)</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-outline-variant/30 bg-surface-container-low/50 py-24">
          <div className={container}>
            <div className="mb-12 max-w-2xl">
              <span className="mb-2 block font-label-sm text-label-sm tracking-widest text-secondary uppercase">
                Protocol Transparency
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Advisory Protocols &amp; Engagement FAQ
              </h2>
            </div>
            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, index) => {
                const open = openFaq === index
                return (
                  <div
                    key={faq.title}
                    className="overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container-lowest"
                  >
                    <button
                      className="flex w-full items-center justify-between p-6 text-left"
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      <span className="font-title-lg text-title-lg text-primary">
                        {faq.title}
                      </span>
                      <Icon
                        name="expand_more"
                        className={`text-[24px] text-on-surface-variant transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {open ? (
                      <div className="px-6 pt-0 pb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                        {faq.body}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-outline-variant/20 bg-primary text-surface">
        <div
          className={`${container} flex flex-col items-center justify-between gap-space-lg py-space-xl md:flex-row`}
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <span className="font-headline-md text-headline-md tracking-wider text-surface uppercase">
              Aurelia &amp; Stone
            </span>
            <span className="hidden h-6 w-px bg-outline-variant/30 md:inline-block" />
            <p className="font-body-sm text-body-sm font-light text-surface-variant">
              © 2024 Aurelia &amp; Stone Hospitality &amp; Wellness Advisory. All
              rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              ['Architectural Audits', '/#expertise'],
              ['Spatial Acoustic Design', '/#expertise'],
              ['Spa Protocol Formulation', '/#expertise'],
              ['Client Dossiers', '/#case-studies'],
              ['Discretion & Privacy', '/#audit'],
            ].map(([label, href]) => (
              <Link
                key={label}
                className="font-label-sm text-label-sm tracking-widest text-surface-variant uppercase transition-colors duration-200 hover:text-surface"
                to={href}
              >
                {label}
              </Link>
            ))}
            <a
              className="border-b border-secondary pb-1 font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase"
              href="#request-audit"
            >
              Direct Inquiries
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
