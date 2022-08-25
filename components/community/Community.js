import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Grid,
  Box,
  Title,
} from "@mantine/core"
import { MdPeople } from "react-icons/md"

import useStyles from "./communityStyle"

const cardData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Javascript Group",
    text: "JS buddies are here to rock!",
    noOfPeople: 842,
    buttonText: "Explore Group",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "React Group",
    text: "React buddies are here to rock!",
    noOfPeople: 532,
    buttonText: "Explore Group",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Node js Group",
    text: "Node js buddies are here to rock!",
    noOfPeople: 322,
    buttonText: "Explore Group",
  },
]

const Community = () => {
  const { classes } = useStyles()

  const cardItems = cardData.map((card) => {
    return (
      <Grid.Col key={card.id} span={12} sm={4}>
        <Card sx={{ flex: 1 }} shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={card.image} height={160} alt={card.title} />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{card.title}</Text>
            <Badge variant="light">
              <Group>
                <MdPeople /> {card.noOfPeople}
              </Group>
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {card.text}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            {card.buttonText}
          </Button>
        </Card>
      </Grid.Col>
    )
  })
  return (
    <Box className={classes.wrapper}>
      <Title className={classes.title}>Community Groups</Title>
      <Grid gutter="xl" justify="center" align="center">
        {cardItems}
      </Grid>
    </Box>
  )
}

export default Community
