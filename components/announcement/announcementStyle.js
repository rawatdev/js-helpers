import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.05)",
    width: "80%",
    height: "100vh",
    margin: "0 auto",
    marginTop: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.largerThan("sm")]: {
      marginTop: "0px",
    },

    [theme.fn.largerThan("lg")]: {
      width: "1024px",
    },
  },

  title: {
    marginBottom: "60px",
    fontSize: "32px",

    [theme.fn.largerThan("sm")]: {
      marginTop: "0px",
    },
  },

  embedWrapper: {
    width: "300px",
    height: "300px",

    [theme.fn.largerThan("sm")]: {
      width: "400px",
      height: "400px",
    },
  },
  embed: {
    width: "100%",
    height: "100%",
  },
}))

export default useStyles
