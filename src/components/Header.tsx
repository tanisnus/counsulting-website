import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { container } from './layout'

const links = [
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#sanctuaries', label: 'Sanctuaries' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#methodology', label: 'Advisory' },
  { href: '/contact', label: 'Audit' },
]

export function Header() {
  const { pathname } = useLocation()
  const onContact = pathname === '/contact'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/95 shadow-[0_12px_32px_-8px_rgba(43,51,56,0.05)] backdrop-blur-md">
      <div className={`${container} flex h-20 items-center justify-between`}>
        <Link
          className="font-headline-md text-headline-md tracking-wider text-primary uppercase"
          to="/"
        >
          Aurelia &amp; Stone
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {links.map((link) => {
            const current = onContact
              ? link.href === '/contact'
              : link.href === '/#expertise'
            return (
              <Link
                key={link.href}
                className={
                  current
                    ? 'border-b border-secondary pb-1 font-label-md text-label-md font-semibold text-primary'
                    : 'font-label-md text-label-md text-on-surface-variant transition-colors duration-200 hover:text-primary'
                }
                to={link.href}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className={`flex items-center ${onContact ? 'space-x-6' : 'space-x-5'}`}>
          {onContact ? (
            <a
              className="hidden font-label-md text-label-md text-on-surface-variant transition-colors duration-200 hover:text-secondary lg:block"
              href="#portal"
            >
              Client Portal
            </a>
          ) : (
            <Link
              className="hidden items-center space-x-2 font-label-md text-label-md text-on-surface-variant transition-colors duration-200 hover:text-secondary lg:flex"
              to="/#audit"
            >
              <Icon name="calendar_today" className="text-[18px]" />
              <span>Client Portal</span>
            </Link>
          )}
          {onContact ? (
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-md text-label-md tracking-wider text-surface uppercase shadow-sm transition-colors duration-300 hover:bg-secondary"
              href="#request-audit"
            >
              <Icon name="calendar_today" className="text-[16px]" />
              <span>Request Consultation</span>
            </a>
          ) : (
            <Link
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-label-md text-label-md text-surface shadow-sm transition-colors duration-300 hover:bg-secondary"
              to="/contact"
            >
              Request Consultation
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
