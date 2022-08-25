import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "80%",
    height: "100vh",
    margin: "0 auto",
    marginTop: "100px",
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
    marginTop: "120px",
    marginBottom: "60px",

    [theme.fn.largerThan("sm")]: {
      marginTop: "0px",
    },
  },
}))

export default useStyles
