import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import SkillMotionIcon from './SkillMotionIcon';
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaNode } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiSass,
  SiChakraui,
} from 'react-icons/si';

const MySkills = () => {
  return (
    <Flex flexDir="column" gap="1.5rem" as="section">
      <Heading color="brand.primary.light" textAlign={'center'}>
        Skills
      </Heading>
      <SimpleGrid
        minChildWidth="8rem"
        justifyItems="center"
        gridRowGap="2rem"
        as="ul"
        listStyleType="none"
      >
        <SkillMotionIcon>
          <FaHtml5 color="#F16529" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <FaCss3Alt color="#2965f1" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <DiJavascript1 color="#f0db4f" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <FaReact color="#88dded" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <FaGit color="#f34f29" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiSass color="#cc6699" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiExpress color="#999" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <FaNode color="#68a063" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiMongodb color="#589636" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiNextdotjs color="#fff" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiPostgresql color="#008bb9" />
        </SkillMotionIcon>
        <SkillMotionIcon>
          <SiChakraui color="#81E6D9" />
        </SkillMotionIcon>
      </SimpleGrid>
    </Flex>
  );
};
export default MySkills;
