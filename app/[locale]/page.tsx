import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/home/hero'
import { SpecShowcase } from '@/components/home/spec-showcase'
import { Flow } from '@/components/home/flow'
import { Closing } from '@/components/home/closing'

type Props = { params: Promise<{ locale: string }> }

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <SpecShowcase />
      <Flow />
      <Closing />
    </>
  )
}
