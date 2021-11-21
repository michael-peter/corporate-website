import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
  },
  videoBox: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  expertiseHeader: {
    fontWeight: "bold",
  },
  expertiseProgress: {
    background: theme.palette.primary.light,
    height: 10,
    borderRadius: 10,
  },
}))

export default function ExpertiseSection() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7} className={classes.expertiseContainer}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.videoBox}>
              <Image src="/background1.jpg" layout="fill" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.expertiseHeader}
              mb={3}
            >
              Our expertise is your gain
            </Typography>
            <Typography variant="subtitle2" mb={3}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium repudiandae unde ex, dicta nostrum quae fugiat ut sunt
              veniam. Quasi neque amet delectus ab, deserunt, enim aperiam
              suscipit repellat beatae doloremque asperiores tenetur, sequi
              quisquam sed. Optio suscipit officia dolor?
            </Typography>
            <Stack spacing={5}>
              <Box>
                <Stack direction="row" spacing={3} mb={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                  >
                    Customer satisfaction
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>90%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={90}
                  className={classes.expertiseProgress}
                />
              </Box>
              <Box>
                <Stack direction="row" spacing={3} mb={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                  >
                    Performance
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>80%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  className={classes.expertiseProgress}
                />
              </Box>
              <Box>
                <Stack direction="row" spacing={3} mb={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                  >
                    Experience
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>70%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  className={classes.expertiseProgress}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
