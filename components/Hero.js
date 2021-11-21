import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import CtaSection from "./CtaSection"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "80vh",
    padding: "60px auto",
    display: "flex",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    background: "url(/background2.jpg) no-repeat center",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "auto 100%",
    },
    // animation: "heroSlide 10s ease-in-out infinite",
  },
  header: {
    fontWeight: 700,
  },
  headerUnderline: {
    width: 100,
    height: 5,
    background: theme.palette.secondary.main,
    borderRadius: 5,
    margin: "0 5px 10px",
  },
  subheader: {
    fontWeight: 500,
  },
  ctaButton: {
    color: "white",
    fontWeight: "bold",
  },
}))

export default function Hero() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <Container>
          <Grid container spacing={2} fluid="true">
            <Grid item xs={0} md={6}></Grid>
            <Grid item xs={12} md={6} className={classes.hereText}>
              <Typography variant="h2" className={classes.header}>
                Headline Copy Goes Here!
              </Typography>
              <Box className={classes.headerUnderline} />
              <Typography variant="body1" className={classes.subheader}>
                Subheader copy stays here. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Temporibus, facilis? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Debitis, neque.
              </Typography>
              <br />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.ctaButton}
                >
                  Services
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.ctaButton}
                >
                  About us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <CtaSection />
    </>
  )
}
