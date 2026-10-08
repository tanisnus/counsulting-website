import { useEffect } from 'react'
import { Audit } from '../components/Audit'
import { CaseStudies } from '../components/CaseStudies'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Metrics } from '../components/Metrics'
import { Pillars } from '../components/Pillars'

export function Home() {
  useEffect(() => {
    document.title = 'Consulting Firm — Hospitality & Wellness Advisory'
  }, [])

  return (
    <div
      id="top"
      className="min-h-screen bg-background font-sans text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed"
    >
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Pillars />
        <CaseStudies />
        <Audit />
      </main>
      <Footer />
    </div>
  )
}
