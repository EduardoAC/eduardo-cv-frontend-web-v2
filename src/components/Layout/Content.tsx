import React from 'react'
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'

interface ContentProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
  }),
)

export const Content: React.SFC<ContentProps> = ({
  children,
}: ContentProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      {children}
    </Container>
  )
}
