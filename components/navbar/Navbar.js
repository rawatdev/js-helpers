import {
  createStyles,
  Container,
  Button,
  Box,
  Group,
  Title,
} from "@mantine/core"
import { IoLogoAndroid } from "react-icons/io"

const NAV_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.secondaryColor,
  },
  inner: {
    height: NAV_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    width: "100%",

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // padding: "0px 80px",
      maxWidth: "1024px",
    },
  },
}))

export function Navbar({ links }) {
  const { classes } = useStyles()

  return (
    <Box
      component="nav"
      height={NAV_HEIGHT}
      className={classes.navbar}
      sx={{ borderBottom: 0 }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <IoLogoAndroid size={32} />
          <Title order={3}>JS Helpers</Title>
        </Group>
        <Button radius="xl">Login</Button>
      </Container>
    </Box>
  )
}

export default Navbar
