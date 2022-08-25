import { Text, Title } from "@mantine/core"
import React from "react"
import useStyles from "./announcementStyle"

const Announcement = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <Title order={2} className={classes.title}>
        Announcement
      </Title>
      <div className={classes.embedWrapper}>
        <embed
          className={classes.embed}
          src="https://embed.pensil.in/group/630472a51100942d33e5e016/feed/630472a51100942d33e5e018"
          type="text/html"
        ></embed>
      </div>
    </div>
  )
}

export default Announcement
