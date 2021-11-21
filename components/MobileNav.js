import { Menu } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  brandLink: {
    position: "relative",
    textDecoration: "none",
    display: "block",
    width: "200px",
    height: "38px",
  },
}))

export default function MobileNav() {
  const classes = useStyles()
  return (
    <AppBar position="sticky" elevation={0} color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Box className={classes.brandLink}>
            <Image component="a" href="/" src="/logo2.png" layout="fill" />
          </Box>
        </Box>
        <IconButton>
          <Menu sx={{ color: "white", fontSize: "1.75em" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
