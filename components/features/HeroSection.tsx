import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Send, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#00D632] via-[#00D632]/95 to-white px-6 py-20 sm:py-28 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/30">
          <span className="mr-2">💸</span>
          Next-Generation Payment Infrastructure
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Send Money.
          <br />
          <span className="text-white/90">Get Paid.</span>
          <br />
          <span className="text-white/80 text-4xl sm:text-5xl lg:text-6xl font-semibold">That's it.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto font-light">
          The payment app that bridges traditional finance with crypto. 
          <br className="hidden sm:block" />
          Seamless transactions for everyday life.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-white text-[#00D632] hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl w-full sm:w-auto"
              icon={<Send className="h-5 w-5" />}
            >
              Send Money Now
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 w-full sm:w-auto"
            icon={<Download className="h-5 w-5" />}
          >
            Download App
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <span className="text-sm font-medium">Instant Transfers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <span className="text-sm font-medium">Zero Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <span className="text-sm font-medium">Bank-Level Security</span>
          </div>
        </div>
      </div>
    </section>
  )
}

