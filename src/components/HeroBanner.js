import { Box, Container, HStack, Heading, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import ButtonLink from './ButtonLink';

const AboutMe = () => {
  return (
    <Container
      maxW="container.xl"
      py={{ base: '3rem', md: '4rem' }}
      as="section"
      display="flex"
      flexDir="column"
      alignItems="center"
      gap={{ base: '.5rem', md: '1rem' }}
    >
      <Box
        boxSize={{ base: '7rem', md: '10rem' }}
        position="relative"
        borderRadius="50%"
        overflow="hidden"
        mb="1rem"
      >
        <NextImage
          src="/images/selfie.jpg"
          layout="fill"
          objectFit="cover"
          alt="a photo of myself"
        />
      </Box>
      <Heading
        color="brand.primary.main"
        as="h1"
        fontSize={{ base: '1.75rem', md: '3rem' }}
      >
        {`Hello I'm Siulok`}
      </Heading>
      <Text
        w={{ base: '80%', md: '40%' }}
        textAlign="center"
      >{`I'm a web developer based in Toronto with a passion for everything front-end!`}</Text>
      <HStack mt="1rem" spacing="1.5rem">
        <ButtonLink
          href="/projects"
          bg="background.primary.light"
          color="brand.primary.main"
        >
          My Projects
        </ButtonLink>
        <ButtonLink href="#contact" bg="red.600" color="text.primary">
          Contact Me
        </ButtonLink>
      </HStack>
    </Container>
  );
};
export default AboutMe;
