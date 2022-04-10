import Head from 'next/head';
import { Box, Flex, Container, Heading } from '@chakra-ui/react';
import ProjectItem from '../src/components/ProjectItem';

const Projects = () => {
  // List of projects to display on the page
  const projectList = [
    {
      name: 'Repurpo',
      description:
        'A platform for repurposing old things by donating them to others',
      imgSrc: '/images/repurpo.png',
      githubLink: 'https://github.com/stang1207/repurpo',
      demoLink: 'https://repurpo.vercel.app/',
      techs: [
        { bg: 'blackAlpha.900', text: 'Next' },
        { bg: 'green.700', text: 'Chakra UI' },
        { bg: 'purple.700', text: 'Prisma' },
        { bg: 'gray.700', text: 'Supabase' },
      ],
    },
    {
      name: 'Portfolio',
      description: `This is the portfolio site tha you're looking at right now!`,
      imgSrc: '/images/portfolio-preview.png',
      githubLink: 'https://github.com/stang1207/portfolio-site',
      demoLink: 'https://portfolio-site-iota-topaz.vercel.app/',
      techs: [
        { bg: 'blackAlpha.900', text: 'Next' },
        { bg: 'green.700', text: 'Chakra UI' },
        { bg: 'purple.700', text: 'Framer motion' },
      ],
    },
    {
      name: 'Todo App',
      description: `A todo app that allows users to create, read, update, and delete todo items`,
      imgSrc: '/images/todo-preview.png',
      githubLink: 'https://github.com/stang1207/todo-redux',
      demoLink: 'https://todo-redux-nine.vercel.app/',
      techs: [
        { bg: 'gray.700', text: 'Next' },
        { bg: 'green.700', text: 'Chakra UI' },
        { bg: 'purple.700', text: 'Redux Toolkits' },
      ],
    },
    {
      name: 'BrainFlix',
      description:
        'A single page application for a video platform where users can post a new video and comment',
      imgSrc: '/images/brainflix-preview.png',
      githubLink: 'https://github.com/stang1207/brainflix',
      demoLink: 'https://brainflix-frontend.vercel.app/',
      techs: [
        { bg: 'blue.700', text: 'React' },
        { bg: 'green.700', text: 'Node' },
        { bg: 'gray.700', text: 'Express' },
        { bg: 'pink.700', text: 'Sass' },
      ],
    },
    {
      name: 'BandSite',
      description: `A fully responsive website for a musical band that also allows
      users to leave a new comment`,
      imgSrc: '/images/bandsite-preview.png',
      githubLink: 'https://github.com/stang1207/bandsite',
      demoLink: 'https://bandsite.vercel.app',
      techs: [
        { bg: 'orange.700', text: 'Html' },
        { bg: 'pink.700', text: 'Sass' },
        { bg: 'yellow.700', text: 'JavaScript' },
        { bg: 'gray.700', text: 'Axios' },
      ],
    },
    {
      name: 'InStock',
      description:
        'An inventory management app in which I was tasked with constructing the backend',
      imgSrc: '/images/instock-preview.png',
      githubLink: 'https://github.com/stang1207/instock-backend',
      demoLink: null,
      techs: [
        { bg: 'green.700', text: 'Node' },
        { bg: 'gray.700', text: 'Express' },
        { bg: 'purple.700', text: 'Jira & Agile' },
        { bg: 'red.700', text: 'Joi' },
        { bg: 'blue.700', text: 'REST API' },
      ],
    },
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
            {projectList.map((project, index) => (
              <ProjectItem
                key={index}
                projectTitle={project.name}
                projectDescription={project.description}
                projectStacks={project.techs}
                projectImageSrc={project.imgSrc}
                projectImageAlt={project.description}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                flipOrder={index % 2 === 0}
              />
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
};
export default Projects;
