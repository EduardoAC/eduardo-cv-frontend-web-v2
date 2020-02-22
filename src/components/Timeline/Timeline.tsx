import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useTimelineStyles } from './Timeline.style';

export interface TimelineItem {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
}

interface TimelineProps {
  timelineItem: TimelineItem;
}

export const Timeline: React.SFC<TimelineProps> = ({ timelineItem }) => {
  const classes = useTimelineStyles();
  const { startDate, endDate, company, position, description } = timelineItem;
  return (
    <Grid
      key={`work-experience-block-${company}`}
      container
      className={classes.experienceBlock}
    >
      <Grid item xs={12} sm={3} md={3} lg={2}>
        <div className={classes.workYear}>
          <span className={classes.prevY}>{endDate}</span>
          <span className={classes.afterY}>{startDate}</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={10} className={classes.rightArea}>
        <div className={classes.arrowpart} />
        <div className={classes.exCon}>
          <Typography component="h4" className={classes.companyTitle}>
            {company}
          </Typography>
          <Typography component="h5" className={classes.workRole}>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: position }}
            />
          </Typography>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Grid>
    </Grid>
  );
};
