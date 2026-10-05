import { Icon } from './Icon'
import { container } from './layout'

const pillars = [
  {
    icon: 'restaurant',
    eyebrow: 'Culinary Venues & Flagships',
    title: 'Fine Dining & Chef Concepts',
    body: 'Orchestrating high-pressure culinary ecosystems to deliver transcendent dining rituals without sacrificing operational stamina or wine margins.',
    link: 'Fine Dining Audit Specifications',
    features: [
      {
        title: 'Menu Engineering',
        body: 'Cognitive eye-path analysis, prime cost mapping, and luxury tasting cadence.',
      },
      {
        title: 'Kitchen Workflow Optimization',
        body: 'Brigade ergonomics, line pacing choreography, and pass-to-table transit reduction.',
      },
      {
        title: 'Sommelier & Cellar Margins',
        body: 'Rare vintage holding strategies and high-margin pairing flight recalibration.',
      },
      {
        title: 'Floor Flow Choreography',
        body: 'Silent captain signals, gueridon service staging, and discreet table turns.',
      },
    ],
  },
  {
    icon: 'water_lux',
    eyebrow: 'Thermal Wellness & Spas',
    title: 'Day Spas & Thermal Suites',
    body: 'Designing immersive hydrotherapy circuits and sanctuary rituals that maximize wellness yields while reducing treatment burnout and turnover.',
    link: 'Thermal Spa Blueprint Advisory',
    features: [
      {
        title: 'Hydrotherapy Programming',
        body: 'Hot-cold-rest circuit timing, contrast bathing protocols, and guest velocity control.',
      },
      {
        title: 'Treatment Protocol Curation',
        body: 'Signature botanical journeys, pre-treatment sensory tea service, and ritual flow.',
      },
      {
        title: 'Therapist Turnover Reduction',
        body: 'Ergonomic shift pacing, physical recovery intervals, and retention incentives.',
      },
      {
        title: 'Retail Revenue Elevation',
        body: 'Post-treatment consultation apothecary scripts and take-home bespoke formulas.',
      },
    ],
  },
  {
    icon: 'spa',
    eyebrow: 'Bespoke Bodywork & Longevity',
    title: 'Massage & Recovery Sanctuaries',
    body: 'Transforming boutique bodywork lounges into quiet recurring revenue machines through precise membership mechanics and acoustic mastery.',
    link: 'Sanctuary Yield Diagnostics',
    features: [
      {
        title: 'Spatial Acoustic & Sensory Design',
        body: 'Decibel isolation, sound masking frequencies, circadian lighting, and olfactive scenting.',
      },
      {
        title: 'Membership Recurring Revenue',
        body: 'Tiered priority access, corporate executive wellness syndicates, and low-churn tiers.',
      },
      {
        title: 'Booking Yield Management',
        body: 'Dynamic prime-hour rates, room occupancy balancing, and add-on protocol up-levels.',
      },
      {
        title: 'Intake & Departure Touchpoints',
        body: 'Silent check-in transitions, private footwear exchange, and restorative grounding teas.',
      },
    ],
  },
]

export function Pillars() {
  return (
    <section className="scroll-mt-24 bg-surface py-24" id="expertise">
      <div className={container}>
        <div className="mb-16 flex flex-col justify-between border-b border-outline-variant/30 pb-6 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
              Domain Specializations
            </span>
            <h2 className="mt-2 font-headline-lg text-headline-lg text-primary">
              Three Pillars of High-Sensory Hospitality
            </h2>
          </div>
          <p className="mt-4 max-w-md font-body-md text-body-md font-light text-on-surface-variant md:mt-0">
            We operate at the nexus of aesthetic mastery and mathematical margin
            control, elevating guest sentiment while cementing profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col justify-between rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:border-outline"
            >
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-surface">
                  <Icon name={pillar.icon} className="text-[24px]" />
                </div>
                <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
                  {pillar.eyebrow}
                </span>
                <h3 className="mt-2 mb-4 font-headline-md text-headline-md text-primary">
                  {pillar.title}
                </h3>
                <p className="mb-8 font-body-md text-body-md font-light text-on-surface-variant">
                  {pillar.body}
                </p>
                <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                  {pillar.features.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-3">
                      <Icon
                        name="check_circle"
                        className="mt-0.5 text-[18px] text-secondary"
                      />
                      <div>
                        <h4 className="font-title-md text-title-md text-primary">
                          {feature.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {feature.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 border-t border-outline-variant/20 pt-6">
                <a
                  className="inline-flex items-center font-label-md text-label-md text-primary transition-all duration-200 group-hover:translate-x-1 hover:text-secondary"
                  href="#audit"
                >
                  {pillar.link}
                  <Icon name="arrow_forward" className="ml-1 text-[16px]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
