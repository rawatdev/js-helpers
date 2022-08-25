import { createStyles } from "@mantine/core"

const NAV_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.secondaryColor,
    borderBottom: 0,
    height: NAV_HEIGHT,
  },
  inner: {
    height: NAV_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    width: "100%",

    [theme.fn.largerThan("lg")]: {
      maxWidth: "1024px",
    },
  },
}))

export default useStyles
