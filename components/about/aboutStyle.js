import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    marginTop: "100px",
    backgroundColor: "rgba(0,0,0,0.05)",

    [theme.fn.largerThan("sm")]: {
      alignItems: "center",
      marginTop: "0px",
    },

    [theme.fn.largerThan("lg")]: {
      maxWidth: "1024px",
    },
  },

  textContent: {
    marginTop: "30px",
  },

  linksWrapper: {
    fontSize: "30px",

    [theme.fn.largerThan("sm")]: {
      fontSize: "50px",
    },
  },
}))

export default useStyles
