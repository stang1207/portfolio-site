import Head from 'next/head';
import { Box, Flex, Container, Heading } from '@chakra-ui/react';
import ProjectItem from '../src/components/ProjectItem';

const Projects = () => {
  const portfolioStack = [
    { bg: 'blackAlpha.900', text: 'Next' },
    { bg: 'green.700', text: 'Chakra UI' },
    { bg: 'purple.700', text: 'Framer motion' },
  ];
  const bandSiteStack = [
    { bg: 'orange.700', text: 'Html' },
    { bg: 'pink.700', text: 'Sass' },
    { bg: 'yellow.700', text: 'JavaScript' },
    { bg: 'gray.700', text: 'Axios' },
  ];
  const brainflixStack = [
    { bg: 'blue.700', text: 'React' },
    { bg: 'green.700', text: 'Node' },
    { bg: 'gray.700', text: 'Express' },
    { bg: 'pink.700', text: 'Sass' },
  ];
  const inStockStack = [
    { bg: 'green.700', text: 'Node' },
    { bg: 'gray.700', text: 'Express' },
    { bg: 'purple.700', text: 'Jira & Agile' },
    { bg: 'red.700', text: 'Joi' },
    { bg: 'blue.700', text: 'REST API' },
  ];
  const todoStack = [
    { bg: 'gray.700', text: 'Next' },
    { bg: 'green.700', text: 'Chakra UI' },
    { bg: 'purple.700', text: 'Redux Toolkits' },
  ];

  return (
    <>
      <Head>
        <title>Siulok Tang - Projects</title>
        <meta
          name="description"
          content="Siulok Tang - This is the project page that shows all the projects that I've built"
        />
      </Head>
      <Box
        as="section"
        py={{ base: '2.5rem', md: '3.5rem' }}
        pb={{ base: '0', md: '3.5rem' }}
        bg="background.primary.dark"
      >
        <Container maxW="container.xl" px={{ base: '0', md: '2rem' }}>
          <Heading
            as="h1"
            mb="2rem"
            px={{ base: '1rem', md: '0' }}
            color="brand.primary.main"
          >
            My Projects
          </Heading>
          <Flex
            as="ul"
            flexDir="column"
            listStyleType="none"
            borderRadius="lg"
            overflow="hidden"
          >
            <ProjectItem
              projectTitle="Portfolio"
              projectDescription="This is the portfolio site tha you're looking at right now! It was built using my favorite tech stack: Next.js, Chakra UI, and Framer Motion."
              projectStacks={portfolioStack}
              projectImageSrc="/images/portfolio-preview.png"
              projectImageAlt="Portfolio site preview"
              githubLink="https://github.com/stang1207/portfolio-site"
              demoLink="https://portfolio-site-iota-topaz.vercel.app/"
            />
            <ProjectItem
              projectTitle="BandSite"
              projectDescription="A fully responsive website for a musical band that also allows
            users to leave a new comment."
              projectStacks={bandSiteStack}
              projectImageSrc="/images/bandsite-preview.png"
              projectImageAlt="BandSite preview"
              githubLink="https://github.com/stang1207/bandsite"
              demoLink="https://bandsite.vercel.app"
              flipOrder
            />
            <ProjectItem
              projectTitle="BrainFlix"
              projectDescription="A single page application for a video platform where users can post a new video and comment."
              projectStacks={brainflixStack}
              projectImageSrc="/images/brainflix-preview.png"
              projectImageAlt="BrainFlix project preview"
              githubLink="https://github.com/stang1207/brainflix"
              demoLink="https://brainflix-frontend.vercel.app/"
            />
            <ProjectItem
              projectTitle="Todo"
              projectDescription="A simple todo app that allows users to create, read, update, and delete todo items."
              projectStacks={todoStack}
              projectImageSrc="/images/todo-preview.png"
              projectImageAlt="Todo app preview"
              githubLink="https://github.com/stang1207/todo-redux"
              demoLink="https://todo-redux-nine.vercel.app/"
              flipOrder
            />
            <ProjectItem
              projectTitle="In-Stock (Backend)"
              projectDescription="An inventory management app in which I was tasked with constructing the backend."
              projectStacks={inStockStack}
              projectImageSrc="/images/instock-preview.png"
              projectImageAlt="In-Stock project preview"
              githubLink="https://github.com/stang1207/bandsite"
              demoLink="https://bandsite.vercel.app"
              noDemo
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};
export default Projects;
