import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const ButtonLink = ({ href, children, bg, color, isExternal }) => {
  if (isExternal) {
    return (
      <Link
        href={href}
        padding={{ base: '.7rem 1.3rem', md: '.75rem 1.5rem' }}
        bg={bg}
        color={color}
        style={{ textDecoration: 'inherit' }}
        borderRadius="md"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight={600}
        textTransform="uppercase"
        transition="all .2s"
        fontFamily="inherit"
        _hover={{ bg: color, color: bg }}
        isExternal
      >
        {children}
      </Link>
    );
  }

  return (
    <NextLink href={href} passHref>
      <Link
        padding={{ base: '.7rem 1.3rem', md: '.75rem 1.5rem' }}
        bg={bg}
        color={color}
        style={{ textDecoration: 'inherit' }}
        borderRadius="md"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight={600}
        textTransform="uppercase"
        transition="all .2s"
        fontFamily="inherit"
        _hover={{ bg: color, color: bg }}
      >
        {children}
      </Link>
    </NextLink>
  );
};
export default ButtonLink;
