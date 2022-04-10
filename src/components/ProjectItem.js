import {
  SimpleGrid,
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Badge,
} from '@chakra-ui/react';
import ButtonLink from './ButtonLink';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
const MotionGrid = motion(SimpleGrid);

const ProjectItem = (props) => {
  const {
    projectTitle,
    projectDescription,
    projectStacks,
    projectImageSrc,
    projectImageAlt,
    githubLink,
    demoLink,
    flipOrder,
  } = props;
  const fadeInVariants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionGrid
      as="li"
      columns={{ base: 1, lg: 2 }}
      justifyItems="center"
      alignItems="center"
      py={{ base: '2rem', md: '3rem' }}
      px={{ base: '2rem', md: '4rem' }}
      bg="background.primary.light"
      gridGap={{ base: '1.5rem', md: '4rem' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.25,
      }}
      variants={fadeInVariants}
    >
      <Flex
        flexDir="column"
        gap={{ base: '.8rem', md: '1.25rem' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <Heading size="lg" color="brand.primary.main">
          {projectTitle}
        </Heading>
        <Text textAlign={{ base: 'center', lg: 'start' }}>
          {projectDescription}
        </Text>
        <HStack spacing={{ base: '.5rem', md: '.75rem' }}>
          {projectStacks.map((tech, i) => {
            return (
              <Badge key={i} bg={tech.bg}>
                {tech.text}
              </Badge>
            );
          })}
        </HStack>
        <HStack mt=".5rem" spacing="1.5rem">
          <ButtonLink
            href={githubLink}
            isExternal
            bg="background.primary.dark"
            color="brand.primary.light"
          >
            Repo
          </ButtonLink>
          {demoLink && (
            <ButtonLink
              href={demoLink}
              isExternal
              bg="blue.700"
              color="text.primary"
            >
              Live Demo
            </ButtonLink>
          )}
        </HStack>
      </Flex>
      <Box
        border="2px solid gray"
        position="relative"
        width="100%"
        minH={{ base: '15rem', md: '20rem' }}
        order={{ base: -1, lg: flipOrder ? -1 : 1 }}
        borderRadius={{ base: 'lg', md: 'xl' }}
        overflow="hidden"
      >
        <NextImage
          src={projectImageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={projectImageAlt}
        />
      </Box>
    </MotionGrid>
  );
};
export default ProjectItem;
