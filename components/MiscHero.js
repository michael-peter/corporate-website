import { Box, Button, Stack, Typography } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import Image from "next/image"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
    background: theme.palette.grey[100],
  },
}))

export default function MiscHero() {
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={5}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Some Secondary Headline Goes Here
          </Typography>
          <Typography gutterBottom variant="subtitle1" mb={2}>
            Secondary subheader continues here. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Praesentium sapiente esse aperiam
            adipisci quidem, fugit ea laborum modi quam ullam.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<PlayArrowIcon />}
            href="/"
            sx={{ fontWeight: "bold" }}
          >
            Contact us
          </Button>
        </Box>

        <Box sx={{ position: "relative", width: 1500 }}>
          <Image src="/background2.jpg" layout="fill" />{" "}
        </Box>
      </Stack>
    </section>
  )
}
