import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import CallIcon from "@mui/icons-material/Call"

const useStyles = makeStyles((theme) => ({
  barContainer: {
    background: theme.palette.grey[100],
  },
  barItem: {
    color: theme.palette.primary.main,
    borderLeft: "5px solid transparent",
    "&:hover": { borderLeft: `5px solid ${theme.palette.primary.light}` },
  },
  activeBarItem: {
    borderLeft: `5px solid ${theme.palette.primary.light}`,
  },
  barItemText: {
    fontWeight: "bold",
  },
  helpContainer: {
    padding: 20,
    background: theme.palette.primary.main,
    color: "white",
  },
}))

export default function SideBar() {
  const classes = useStyles()
  const router = useRouter()
  let matchOverview = router.pathname == "/about"
  let matchHistory = router.pathname == "/about/history"
  let matchCareers = router.pathname == "/about/career"
  let matchApproach = router.pathname == "/about/career"
  let matchPartners = router.pathname == "/about/career"
  let matchTeam = router.pathname == "/about/career"

  return (
    <>
      <List disablePadding className={classes.barContainer}>
        <ListItem
          disablePadding
          className={`${classes.barItem} ${
            matchOverview && classes.activeBarItem
          }`}
        >
          <ListItemButton component="a" href="/about">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Company Overview
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider light />

        <ListItem
          disablePadding
          className={`${classes.barItem} ${
            matchHistory && classes.activeBarItem
          }`}
        >
          <ListItemButton component="a" href="/about/history">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Our History
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider light />

        <ListItem
          disablePadding
          className={`${classes.barItem} ${
            matchCareers && classes.activeBarItem
          }`}
        >
          <ListItemButton component="a" href="/about/careers">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Careers
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider light />

        <ListItem
          disablePadding
          className={`${classes.barItem} ${
            matchApproach && classes.activeBarItem
          }`}
        >
          <ListItemButton component="a" href="/about/approach">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Our Approach
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider light />

        <ListItem
          disablePadding
          className={`${classes.barItem} ${
            matchPartners && classes.activeBarItem
          }`}
        >
          <ListItemButton component="a" href="/about/partners">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Our Partners
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider light />

        <ListItem
          disablePadding
          className={`${classes.barItem} ${matchTeam && classes.activeBarItem}`}
        >
          <ListItemButton component="a" href="/about/team">
            <ListItemText>
              <Typography variant="body2" className={classes.barItemText}>
                Our Team
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Box className={classes.helpContainer} mt={5}>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
          How can we help you?
        </Typography>
        <Typography variant="body2" my={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          facilis architecto perferendis quaerat numquam voluptatum amet minima,
          aut officiis.
        </Typography>
        <Button variant="outlined" color="info" startIcon={<CallIcon />}>
          Contacts
        </Button>
      </Box>
    </>
  )
}
