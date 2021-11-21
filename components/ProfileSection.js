import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
  },
  imageBox: {
    position: "relative",
    width: "100%",
    height: 180,
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
    "&:hover": {
      filter: "opacity(0.8)",
    },
    "&:hover:after": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "50px",
      bottom: 0,
      background: theme.palette.secondary.main,
    },
  },
  profileBox: {
    padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
    border: `5px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      border: `5px solid ${theme.palette.primary.main}`,
    },
  },
  profileArrow: {
    fontSize: "0.8em",
    color: theme.palette.secondary.main,
  },
}))

export default function ProfileSection() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={4}>
          <Grid item xs={13} md={6} lg={3}>
            <Stack spacing={2}>
              <Box className={classes.imageBox}>
                <Image src="/background1.jpg" layout="fill" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Header text
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptas minima eaque fuga, corporis alias.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={13} md={6} lg={3}>
            <Stack spacing={2}>
              <Box className={classes.imageBox}>
                <Image src="/background1.jpg" layout="fill" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Header text
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                quisquam, est dicta cupiditate amet reprehenderit.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={13} md={6} lg={3}>
            <Stack spacing={2}>
              <Box className={classes.imageBox}>
                <Image src="/background1.jpg" layout="fill" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Header text
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                modi nobis provident perspiciatis nulla voluptatum.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={13} md={6} lg={3}>
            <Box className={classes.profileBox}>
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                What we do for you
                <Box className={classes.typeUnderline} my={2}></Box>
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti inventore distinctio, eligendi fugiat recusandae,
                doloremque excepturi.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center" }}
                my={2}
              >
                <Link
                  href="/profile"
                  underline="none"
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                >
                  View profile
                </Link>
                <ArrowForwardIosIcon className={classes.profileArrow} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
