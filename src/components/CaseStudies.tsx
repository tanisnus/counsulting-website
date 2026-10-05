import { Icon } from './Icon'
import { container } from './layout'

const diningImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBFl7A4gm0OBPG-tuXtSzi2uvtrDI5hl2bCfOsHGF8gbGE5gvXPE7GwOsLAdr0lfItBpMElcSfOZbDm5mAP6vXXplTS-ptrY6s8lB-pW8Byt4SaMYJ5f_yxBd69bXqaO3tSgfexW6NOpTOvAcP976GULrQp9TdGO1yAfQ6AjWHcCzUmp0udXduzmXZjBQlGYDfKPQ7etJUgboPxydsmZJcZynQfgY-_f9cV0MmqPv_KtD-DHMIYv3wsHA'

const onsenImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB1dcTAdFgdLUDeCPy_n1iJ33CewOH7wsrBhvwtZguH59hUZ4fl0BBIHn4Iktyd8J3uI_0gpWCuw8PppX9dJyKitTF8BbFkLwHFuGDvavbaeDUUNrv1YEgP8B5P1tm49ywCmPp_kINseH6jcd0FF2JRkpU1pD08jaaLxlXOA3_Jn61AT2H20xJap4JbJwcmQATNw1apBloIMMTltVOQgC3i5Kb57_0CYLhS_x3c1DfbBvCWYgb1FB62eQ'

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span
        className={`font-headline-md text-headline-md ${
          value.startsWith('+') && value.includes('%') ? 'text-secondary' : 'text-primary'
        }`}
      >
        {value}
      </span>
      <span className="mt-0.5 block font-label-sm text-label-sm text-on-surface-variant">
        {label}
      </span>
    </div>
  )
}

export function CaseStudies() {
  return (
    <section className="scroll-mt-24 bg-surface py-24" id="case-studies">
      <div id="methodology" className="scroll-mt-24" />
      <div className={container}>
        <div className="mb-16 flex flex-col justify-between border-b border-outline-variant/30 pb-6 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">
              Measurable Transformation
            </span>
            <h2 className="mt-2 font-headline-lg text-headline-lg text-primary">
              Client Dossiers &amp; Verified Impact
            </h2>
          </div>
          <div className="mt-4 flex items-center space-x-2 md:mt-0">
            <Icon name="verified" className="text-[20px] text-secondary" />
            <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
              Anonymized for Discretion
            </span>
          </div>
        </div>

        <article className="mb-16 grid grid-cols-1 items-center gap-8 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 md:p-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative h-[360px] overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                alt="Intimate Paris dining room with walnut tables, ivory linen, and candlelit stemware."
                src={diningImage}
              />
              <div className="absolute top-4 left-4 rounded bg-primary px-3 py-1 font-label-sm text-label-sm text-surface">
                2 Michelin Star Property
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:col-span-7 lg:pl-6">
            <div className="mb-3 flex items-center space-x-2 text-secondary">
              <Icon name="grade" className="text-[20px]" />
              <span className="font-label-sm text-label-sm tracking-widest uppercase">
                Paris 8th Arrondissement
              </span>
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md text-primary">
              The Relais Gastronomique Floor Re-Choreography
            </h3>
            <p className="mb-6 font-body-md text-body-md leading-relaxed font-light text-on-surface-variant">
              Facing plateaued check averages and strained sommelier operations
              during two seatings, Aurelia &amp; Stone overhauled the cellar
              presentation ritual and synchronized front-of-house micro-cues.
            </p>
            <div className="mb-6 grid grid-cols-3 gap-4 border-y border-outline-variant/20 py-4">
              <Metric value="+34%" label="Spend Per Cover" />
              <Metric value="-18 min" label="Table Lag Reduction" />
              <Metric value="100%" label="Sommelier Retention" />
            </div>
            <blockquote className="mb-4 font-headline-sm text-headline-sm font-normal text-primary italic">
              “Aurelia &amp; Stone preserved the poetry of our dining room while
              instilling an almost surgical rhythm behind the scenes. Our profit
              margin expanded without a single guest detecting anything but
              greater grace.”
            </blockquote>
            <cite className="block font-label-md text-label-md text-on-surface-variant not-italic">
              — Chef Propriétaire &amp; Managing Director, Relais &amp; Châteaux
              Flagship
            </cite>
          </div>
        </article>

        <article
          className="grid scroll-mt-24 grid-cols-1 items-center gap-8 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 md:p-12 lg:grid-cols-12"
          id="sanctuaries"
        >
          <div className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-7 lg:pr-6">
            <div className="mb-3 flex items-center space-x-2 text-secondary">
              <Icon name="spa" className="text-[20px]" />
              <span className="font-label-sm text-label-sm tracking-widest uppercase">
                Kyoto Mountain Sanctuary
              </span>
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md text-primary">
              Thermal Onsen &amp; Longevity Suite Optimization
            </h3>
            <p className="mb-6 font-body-md text-body-md leading-relaxed font-light text-on-surface-variant">
              A 14-suite alpine mineral retreat struggled with high treatment
              room vacancy during midweek hours and sub-optimal apothecary
              boutique sales.
            </p>
            <div className="mb-6 grid grid-cols-3 gap-4 border-y border-outline-variant/20 py-4">
              <Metric value="+42%" label="Retail Conversion" />
              <Metric value="88%" label="Midweek Occupancy" />
              <Metric value="+2.4 hrs" label="Avg Dwell Time" />
            </div>
            <blockquote className="mb-4 font-headline-sm text-headline-sm font-normal text-primary italic">
              “They didn’t just re-draft our spa treatment manual; they
              transformed the silence of our hallways into an asset that
              converted directly to our bottom line. An incomparable partner.”
            </blockquote>
            <cite className="block font-label-md text-label-md text-on-surface-variant not-italic">
              — Spa Director, Kyoto Zen Thermal Resort
            </cite>
          </div>
          <div className="relative order-1 lg:order-2 lg:col-span-5">
            <div className="relative h-[360px] overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                alt="Japanese onsen with cedar framing, river stones, and mist over mineral pools."
                src={onsenImage}
              />
              <div className="absolute top-4 right-4 rounded bg-primary px-3 py-1 font-label-sm text-label-sm text-surface">
                Forbes 5-Star Nominee
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
