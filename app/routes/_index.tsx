import FeaturedProducts from '~/sections/featuredProducts'
import HomeHero from '~/sections/homeHero'
import AboutMe from '~/sections/aboutMe'
import ContactMe from '~/sections/contactMe'
import type { Route } from '../+types/root'
import OurStory from '~/sections/ourStory'


export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'RANGISH' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <div className='text-gray-900 dark:text-white scroll-smooth'>

      <HomeHero />

      <FeaturedProducts />

      <OurStory />

      <AboutMe />

      <ContactMe />

    </div>
  )
}
