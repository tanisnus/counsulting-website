import { Link } from 'react-router-dom'
import salonImage from '../assets/salon-image.jpg'
import { container } from './layout'

const cities = ['NYC', 'PAR', 'TYO']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className={container}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-6 inline-flex w-fit items-center space-x-2 rounded-lg border border-outline-variant/30 bg-surface-container px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
                Global Advisory Practice
              </span>
            </div>

            <h1 className="mb-6 font-display-lg text-display-lg leading-[1.12] text-primary md:text-[54px] lg:text-display-lg">
              Elevating the Senses. <br className="hidden sm:inline" />
              <span className="font-normal text-on-surface italic">
                Scaling Hospitality &amp; Sanctuary
              </span>{' '}
              Operations.
            </h1>

            <p className="mb-10 max-w-xl font-body-lg text-body-lg leading-relaxed font-light text-on-surface-variant">
              Bespoke management architecture, operational choreography, and
              sensorial yield formulation for Michelin-starred culinary venues,
              European thermal bathhouses, and private recovery sanctuaries.
            </p>

            <div className="flex flex-col items-stretch space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-primary-container px-8 py-4 text-center font-label-lg text-label-lg text-surface shadow-sm transition-all duration-300 hover:bg-secondary"
                to="/contact"
              >
                Schedule an Advisory Audit
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-8 py-4 text-center font-label-lg text-label-lg text-primary transition-all duration-300 hover:bg-surface-container"
                href="#case-studies"
              >
                Explore Case Studies
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6 border-t border-outline-variant/30 pt-8 text-on-surface-variant">
              <div className="flex -space-x-2 overflow-hidden">
                {cities.map((city, index) => (
                  <div
                    key={city}
                    className={`flex h-8 w-8 items-center justify-center rounded-full font-label-sm text-label-sm ring-2 ring-background ${
                      index === 0
                        ? 'bg-surface-container'
                        : index === 1
                          ? 'bg-surface-container-high'
                          : 'bg-surface-variant'
                    }`}
                  >
                    {city}
                  </div>
                ))}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Advising 34 Forbes Five-Star &amp; Relais &amp; Châteaux partner
                properties internationally.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative z-10 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-3 shadow-[0_12px_32px_-8px_rgba(43,51,56,0.07)]">
              <div className="relative h-[480px] w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover"
                  alt="Hair salon with black styling chairs, round mirrors, and product shelves."
                  src={salonImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-surface">
                  <span className="mb-1 block font-label-sm text-label-sm tracking-widest text-secondary-fixed uppercase">
                    Sanctuary Spatial Dossier
                  </span>
                  <p className="font-headline-sm text-headline-sm italic">
                    The Thermal Crypt &amp; Stone Baths, Engadin
                  </p>
                  <p className="mt-1 font-body-sm text-body-sm text-surface-variant">
                    Operational redesign &amp; sensory acoustic curation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
