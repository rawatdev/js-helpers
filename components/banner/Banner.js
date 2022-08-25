import { Text } from "@mantine/core"

import useStyles from "./bannerStyle"

const Banner = () => {
  const { classes } = useStyles()

  return (
    <div>
      <Text size="lg" className={classes.banner}>
        This is the only JS community you need.
      </Text>
    </div>
  )
}

export default Banner
