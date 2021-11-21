import {
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
  Link,
  IconButton,
  TextField,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TimerIcon from "@mui/icons-material/Timer"
import RoomIcon from "@mui/icons-material/Room"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import PrintIcon from "@mui/icons-material/Print"
import EmailIcon from "@mui/icons-material/Email"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0 20px",
    background: "black",
    color: "white",
  },
  twitterIcon: {
    color: theme.palette.primary.light,
    fontSize: "1.2em",
  },
  textField: {
    fontSize: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" mb={1}>
              Latest Tweets
            </Typography>
            <Divider sx={{ background: "gray" }} />
            <Stack spacing={2} mt={3}>
              <Stack spacing={0.8} direction="row" mb={1}>
                <Box>
                  <TwitterIcon className={classes.twitterIcon} />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus dolore labore impedit?...&nbsp;
                    <Link href="https://t.co" sx={{ color: "white" }}>
                      https://t.co
                    </Link>
                  </Typography>
                  <Typography variant="caption">2 days ago</Typography>
                </Stack>
              </Stack>
              <Stack spacing={1} direction="row">
                <Box>
                  <TwitterIcon className={classes.twitterIcon} />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus dolore labore impedit?...&nbsp;
                    <Link href="https://t.co" sx={{ color: "white" }}>
                      https://t.co
                    </Link>
                  </Typography>
                  <Typography variant="caption">2 days ago</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" mb={1}>
              Recent News
            </Typography>
            <Divider sx={{ background: "gray" }} />
            <Box mt={3}>
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Narrow Your Focus to Prevent Overanalysis
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ color: "gray" }}
                >
                  <TimerIcon color="secondary" sx={{ fontSize: "1rem" }} />
                  <Typography variant="subtitle2">August 31, 2021</Typography>
                </Stack>
              </Stack>

              <Stack spacing={1} mt={2}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Stick with Your Concept but Do Your Homework
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ color: "gray" }}
                >
                  <TimerIcon color="secondary" sx={{ fontSize: "1rem" }} />
                  <Typography variant="subtitle2">August 19, 2021</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" mb={1}>
              Get in Touch
            </Typography>
            <Divider sx={{ background: "gray" }} />
            <Stack spacing={2} mt={3}>
              <Stack spacing={0.8} direction="row" mb={1}>
                <RoomIcon className={classes.twitterIcon} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  1010 Avenue of the Moon, New York, NY 10018 US
                </Typography>
              </Stack>
              <Stack spacing={0.8} direction="row" mb={1}>
                <PhoneAndroidIcon className={classes.twitterIcon} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Call: 234-09-461-4000
                </Typography>
              </Stack>
              <Stack spacing={0.8} direction="row" mb={1}>
                <PrintIcon className={classes.twitterIcon} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Fax: 78262 202902 2--20
                </Typography>
              </Stack>
              <Stack spacing={0.8} direction="row" mb={1}>
                <EmailIcon className={classes.twitterIcon} />
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Mail: info@smileconsulting.com.ng
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" mb={1}>
              Social Network
            </Typography>
            <Divider sx={{ background: "gray" }} />
            <Box mt={3}>
              <Stack direction="row" spacing={1}>
                <IconButton sx={{ color: "white" }}>
                  <FacebookIcon color="primary" />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <TwitterIcon color="primary" />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <InstagramIcon color="primary" />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon color="primary" />
                </IconButton>
              </Stack>
              <Box mt={2}>
                <Typography variant="button">
                  Sign in for Email Alerts
                </Typography>
                <Stack direction="row" my={2}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email"
                    color="secondary"
                    size="small"
                    inputProps={{ classes: { input: classes.textField } }}
                    sx={{ background: "white" }}
                  />
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      textAlign: "center",
                      background: (theme) => theme.palette.secondary.main,
                      padding: 1,
                    }}
                  >
                    <EmailIcon sx={{ color: "white" }} />
                  </Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Get latest updates and offers
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="body1" align="center" sx={{ color: "gray" }}>
              &copy;{new Date().getFullYear()}&nbsp;Smile
              Consulting&nbsp;&bull;&nbsp;All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
