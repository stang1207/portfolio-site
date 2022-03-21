import Header from './Header';
import Footer from './Footer';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

const Layout = ({ children }) => {
  const router = useRouter();
  const animations = {
    hidden: { opacity: 0, x: 0, y: 30 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -30 },
  };
  return (
    <Flex fontSize={['sm', 'md', 'lg', 'xl']} flexDir="column" minH="100vh">
      <Header />
      <MotionBox
        flex="1"
        as="main"
        variants={animations}
        initial="hidden"
        animate="enter"
        exit="exit"
        key={router.route}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        {children}
      </MotionBox>
      <Footer />
    </Flex>
  );
};

export default Layout;
