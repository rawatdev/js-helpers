import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "space-between",
    justifyContent: "center",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: theme.spacing.xl * 4,
    },
  },

  content: {
    width: "100%",
    marginRight: theme.spacing.xl * 3,

    [theme.fn.largerThan("sm")]: {
      maxWidth: 480,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      flex: 1,
    },
  },

  imageContainer: {
    width: "80%",
    margin: "0 auto",

    [theme.fn.largerThan("md")]: {
      width: "100%",
    },
  },

  image: {
    flex: 1,
    marginBottom: 30,
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}))

export default useStyles
