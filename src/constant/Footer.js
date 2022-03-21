import { Box, Container, HStack, Text } from '@chakra-ui/react';
import NavLink from '../components/NavLink';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
const Footer = () => {
  return (
    <Box as="footer" bg="background.primary.light">
      <Container
        py={'1.5rem'}
        maxW={'container.xl'}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'1rem'}
      >
        <Text as="small">© 2022 - Siulok Tang</Text>
        <HStack
          fontSize={{ base: '1.5rem', md: '1.8rem' }}
          spacing="1.5rem"
          as="ul"
          listStyleType="none"
        >
          <NavLink
            href="https://www.linkedin.com/in/siulokt1207"
            isExternal
            aria-label="My linkedin page"
          >
            <FaLinkedin />
          </NavLink>
          <NavLink
            href="https://github.com/stang1207"
            isExternal
            aria-label="My github page"
          >
            <FaGithub />
          </NavLink>
          <NavLink
            href="mailto:siulokt1207@gmail.com"
            isExternal
            aria-label="Send an email to my gmail account"
          >
            <GrMail />
          </NavLink>
        </HStack>
      </Container>
    </Box>
  );
};
export default Footer;
