import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { useEffect } from "react"
import "../styles/globals.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#01395E",
      light: "#7CACCB",
      dark: "#1A2F3D",
    },
    secondary: {
      main: "#FF6600",
      light: "#F59554",
      dark: "#9E4D17",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
