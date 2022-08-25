import {
  createStyles,
  Container,
  Button,
  Box,
  Group,
  Title,
} from "@mantine/core"
import { IoLogoAndroid } from "react-icons/io"

import useStyles from "./navbarStyle"

export function Navbar({ links }) {
  const { classes } = useStyles()

  return (
    <Box component="nav" className={classes.navbar}>
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
