import calculator from '../images/VocalCalc.png';
import portfolio from '../images/portfolio.png';



// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'VocalCalc',
    description: 
      'VocalCalc is a Voice-Activated Calculator that allows users to perform basic arithmetic operations using voice commands. This application processes voice input to perform operations like addition, subtraction, multiplication, and division, while providing both visual and audible feedback.',
    skills: ['Python'],
    image: calculator,
    links: {
      github: 'https://github.com/Manav5703/VocalCalc',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/Manav5703/portfolio',
      preview: 'https://manavprofile.netlify.app/',
    },
  },
];
