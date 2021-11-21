import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { makeStyles } from "@mui/styles"
import Image from "next/image"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "60px 0",
    background: theme.palette.primary.main,
    color: "white",
  },
  faqAccordion: {
    background: "rgba(255, 255, 255, .05)",
    color: "white",
  },
  testimonialsBox: {
    padding: theme.spacing(2),
    background: "rgba(255, 255, 255, .05)",
  },
  testimonialsImage: {
    position: "relative",
    width: "100%",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
}))

export default function BlueSection() {
  const classes = useStyles()

  const [expanded, setExpanded] = useState("panel1")

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <section className={classes.section}>
      <Container fluid="true">
        <Grid container spacing={7}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} mb={3}>
              FAQ
            </Typography>
            <Stack spacing={1}>
              <Accordion
                square
                defaultExpanded
                disableGutters
                className={classes.faqAccordion}
                elevation={0}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  spacing={2}
                  direction="row"
                >
                  <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    What does Smile Consulting do for you?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit beatae maxime quidem accusantium, sunt sequi
                    deserunt et voluptas distinctio sapiente nihil sit qui
                    assumenda ratione. Nemo laudantium reprehenderit fugiat odit
                    rerum quia delectus necessitatibus, porro, tenetur quos
                    libero nulla, doloribus unde.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                disableGutters
                className={classes.faqAccordion}
                elevation={0}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  spacing={2}
                  direction="row"
                >
                  <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    What does Smile Consulting do for you?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit beatae maxime quidem accusantium, sunt sequi
                    deserunt et voluptas distinctio sapiente nihil sit qui
                    assumenda ratione. Nemo laudantium reprehenderit fugiat odit
                    rerum quia delectus necessitatibus, porro, tenetur quos
                    libero nulla, doloribus unde.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                disableGutters
                className={classes.faqAccordion}
                elevation={0}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  spacing={2}
                  direction="row"
                >
                  <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    What does Smile Consulting do for you?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit beatae maxime quidem accusantium, sunt sequi
                    deserunt et voluptas distinctio sapiente nihil sit qui
                    assumenda ratione. Nemo laudantium reprehenderit fugiat odit
                    rerum quia delectus necessitatibus, porro, tenetur quos
                    libero nulla, doloribus unde.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                disableGutters
                className={classes.faqAccordion}
                elevation={0}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  spacing={2}
                  direction="row"
                >
                  <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    What does Smile Consulting do for you?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit beatae maxime quidem accusantium, sunt sequi
                    deserunt et voluptas distinctio sapiente nihil sit qui
                    assumenda ratione. Nemo laudantium reprehenderit fugiat odit
                    rerum quia delectus necessitatibus, porro, tenetur quos
                    libero nulla, doloribus unde.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} mb={3}>
              Testimonials
            </Typography>
            <Box className={classes.testimonialsBox}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                  <Box className={classes.testimonialsImage}>
                    <Image src="/background1.jpg" layout="fill" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} mb={2}>
                  <Typography variant="body2" mb={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae soluta minima voluptatibus veniam magni maiores
                    adipisci placeat iste ullam provident deleniti aperiam sit
                    fugit consectetur perspiciatis earum illo reiciendis
                    molestiae.
                  </Typography>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Mensah Davis
                    </Typography>
                    <Typography variant="subtitle2">
                      Chairman, Some Client Company Limited
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}
                  >
                    <IconButton>
                      <ArrowBackIosNewIcon color="secondary" />
                    </IconButton>
                    <IconButton>
                      <ArrowForwardIosIcon color="secondary" />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
