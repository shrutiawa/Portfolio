

import {
  TimelineContainer,
  TimelineContent,
  TimelineItem,
  TimelineLine,
  TimelineYear
} from './TimeLineStyles';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';

import TimeLineData from '../../JSON data/aboutme.json';

const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>{TimeLineData.description}</SectionText>

      <TimelineContainer>
        <TimelineLine />
        {[...TimeLineData.timeline].reverse().map((item, index) => (
          <TimelineItem key={index} align={index % 2 === 0 ? 'left' : 'right'}>
            <TimelineContent align={index % 2 === 0 ? 'left' : 'right'}>
              <TimelineYear>{item.year}</TimelineYear>
              <h4 style={{ margin: '0.8rem 0', color: '#fff' }}>
                {item.designation} @ {item.company}
              </h4>
              <p style={{color: '#ccc',lineHeight:'25px' }}>{item.text}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
