import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  Box,
  Image,
  ThemeIcon,
  MediaQuery,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { FaCheckCircle as CheckCircleIcon } from "react-icons/fa"

import useStyles from "./heroStyle"

export default function Hero() {
  const { classes } = useStyles()
  const matches = useMediaQuery("(min-width: 640px)")

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> JS{" "}
              {matches && <br />}
              community
            </Title>
            <Text color="dimmed" mt="md">
              Welcome to Javascript community JS Helpers. Ask any questions
              related to your project.
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Group>
          </div>

          <div className={classes.imageContainer}>
            <Image src="/hero.svg" alt="Hero Image" className={classes.image} />
          </div>
        </div>
      </Container>
    </div>
  )
}
