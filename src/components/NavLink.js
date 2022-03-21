import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const MotionBox = motion(Box);

const NavLink = ({ href, children, isExternal, ...props }) => {
  if (isExternal) {
    return (
      <MotionBox as="li" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link
          display="block"
          href={href}
          isExternal
          _hover={{ color: 'brand.primary.main' }}
          {...props}
        >
          {children}
        </Link>
      </MotionBox>
    );
  }

  return (
    <NextLink href={href} passHref>
      <MotionLink
        as="li"
        style={{ textDecoration: 'inherit' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        _hover={{ color: 'brand.primary.main' }}
        {...props}
      >
        {children}
      </MotionLink>
    </NextLink>
  );
};
export default NavLink;
