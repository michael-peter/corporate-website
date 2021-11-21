import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ProfileSection from "../components/ProfileSection"
import IndustriesSection from "../components/IndustriesSection"
import ExpertiseSection from "../components/ExpertiseSection"
import OrangeSection from "../components/OrangeSection"
import BlueSection from "../components/BlueSection"
import NewsEventsSection from "../components/NewEventsSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ProfileSection />
      <IndustriesSection />
      <ExpertiseSection />
      <OrangeSection />
      <BlueSection />
      <NewsEventsSection />
      <Footer />
    </Layout>
  )
}
