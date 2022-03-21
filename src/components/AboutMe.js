import { Flex, Heading, Text } from '@chakra-ui/react';
const AboutMe = () => {
  return (
    <Flex
      flexDir={'column'}
      gap="1.5rem"
      textAlign={'center'}
      as="section"
      w={{ base: '80%', md: '85%' }}
      m="0 auto"
    >
      <Heading color="brand.primary.light">About me</Heading>
      <Text>{`Hi, nice to meet you there! My name is Siulok and I'm a web developer based in Toronto. I discovered the world of web development last year during the pandemic, ever since then, I've been learning and building projects. Although I enjoy working with both the front-end and back-end, I particular love the front-end and being able to traslate any design into code!`}</Text>
      <Text>{`When I'm not studying, I like to spend some time playing some puzzle or strategy games. Right now, my favorite game is either Crusader Kings III or Portal 2.`}</Text>
    </Flex>
  );
};
export default AboutMe;
