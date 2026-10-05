import { container } from './layout'

const metrics = [
  {
    value: '180+',
    label: 'Venues Transformed',
    detail: 'Michelin & Five-Star flagships',
  },
  {
    value: '$42M',
    label: 'Operational Value',
    detail: 'Created across portfolio partners',
  },
  {
    value: '98%',
    label: 'Guest Retention Surge',
    detail: 'Post-choreography audit',
  },
  {
    value: '100%',
    label: 'Discretion & Trust',
    detail: 'Strict NDA bespoke advisory',
  },
]

export function Metrics() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-10">
      <div className={container}>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col border-l border-outline-variant/40 pl-6"
            >
              <span className="font-headline-lg text-headline-lg text-primary">
                {metric.value}
              </span>
              <span className="mt-1 font-label-md text-label-md text-secondary">
                {metric.label}
              </span>
              <span className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
