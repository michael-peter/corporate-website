import { Container, Grid, useMediaQuery } from "@mui/material"
import { makeStyles, useTheme } from "@mui/styles"
import AboutContent from "./AboutContent"
import MiscHero from "./MiscHero"
import SideBar from "./SideBar"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "0 0 60px",
  },
}))

export default function AboutLayout() {
  const classes = useStyles()
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container columnSpacing={7}>
          <Grid item xs={12} sm={12} md={9}>
            <MiscHero />
            <AboutContent />
          </Grid>
          {desktop && (
            <Grid item md={3}>
              {/* Side bar here */}
              <SideBar />
            </Grid>
          )}
        </Grid>
      </Container>
    </section>
  )
}
