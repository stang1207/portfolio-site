import NextImage from 'next/image';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const SkillMotionIcon = ({ children }) => {
  return (
    <MotionBox
      as="li"
      whileHover={{ scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 400 }}
      display="inline-block"
      fontSize={{ base: '3rem', md: '3.5rem' }}
    >
      {children}
    </MotionBox>
  );
};
export default SkillMotionIcon;
