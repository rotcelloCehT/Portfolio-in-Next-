import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Stralina <br/>
        Digital Solutions
      </SectionTitle>
      <SectionText>
        Your online presence is your first impression. Stralina Studios ensure you're dressed for the occasion
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;