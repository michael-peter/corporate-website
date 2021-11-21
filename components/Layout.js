import Head from "next/head"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    width: "100%",
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Page name here</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#01395E" />
      </Head>
      <Navigation />
      <Box className={classes.mainContainer}>{children}</Box>
    </>
  )
}
