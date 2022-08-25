import {
  Title,
  SimpleGrid,
  Grid,
  Image,
  Stack,
  Text,
  Group,
  Anchor,
  Box,
} from "@mantine/core"

import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import useStyles from "./aboutStyle"

const About = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <Grid gutter="lg">
        <Grid.Col span={12} md={6}>
          <Stack>
            <Box sx={{ width: "300px", margin: "0 auto" }}>
              <Image
                radius="md"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="Community Admin"
              />
            </Box>
            <Title order={2}>Jake UpDown</Title>
          </Stack>
        </Grid.Col>
        <Grid.Col span={12} md={6} className={classes.textContent}>
          <Stack align="center" justify="center" sx={{ height: "100%" }}>
            <Title order={3}>About Me</Title>
            <Text size={18}>
              I write open source code and run this cool community called JS
              Helpers. I also lead developers team in my personal company.
            </Text>

            <Group spacing="xl" className={classes.linksWrapper}>
              <Anchor href="https://mantine.dev/" target="_blank">
                <FaInstagram />
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <FaFacebookSquare />
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <FaTwitter />
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <FaYoutube />
              </Anchor>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default About
