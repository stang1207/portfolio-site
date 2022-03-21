import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import { motion } from 'framer-motion';
const MotionContainer = motion(Container);

const MyDetails = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <Box
      bg="background.primary.light"
      as="section"
      py={{ base: '2.5rem', md: '3.5rem' }}
    >
      <MotionContainer
        maxW="container.xl"
        as={SimpleGrid}
        columns={{ base: 1, lg: 2 }}
        gridGap={{ base: '2rem', md: '4rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        variants={fadeInVariants}
      >
        <AboutMe />
        <MySkills />
      </MotionContainer>
    </Box>
  );
};
export default MyDetails;
