import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { LoopFlow } from '@/components/home/loop-flow'
import { Personas } from '@/components/home/personas'
import { Stats } from '@/components/home/stats'
import { BigCTA } from '@/components/home/big-cta'

type Props = { params: Promise<{ locale: string }> }

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <Marquee />
      <LoopFlow />
      <Personas />
      <Stats />
      <BigCTA />
    </>
  )
}
