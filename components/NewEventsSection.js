import { ClassNames } from "@emotion/react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import TimerIcon from "@mui/icons-material/Timer"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
  },
}))

export default function NewsEventsSection() {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              News &amp; Events
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="/background2.jpg"
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: "bold" }} mb={1}>
                  Narrow Your Focus To Prevent Overanalysis
                </Typography>
                <Typography variant="body2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni pariatur quis commodi quo nobis dignissimos error
                  accusamus! Fugiat voluptatibus, rerum aliquam fugit omnis
                  adipisci, aliquid consequuntur, eum sequi optio enim?
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "block", padding: 2 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1}>
                    <TimerIcon color="primary" sx={{ fontSize: "1.25em" }} />
                    <Typography variant="subtitle2">August 31, 2021</Typography>
                  </Stack>
                  <Button variant="outlined" color="primary">
                    Read more
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="/background2.jpg"
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: "bold" }} mb={1}>
                  Stick with Your Concept but Do Your Homework
                </Typography>
                <Typography variant="body2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni pariatur quis commodi quo nobis dignissimos error
                  accusamus! Fugiat voluptatibus, rerum aliquam fugit omnis
                  adipisci, aliquid consequuntur, eum sequi optio enim?
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "block", padding: 2 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1}>
                    <TimerIcon color="primary" sx={{ fontSize: "1.25em" }} />
                    <Typography variant="subtitle2">August 31, 2021</Typography>
                  </Stack>
                  <Button variant="outlined" color="primary">
                    Read more
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="/background2.jpg"
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: "bold" }} mb={1}>
                  Narrow Your Focus To Prevent Overanalysis
                </Typography>
                <Typography variant="body2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni pariatur quis commodi quo nobis dignissimos error
                  accusamus! Fugiat voluptatibus, rerum aliquam fugit omnis
                  adipisci, aliquid consequuntur, eum sequi optio enim?
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "block", padding: 2 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={1}>
                    <TimerIcon color="primary" sx={{ fontSize: "1.25em" }} />
                    <Typography variant="subtitle2">August 31, 2021</Typography>
                  </Stack>
                  <Button variant="outlined" color="primary">
                    Read more
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
