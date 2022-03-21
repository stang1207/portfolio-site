import {
  Box,
  Text,
  VStack,
  HStack,
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import ButtonLink from './ButtonLink';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const ContactMe = () => {
  const fadeInLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 },
  };
  const fadeInRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  };

  return (
    <Box
      bg="background.primary.main"
      as="section"
      py={{ base: '2.5rem', md: '3.5rem' }}
      id="contact"
    >
      <Container
        maxW="container.xl"
        as={SimpleGrid}
        columns={{ base: 1, md: 2 }}
        alignItems="center"
      >
        <MotionVStack
          flexDir="column"
          gap="1rem"
          alignItems={{ base: 'center', md: 'flex-start' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, type: 'easeInOut' }}
          variants={fadeInLeft}
        >
          <Heading color="brand.primary.light">Contact me</Heading>
          <Text w="80%" textAlign={{ base: 'center', md: 'start' }}>
            {`I'm currently looking for any new opportunities. If you have a question or just want to say hi, feel free to contact me and I'll try my best to get back to you!`}
          </Text>
          <HStack spacing="1.5rem">
            <ButtonLink
              href="mailto:siulokt1207@gmail.com"
              bg="red.600"
              color="text.primary"
              isExternal
            >
              Email
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/siulokt1207"
              bg="blue.500"
              color="text.primary"
              isExternal
            >
              LinkedIn
            </ButtonLink>
          </HStack>
        </MotionVStack>
        <MotionBox
          minH="20rem"
          position="relative"
          display={{ base: 'none', md: 'block' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8, type: 'easeInOut' }}
          variants={fadeInRight}
        >
          <NextImage
            src="/images/contact.svg"
            layout="fill"
            alt="Contact me illustration"
          />
        </MotionBox>
      </Container>
    </Box>
  );
};
export default ContactMe;
