import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import { HomePagePayload } from 'types'

export interface LandingSectionProps {
  title: string
  landingSection: HomePagePayload['landingSection']
}

export function LandingSection({ title, landingSection }: LandingSectionProps) {
  const { landingImage, subtitle, aboutMeButton } = landingSection

  return (
    <section className="relative select-none overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden rounded bg-white md:aspect-video">
        <ImageBox
          image={landingImage}
          alt={`Landing image for ${title}`}
          cover
          classesWrapper="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded bg-black opacity-50" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center p-10 text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-5xl md:text-7xl font-bold">
            LOSE WEIGHT,
            <span className="block">GAIN HEALTH</span>
          </h1>
          <p className="mb-2 text-xl md:text-2xl font-medium">No Diets, No Challenges—Just Lasting Change</p>
          <p className="mb-8 text-lg md:text-xl font-light">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://halaxy.com/practice/location/88796/reception"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
            >
              Book Your First Appointment
            </a>
            <Link
              href="/about"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-green-600 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
            >
              {aboutMeButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
