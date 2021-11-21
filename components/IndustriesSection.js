import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import EqualizerIcon from "@mui/icons-material/Equalizer"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import LightModeIcon from "@mui/icons-material/LightMode"
import PublicIcon from "@mui/icons-material/Public"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
    background: "whitesmoke",
  },
  typeUnderline: {
    width: 60,
    height: 4,
    background: theme.palette.secondary.main,
    borderRadius: 5,
  },
  industriesIcon: {
    color: theme.palette.primary.light,
    fontSize: "3em",
  },
  industriesHeader: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  industriesText: {
    color: "gray",
  },
}))

export default function IndustriesSection() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7}>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold" }}
              mb={2}
            >
              Industries
            </Typography>
            <Box className={classes.typeUnderline}></Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <FlightTakeoffIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Travel and Avaition Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <BusinessCenterIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Business Services Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <EqualizerIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Consumer Products Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <TrackChangesIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Financial Services Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <LightModeIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Energy and Environment Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3} direction="row">
              <Box>
                <PublicIcon className={classes.industriesIcon} />
              </Box>
              <Stack sapcing={3}>
                <Typography
                  variant="body1"
                  className={classes.industriesHeader}
                  mb={2}
                >
                  Surface Transport &amp; Logistics Consulting
                </Typography>
                <Typography variant="body2" className={classes.industriesText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus dolore labore impedit eos error rem laboriosam?
                  Ducimus debitis eius quisquam?
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
