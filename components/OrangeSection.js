import { Container, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
    background: theme.palette.secondary.main,
  },
}))

export default function OrangeSection() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              321
            </Typography>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              completed cases
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8em" }}>
              with applied services
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              10
            </Typography>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              years of experience
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8em" }}>
              on number of industries
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              25
            </Typography>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              awards winning
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8em" }}>
              on various competitions
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3} sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              280
            </Typography>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              satisfied customers
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8em" }}>
              from all around the world
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
