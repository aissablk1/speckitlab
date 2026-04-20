import { Hero } from '@/components/home/hero'
import { SpecShowcase } from '@/components/home/spec-showcase'
import { Flow } from '@/components/home/flow'
import { Closing } from '@/components/home/closing'

export default function Home() {
  return (
    <>
      <Hero />
      <SpecShowcase />
      <Flow />
      <Closing />
    </>
  )
}
