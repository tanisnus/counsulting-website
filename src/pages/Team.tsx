import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { container } from '../components/layout'

const partners = [
  {
    image: '/team/julian.jpg',
    given: 'Julian',
    family: 'Abebe',
    role: 'Principal',
    office: 'Thermal & Spa Practice',
    place: 'New York Atelier',
  },
  {
    image: '/team/clara.jpg',
    given: 'Clara',
    family: 'Moreau',
    role: 'Managing Partner',
    office: 'Culinary Venues',
    place: 'Paris Atelier',
  },
  {
    image: '/team/mei.jpg',
    given: 'Mei',
    family: 'Calder',
    role: 'Principal',
    office: 'Recovery Sanctuaries',
    place: 'Tokyo Salon',
  },
]

function PartnerCard({
  partner,
}: {
  partner: (typeof partners)[number]
}) {
  const [open, setOpen] = useState(false)

  return (
    <article
      tabIndex={0}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[1.25rem] shadow-[0_18px_40px_-18px_rgba(22,30,35,0.45)] outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      onClick={() => setOpen((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setOpen((value) => !value)
        }
      }}
    >
      <img
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        src={partner.image}
        alt=""
      />
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary from-25% via-primary/80 to-transparent px-5 pb-6 text-center text-surface transition-[padding] duration-300 ${
          open ? 'pt-36' : 'pt-20'
        } group-hover:pt-36 group-focus-visible:pt-36`}
      >
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          } group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100`}
        >
          <div className="overflow-hidden">
            <p className="font-body-sm text-body-sm text-surface">{partner.role}</p>
            <p className="mt-1 font-body-sm text-body-sm text-surface/80">{partner.office}</p>
            <p className="mt-1 mb-3 font-body-sm text-body-sm text-surface/80">{partner.place}</p>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-surface/90">{partner.given}</p>
        <p className="font-sans text-[22px] font-semibold tracking-[0.14em] text-surface uppercase">
          {partner.family}
        </p>
      </div>
    </article>
  )
}

export function Team() {
  useEffect(() => {
    document.title = 'Consulting Firm — The Team'
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header />
      <main className={`${container} py-20 md:py-24`}>
        <div className="mb-14 text-center">
          <h1 className="font-sans text-[28px] font-semibold tracking-[0.22em] text-primary uppercase md:text-[34px]">
            Meet the Team
          </h1>
          <p className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 font-label-md text-label-md tracking-[0.16em] text-surface uppercase">
            Senior Partners
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner.family} partner={partner} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
