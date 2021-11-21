import { Breadcrumbs, Container, Grid, Link, Typography } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useRouter } from "next/router"

export default function BreadcrumbsSection() {
  const router = useRouter()

  return (
    <section>
      <Container fluid="true">
        <Breadcrumbs my={2}>
          <Link href="/" underline="hover" color="inherit" variant="subtitle2">
            Home
          </Link>
          <Typography color="textPrimary" variant="subtitle2">
            About us
          </Typography>
        </Breadcrumbs>
      </Container>
    </section>
  )
}
