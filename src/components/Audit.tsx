import { useState, type FormEvent } from 'react'
import { Icon } from './Icon'
import { container } from './layout'

const assurances = [
  {
    icon: 'lock',
    text: 'Strict Non-Disclosure Agreement issued prior to discovery.',
  },
  {
    icon: 'schedule',
    text: 'Direct partner review within 24 business hours.',
  },
  {
    icon: 'travel_explore',
    text: 'On-site audit availability across the Americas, Europe & Asia.',
  },
]

const fieldClass =
  'w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 font-body-md text-body-md transition-all focus:border-primary focus:ring-1 focus:ring-secondary focus:outline-none'

export function Audit() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-primary py-24 text-surface" id="audit">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className={`${container} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-3 block font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase">
              Direct Engagement
            </span>
            <h2 className="mb-6 font-display-lg text-display-lg-mobile leading-tight text-surface md:text-display-lg">
              Request an Operational Diagnostic.
            </h2>
            <p className="mb-8 max-w-lg font-body-lg text-body-lg font-light text-surface-variant">
              We accept a maximum of four advisory engagements per quarter to
              ensure uncompromised partner immersion. Initiate an initial
              confidential assessment with our senior partners.
            </p>
            <div className="space-y-4">
              {assurances.map((item) => (
                <div key={item.icon} className="flex items-center space-x-3">
                  <Icon name={item.icon} className="text-[20px] text-secondary-fixed" />
                  <span className="font-body-sm text-body-sm text-surface-variant">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-8 text-on-surface shadow-2xl sm:p-10">
              <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                Confidential Intake
              </h3>
              <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant">
                Please specify your venue profile to direct your inquiry to the
                relevant practice lead.
              </p>

              {submitted ? (
                <p className="font-body-md text-body-md text-primary" role="status">
                  Inquiry received. A senior partner will initiate contact within
                  24 hours under complete confidentiality.
                </p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-1 block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                        htmlFor="full-name"
                      >
                        Your Full Name
                      </label>
                      <input
                        id="full-name"
                        name="fullName"
                        className={fieldClass}
                        placeholder="Elena Vance"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                        htmlFor="email"
                      >
                        Direct Business Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        className={fieldClass}
                        placeholder="vance@sanctuaryresort.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-1 block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                        htmlFor="venue"
                      >
                        Venue / Entity Name
                      </label>
                      <input
                        id="venue"
                        name="venue"
                        className={fieldClass}
                        placeholder="The Cliffside Bathhouse"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-1 block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                        htmlFor="focus"
                      >
                        Primary Practice Focus
                      </label>
                      <select id="focus" name="focus" className={fieldClass} defaultValue="Fine Dining & Chef Concept">
                        <option>Fine Dining &amp; Chef Concept</option>
                        <option>Thermal Spa &amp; Hydrotherapy</option>
                        <option>Massage Sanctuary &amp; Recovery</option>
                        <option>Integrated Luxury Hotel &amp; Resort</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-1 block font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase"
                      htmlFor="objective"
                    >
                      Operational Objective or Challenge
                    </label>
                    <textarea
                      id="objective"
                      name="objective"
                      className={`${fieldClass} resize-none`}
                      placeholder="Brief outline of target margins, seating velocity, or sanctuary service redesign goals..."
                      rows={3}
                    />
                  </div>
                  <button
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-primary py-4 font-label-lg text-label-lg text-surface shadow-sm transition-colors duration-300 hover:bg-secondary"
                    type="submit"
                  >
                    <span>Submit Diagnostic Dossier</span>
                    <Icon name="lock" className="text-[18px]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
