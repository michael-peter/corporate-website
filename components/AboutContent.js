import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "50px 0",
  },
  typeUnderline: {
    width: 70,
    height: 5,
    margin: "0 0 20px",
    background: theme.palette.secondary.main,
    borderRadius: 5,
  },
  teaseText: {
    background: theme.palette.grey[100],
    borderLeft: `5px solid ${theme.palette.secondary.main}`,
    padding: 20,
  },
}))

export default function AboutContent() {
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            gutterBottom
            variant="h4"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Company Overview
          </Typography>
          <Box className={classes.typeUnderline} />
          <Typography varaint="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ex
            sunt at quidem vitae dignissimos repudiandae obcaecati veritatis
            reprehenderit repellat temporibus nobis, quibusdam sapiente,
            necessitatibus eius eum tempore reiciendis quia consequuntur
            adipisci sequi! Omnis, vitae officiis! Et iure sit unde eligendi,
            nostrum obcaecati voluptates. Natus iusto autem soluta quis
            assumenda!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" className={classes.teaseText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            tempore et eveniet, mollitia exercitationem numquam labore nostrum
            beatae dolorum error doloremque harum asperiores, totam, ipsa in!
            Quis itaque sed delectus!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            Our Mission
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            odit, autem debitis hic quos praesentium nihil, qui suscipit velit,
            explicabo deserunt atque. Magni harum magnam perferendis dicta alias
            dolore mollitia!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            How we work
          </Typography>
          <Box sx={{ position: "relative", width: "100%" }}>
            <Image src="/background1.jpg" layout="fill" />
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}
