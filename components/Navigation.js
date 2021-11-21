import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Link from "@mui/material/Link"
import Image from "next/image"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import { useRouter } from "next/dist/client/router"
import {
  AboutPop,
  ServicesPop,
  NewsPop,
  EventsPop,
  PortfolioPop,
  ContactsPop,
} from "../components/MenuPop"
import { useMediaQuery } from "@mui/material"
import MobileNav from "./MobileNav"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
  },
  navLinks: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navLink: {
    fontWeight: "bolder",
  },
  navLinkText: {
    color: "white",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  active: {
    color: theme.palette.primary.light,
  },
  socialLinks: {
    boxShadow: `0 0 5px ${theme.palette.primary.dark}`,
    borderRadius: 5,
    padding: "2px 5px",
  },
}))

export default function Navigation() {
  const classes = useStyles()
  const [pop, setPop] = useState({
    about: false,
    services: false,
    news: false,
    events: false,
    portfolio: false,
    contacts: false,
  })
  const router = useRouter()
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("md"))

  if (mobile) {
    return <MobileNav />
  }

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Container>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Image src="/logo2.png" width={200} height="40%" />

          <Stack direction="row" spacing={3} className={classes.navLinks}>
            <Typography className={classes.navLink}>
              <Link
                href="/"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/" ? classes.active : null
                }`}
              >
                Home
              </Link>
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, about: true })}
              onMouseLeave={() => setPop({ ...pop, about: false })}
              className={classes.navLink}
            >
              <Link
                href="/about"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/about" ? classes.active : null
                }`}
              >
                About us
              </Link>
              {pop.about ? <AboutPop /> : null}
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, services: true })}
              onMouseLeave={() => setPop({ ...pop, services: false })}
              className={classes.navLink}
            >
              <Link
                href="/services"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/services" ? classes.active : null
                }`}
              >
                Services
              </Link>
              {pop.services ? <ServicesPop /> : null}
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, news: true })}
              onMouseLeave={() => setPop({ ...pop, news: false })}
              className={classes.navLink}
            >
              <Link
                href="/news"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/news" ? classes.active : null
                }`}
              >
                News
              </Link>
              {pop.news ? <NewsPop /> : null}
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, events: true })}
              onMouseLeave={() => setPop({ ...pop, events: false })}
              className={classes.navLink}
            >
              <Link
                href="/events"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/events" ? classes.active : null
                }`}
              >
                Events
              </Link>
              {pop.events ? <EventsPop /> : null}
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, portfolio: true })}
              onMouseLeave={() => setPop({ ...pop, portfolio: false })}
              className={classes.navLink}
            >
              <Link
                href="/portfolio"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/portfolio" ? classes.active : null
                }`}
              >
                Portfolio
              </Link>
              {pop.portfolio ? <PortfolioPop /> : null}
            </Typography>

            <Typography
              onMouseOver={() => setPop({ ...pop, contacts: true })}
              onMouseLeave={() => setPop({ ...pop, contacts: false })}
              className={classes.navLink}
            >
              <Link
                href="/contacts"
                underline="none"
                className={`${classes.navLinkText} ${
                  router.pathname == "/contacts" ? classes.active : null
                }`}
              >
                Contacts
              </Link>
              {pop.contacts ? <ContactsPop /> : null}
            </Typography>

            <Stack direction="row" spacing={2} className={classes.socialLinks}>
              <IconButton>
                <FacebookIcon sx={{ color: "#4267B2" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "#1DA1F2" }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "#C13584" }} />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
