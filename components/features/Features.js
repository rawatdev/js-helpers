import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
} from "@mantine/core"

import { MdGroups, MdPersonAdd, MdEventNote, MdLiveTv } from "react-icons/md"

import useStyles from "./featuresStyle"

const featuresList = [
  {
    icon: <MdGroups />,
    title: "Dedicated Groups",
    description: "Post your queries to the dedicated groups",
  },
  {
    icon: <MdPersonAdd />,
    title: "Mentors",
    description: "Each dedicated group has its own mentors",
  },
  {
    icon: <MdEventNote />,
    title: "Events",
    description: "We conduct monthly export for extra learnings.",
  },
  {
    icon: <MdLiveTv />,
    title: "Go live",
    description: "Meet & Greet each other live, directly from your group",
  },
]

const Features = () => {
  const { classes } = useStyles()

  const items = featuresList.map((feature, index) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        {feature.icon}
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            A fully featured Javascript community.
          </Title>
          <Text color="dimmed">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Col>
        <Col span={12} md={6}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  )
}

export default Features
