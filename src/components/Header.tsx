import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { container } from './layout'

const links = [
  { href: '/#expertise', label: 'Expertise' },
  { href: '/team', label: 'Team' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Audit' },
]

const consultClass =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-3 py-2 font-label-md text-label-md text-surface shadow-sm transition-colors duration-300 hover:bg-secondary md:px-6 md:py-3'

export function Header() {
  const { pathname } = useLocation()
  const onContact = pathname === '/contact'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  function linkClass(current: boolean, mobile = false) {
    if (mobile) {
      return current
        ? 'border-l-2 border-secondary px-3 py-3 font-label-md text-label-md font-semibold text-primary'
        : 'px-3 py-3 font-label-md text-label-md text-on-surface-variant'
    }

    return current
      ? 'border-b border-secondary pb-1 font-label-md text-label-md font-semibold text-primary'
      : 'font-label-md text-label-md text-on-surface-variant transition-colors duration-200 hover:text-primary'
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/95 shadow-[0_12px_32px_-8px_rgba(43,51,56,0.05)] backdrop-blur-md">
      <div className={container}>
        <div className="flex h-16 items-center justify-between gap-3 md:h-20">
          <Link
            className="whitespace-nowrap font-headline-md text-[18px] leading-none tracking-wide text-primary uppercase sm:text-[22px] sm:tracking-wider md:text-headline-md"
            to="/"
          >
            Consulting Firm
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {links.map((link) => {
              const current =
                link.href === pathname ||
                (pathname === '/' && link.href === '/#expertise')
              return (
                <Link key={link.href} className={linkClass(current)} to={link.href}>
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            {onContact ? (
              <a
                className={`${consultClass} tracking-wider uppercase`}
                href="#request-audit"
              >
                <span className="hidden md:inline-flex">
                  <Icon name="calendar_today" className="text-[16px]" />
                </span>
                <span className="md:hidden">Consult</span>
                <span className="hidden md:inline">Request Consultation</span>
              </a>
            ) : (
              <Link className={consultClass} to="/contact">
                <span className="md:hidden">Consult</span>
                <span className="hidden md:inline">Request Consultation</span>
              </Link>
            )}
            <button
              aria-controls="mobile-nav"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
              type="button"
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
            </button>
          </div>
        </div>

        {open ? (
          <nav
            className="flex flex-col border-t border-outline-variant/30 py-2 md:hidden"
            id="mobile-nav"
          >
            {links.map((link) => {
              const current =
                link.href === pathname ||
                (pathname === '/' && link.href === '/#expertise')
              return (
                <Link
                  key={link.href}
                  className={linkClass(current, true)}
                  to={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
