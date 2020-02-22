import React from 'react';
import { MyWorkTimeline as MyWorkTimelineData } from '@constants/MyWorkTimeline';
import { Container } from '@material-ui/core';
import { MyWorkTimelineIntroduction } from './components/Introduction';
import { Timeline } from '../../components/Timeline';

export const MyWorkTimeline: React.SFC<{}> = () => (
  <>
    <MyWorkTimelineIntroduction />
    <Container component="section">
      {MyWorkTimelineData.map(timelineItem => (
        <Timeline
          key={`work-experience-block-${Math.random() * 100}}`}
          timelineItem={timelineItem}
        />
      ))}
    </Container>
  </>
);
