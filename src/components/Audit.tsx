import { Link } from 'react-router-dom'
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

export function Audit() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-primary py-24 text-surface" id="audit">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className={`${container} relative z-10`}>
        <span className="mb-3 block font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase">
          Direct Engagement
        </span>
        <h2 className="mb-6 max-w-xl font-display-lg text-display-lg-mobile leading-tight text-surface md:text-display-lg">
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
        <Link
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-surface px-8 py-4 font-label-lg text-label-lg text-primary transition-colors duration-300 hover:bg-secondary hover:text-surface"
          to="/contact"
        >
          Begin the confidential intake
          <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>
    </section>
  )
}
