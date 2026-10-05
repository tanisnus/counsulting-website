import { Icon } from './Icon'
import { container } from './layout'

const columns = [
  {
    title: 'Advisory Services',
    links: [
      'Architectural Audits',
      'Spatial Acoustic Design',
      'Spa Protocol Formulation',
      'Cellar Yield Optimizations',
    ],
  },
  {
    title: 'Practices & Dossiers',
    links: [
      'Client Dossiers',
      'Discretion & Privacy',
      'Direct Inquiries',
      'Partner Fellowship',
    ],
  },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-primary text-surface">
      <div className={`${container} pt-16 pb-12`}>
        <div className="grid grid-cols-1 gap-10 border-b border-outline-variant/20 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              className="mb-4 inline-block font-headline-md text-headline-md tracking-wider text-surface uppercase"
              href="#top"
            >
              Consulting Firm
            </a>
            <p className="mb-6 max-w-sm font-body-sm text-body-sm font-light text-surface-variant">
              Bespoke management advisory and sensory architectural design for
              premier gastronomy flagships, luxury day spas, and modern holistic
              sanctuaries globally.
            </p>
            <div className="flex items-center space-x-6 font-label-sm text-label-sm tracking-wider text-surface-variant uppercase">
              <span>New York</span>
              <span>•</span>
              <span>Paris</span>
              <span>•</span>
              <span>Tokyo</span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <span className="mb-4 block font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase">
                {column.title}
              </span>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      className="font-body-sm text-body-sm text-surface-variant transition-colors duration-200 hover:text-surface"
                      href="#audit"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="mb-4 block font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase">
              Private Monograph
            </span>
            <p className="mb-4 font-body-sm text-body-sm font-light text-surface-variant">
              Receive our quarterly white paper on high-sensory hospitality yield.
            </p>
            <form className="flex items-center" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="monograph-email">
                Email for the private monograph
              </label>
              <input
                id="monograph-email"
                className="w-full rounded-l-lg border border-outline-variant/30 bg-primary-container px-3 py-2 font-body-sm text-body-sm text-surface placeholder:text-outline focus:border-secondary focus:outline-none"
                placeholder="director@property.com"
                type="email"
              />
              <button
                className="rounded-r-lg bg-secondary px-3 py-2 text-surface transition-colors hover:bg-secondary-container"
                type="submit"
                aria-label="Subscribe"
              >
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-lg pt-8 text-surface-variant md:flex-row">
          <p className="font-body-sm text-body-sm">
            © 2024 Consulting Firm Hospitality &amp; Wellness Advisory. All
            rights reserved.
          </p>
          <div className="flex items-center space-x-6 font-body-sm text-body-sm">
            <a className="transition-colors hover:text-surface" href="#audit">
              Confidentiality Protocol
            </a>
            <a className="transition-colors hover:text-surface" href="#audit">
              Terms of Advisory
            </a>
            <a className="transition-colors hover:text-surface" href="#audit">
              Secure Vault
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
