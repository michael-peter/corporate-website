import { Button, Container, Grid, Typography } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"

const useStyles = makeStyles((theme) => ({
  heroFoot: {
    padding: "30px 0",
    background: theme.palette.secondary.main,
  },
}))

export default function CtaSection() {
  const classes = useStyles()
  return (
    <Box className={classes.heroFoot}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <Typography variant="h4">
              Looking for a First-Class Business Plan Consultant?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              endIcon={<PlayArrowIcon />}
              className={classes.ctaButton}
            >
              Contact us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
