import { Box, Divider, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  popContainer: {
    position: "absolute",
    left: 0,
    display: "block",
    fontWeight: "normal",
    color: "black",
    width: "100%",
    opacity: 0,
    animation: "menuSlide 0.2s ease-in forwards",
  },
  popBox: {
    padding: 20,
    background: "white",
    boxShadow: "0 0 5px #292C2D",
    marginTop: 15,
  },
  aboutLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  aboutFoot: {
    padding: 10,
    background: theme.palette.primary.main,
    color: "white",
    boxShadow: "1px 1.5px 2px #292C2D, -1px 1.5px 2px #292C2D",
  },
}))

export function AboutPop() {
  const classes = useStyles()

  return (
    <Box className={classes.popContainer}>
      <Box className={classes.popBox}>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="body1">About us</Typography>
            <br />
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="body1">About us</Typography>
            <br />
            <ul className={classes.aboutLinks}>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
            </ul>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="body1">Careers</Typography>
            <br />
            <ul className={classes.aboutLinks}>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
            </ul>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="body1">Our team</Typography>
            <br />
            <ul className={classes.aboutLinks}>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
              <li>About link 1</li>
            </ul>
          </Box>
        </Stack>
      </Box>
      <Box className={classes.aboutFoot}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
        doloribus cum distinctio modi amet sunt laudantium nobis nulla corrupti.
      </Box>
    </Box>
  )
}

export function ServicesPop() {
  const classes = useStyles()

  return (
    <Box className={classes.popContainer}>
      <Box className={classes.popBox}>
        <Stack direction="row">
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export function NewsPop() {
  const classes = useStyles()
  return (
    <Box className={classes.popContainer}>
      <Box className={classes.popBox}>
        <Stack direction="row">
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export function EventsPop() {
  const classes = useStyles()
  return (
    <Box className={classes.popContainer}>
      <Box className={classes.popBox}>
        <Stack direction="row">
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">About us</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, unde fugit! Aut quibusdam assumenda in sapiente, ad
              repudiandae harum id.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export function PortfolioPop() {
  const classes = useStyles()
  return (
    <span className={classes.popContainer}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad, illum
      molestiae provident nobis vel in deserunt, obcaecati nemo quaerat
      doloremque natus, corporis tempore beatae suscipit nesciunt recusandae
      quos! Ut.
    </span>
  )
}

export function ContactsPop() {
  const classes = useStyles()
  return (
    <span className={classes.popContainer}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad, illum
      molestiae provident nobis vel in deserunt, obcaecati nemo quaerat
      doloremque natus, corporis tempore beatae suscipit nesciunt recusandae
      quos! Ut.
    </span>
  )
}
