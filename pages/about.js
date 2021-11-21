import { Typography } from "@mui/material"
import AboutLayout from "../components/AboutLayout"
import BreadcrumbsSection from "../components/BreadcrumbsSection"
import CtaSection from "../components/CtaSection"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

export default function AboutPage() {
  return (
    <Layout>
      <BreadcrumbsSection />
      <AboutLayout />
      <CtaSection />
      <Footer />
    </Layout>
  )
}
