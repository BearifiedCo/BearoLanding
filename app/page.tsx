import Hero from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <div className="w-screen h-fit flex flex-col items-center overflow-clip">
      <Hero/>
      <HowItWorks/>
    </div>
  )
}
