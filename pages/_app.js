import Head from "next/head"
import { MantineProvider } from "@mantine/core"

export default function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            primaryText: "#100B00",
            secondaryColor: "#eaf2d7",
            tertiaryColor: "#5A8672",
            brand: [
              "#a8bbcb",
              "#93aabe",
              "#7d98b0",
              "#6787a3",
              "#517696",
              "#3c6589",
              "#26547c",
            ],
          },
          primaryColor: "brand",
          primaryShade: { light: 5, dark: 8 },
          spacing: {
            sm: 4,
            md: 8,
            lg: 12,
            xl: 16,
          },
          breakpoints: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
