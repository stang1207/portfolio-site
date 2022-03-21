import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import NavLink from '../components/NavLink';
import {
  Box,
  Container,
  Link,
  HStack,
  VStack,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaHamburger } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerIconRef = React.useRef();
  const [isSmallerThanMdSize] = useMediaQuery('(max-width: 768px)');
  return (
    <Box
      as="header"
      py="1rem"
      position="sticky"
      top="0"
      zIndex="1"
      bg="background.primary.main"
    >
      <Container maxW="container.xl" as={HStack} justifyContent="space-between">
        {/* Logo Image Link */}
        <NextLink href="/" passHref>
          <Link display="block" boxSize="2.8125rem" position="relative">
            <NextImage src="/images/logo.jpg" layout="fill" alt="Site Logo" />
          </Link>
        </NextLink>
        {/* > Tablet and Desktop Navbar Menu  */}
        <HStack
          spacing="2.5rem"
          display={{ base: 'none', md: 'flex' }}
          as="ul"
          listStyleType="none"
        >
          <NavLink href="/" aria-label="Homepage link">
            Home
          </NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <Box as="li">
            <HStack
              fontSize="1.7rem"
              spacing="1.25rem"
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
          </Box>
        </HStack>
        {/* Hamburger Menu Icon Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          colorScheme="teal"
          aria-label="expand navbar menu"
          variant="outline"
          icon={<FaHamburger />}
          onClick={onOpen}
          ref={hamburgerIconRef}
        />
        {/* Mobile Size Navbar Menu */}

        {isSmallerThanMdSize && (
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={hamburgerIconRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="background.primary.main">
              <DrawerCloseButton color="red.500" mt="2" />
              <DrawerHeader />
              <DrawerBody mt="1rem">
                <VStack
                  fontSize="1.25rem"
                  spacing="2rem"
                  as="ul"
                  listStyleType="none"
                >
                  <NavLink href="/" onClick={onClose}>
                    Home
                  </NavLink>
                  <NavLink href="/projects" onClick={onClose}>
                    Projects
                  </NavLink>
                  <Box as="li">
                    <HStack
                      spacing="1.5rem"
                      fontSize="1.8rem"
                      as="ul"
                      listStyleType="none"
                    >
                      <NavLink
                        href="https://www.linkedin.com/in/siulokt1207"
                        isExternal
                        onClick={onClose}
                      >
                        <FaLinkedin />
                      </NavLink>
                      <NavLink
                        href="https://github.com/stang1207"
                        isExternal
                        onClick={onClose}
                      >
                        <FaGithub />
                      </NavLink>
                      <NavLink
                        href="mailto:siulokt1207@gmail.com"
                        isExternal
                        onClick={onClose}
                      >
                        <GrMail />
                      </NavLink>
                    </HStack>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Container>
    </Box>
  );
};
export default Header;
