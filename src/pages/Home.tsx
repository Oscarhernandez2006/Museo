import Hero from '../components/Hero'
import QuickAccess from '../components/QuickAccess'
import Rooms from '../components/Rooms'
import EducationalSection from '../components/EducationalSection'
import CommunitySection from '../components/CommunitySection'

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickAccess />
      <Rooms />
      <EducationalSection />
      <CommunitySection />
    </main>
  )
}
