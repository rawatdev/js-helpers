import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",

    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    height: "100vh",
    width: "100%",
    margin: "0 auto",

    [theme.fn.largerThan("sm")]: {
      alignItems: "center",
    },

    [theme.fn.largerThan("lg")]: {
      maxWidth: "1024px",
    },
  },

  title: {
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  icon: {
    backgroundColor: theme.colors.gray,
  },
}))

export default useStyles
