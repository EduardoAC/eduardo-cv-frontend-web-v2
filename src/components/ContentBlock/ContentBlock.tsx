import React from 'react';
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { Content } from '../../types/Content';

type ContentPosition = 'left' | 'right';

interface ContentBlock {
  content: Content;
  position?: ContentPosition;
}

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: '24px',
    },
  }),
);
const PictureItem: React.SFC<Pick<Content, 'imgUrl'>> = ({
  imgUrl,
}: Pick<Content, 'imgUrl'>) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box display="flex" alignItems="center" height="100%">
      <img
        src={imgUrl}
        alt={imgUrl.replace(/\//g, '-')}
        style={{ verticalAlign: 'middle' }}
      />
    </Box>
  </Grid>
);
const ContentItem: React.SFC<Pick<Content, 'title' | 'description'>> = ({
  title,
  description,
}: Pick<Content, 'title' | 'description'>) => (
  <Grid item xs={12} sm={6} md={8}>
    <Typography variant="h4" component="h2" align="left">
      {title}
    </Typography>
    <Typography
      variant="h6"
      component="div"
      align="justify"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </Grid>
);
export const ContentBlock: React.SFC<ContentBlock> = ({
  content,
  position = 'left',
}: ContentBlock) => {
  const { title, imgUrl, description } = content;
  const classes = useStyles();
  return (
    <Box component="section" className={classes.section}>
      <Grid container spacing={3}>
        {position === 'left' ? (
          <PictureItem imgUrl={imgUrl} />
        ) : (
          <ContentItem title={title} description={description} />
        )}
        {position === 'left' ? (
          <ContentItem title={title} description={description} />
        ) : (
          <PictureItem imgUrl={imgUrl} />
        )}
      </Grid>
    </Box>
  );
};
