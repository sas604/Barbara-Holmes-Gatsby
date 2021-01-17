import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const IndexPageStyles = styled.section`
  .hero {
    height: 75vh;
  }
  header {
    position: relative;
    z-index: 3;
    margin-top: -6rem;

    padding: 0 1.5rem;
    text-transform: uppercase;
    color: var(--white);
  }
  h1 {
    font-weight: 300;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.3rem);
    line-height: 1;
  }
  .tag-line {
    font-size: clamp(14px, 4vw, 1rem);
  }
`;
const HeroSectionStyles = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(12, minmax(50px, 1fr));
    gap: 1rem 20px;
    padding: 3rem 1.5rem 5rem;
    min-height: 100vh;
    .hero {
      grid-column: 5/-1;
      grid-row: 1;
      align-self: flex-end;
      background-color: black;
    }
    header {
      grid-row: 1;
      align-self: flex-end;
      grid-column: 1/-1;
      z-index: 5;
      padding: 0;
      padding-bottom: 3rem;
      color: var(--blue);
      h1 {
        font-size: 5rem;
        background: linear-gradient(
          90deg,
          var(--blue) 33.9%,
          var(--white) 33.9%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .tag-line {
        font-size: 1.2rem;
      }
    }
  }
`;

const AboutSectionStyles = styled.section`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem 10px;
  margin-top: 2.4rem;
  padding: 4rem 1.5rem;
  .mug {
    grid-column: 3/5;
  }
  .about {
    grid-row: 1;
    grid-column: 1/3;
    align-self: end;
  }
  h2 {
    font-size: 1.6rem;
    grid-column: span 4;
  }
  p {
    text-indent: 2ch;
    margin: 0;
    grid-column: span 4;
  }
  p + p {
    text-indent: 0;
  }
  .bodyImage {
    grid-column: 1/4;
    max-height: 200px;
  }
  @media (min-width: 960px) {
    display: grid;
    /* justify-content: center; */
    grid-template-columns: repeat(12, minmax(50px, 90px));
    max-width: none;
    gap: 1rem 20px;
    margin: 0;
    .mug {
      grid-column: 1/3;
      grid-row: 2/4;
      align-self: start;
    }
    .about {
      grid-column: 3;
    }
    p {
      grid-column: 1/7;
    }
    p:nth-of-type(1),
    p:nth-of-type(2) {
      grid-column: 3/8;
    }

    .bodyImage {
      grid-column: 8/-1;
      grid-row: span 3;
      max-height: 500px;
      align-self: center;
    }
  }
`;
export default function IndexPage({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <SEO title="Home Page" />
      <IndexPageStyles>
        <HeroSectionStyles>
          <Img
            className="hero"
            fluid={data.titleImage.fluid}
            alt="instalation No 5"
          />
          <header>
            <h1>Barbara Holmes</h1>
            <span className="tag-line">Artist | Designer | Educator</span>
          </header>
        </HeroSectionStyles>
        <AboutSectionStyles>
          <Img
            className="mug"
            fluid={data.mugShot.fluid}
            alt="Barbara Holmes"
          />

          <h2 className="about">About</h2>
          <p>
            Barbara Holmes was born and raised in Southern California. She
            attended Brigham Young University for her undergraduate studies and
            did her graduate work at San Diego State University where she
            received her MFA. Barbara has exhibited nationally and
            internationally, is a Sam & Alfreda Maloof scholarship recipient,
            and has been awarded art residencies at Anderson Ranch Arts Center,
            Capital City Arts Initiative, Facebook, I-Park, Penland School of
            Crafts and Recology.
          </p>
          <p>
            Her artwork often utilizes material reclaimed from the waste stream,
            transforming seemingly untidy material into carefully crafted forms
            and site-specific installations. She has been commissioned for
            projects at Facebook Headquarters, for collectors Laura and Gary
            Lauder and has work in the permanent collections at San Francisco
            Museum of Art (SFMOMA) and Recology (et al.). Barbara has extensive
            experience in museum display and exhibitions as a lead carpenter and
            preparator working in renowned institutions such as the San Diego
            Museum of Art, Berkeley Art Museum and Pacific Film Archive, and
            Oakland Museum of California. She has taught art and design for over
            20 years; as a visiting lecturer at the University of
            Wisconsin-Madison, at California College of the Arts in San
            Francisco, and currently as an Associate Professor and Director of
            the Art Gallery within the Art Department at Saddleback College.
          </p>
          <Img
            className="bodyImage"
            fluid={data.bodyImage.fluid}
            alt="artwork"
          />
          <h2>Artist Statement</h2>
          <p>
            Aesthetically, I am a formalist at heart. Using reclaimed material
            that is often untidy and muddled in its appearance and redeeming it
            into a carefully crafted object is a pleasurable part of my process.
            At first glance my work may appear oddly familiar or utilitarian,
            but on closer investigation of the materials and their
            re-contextualization, the viewer may need to reconsider initial
            ideas as they discover more layers of meaning.
          </p>
          <p>
            My artistic response to the wide range of waste material and objects
            found at the city dump (and beyond) has resulted in a collection of
            varied works. One main goal was to work more quickly, responsively,
            intuitively, and allow my creative desires to run their course. This
            direct way of working has resulted in a few fairly divergent or
            branching bodies of work. This might seem somewhat schizophrenic in
            its approach, but the process of transforming materials such as
            lattice, foam, bric-a-brac and the like, with an attention to
            details in way of form, color, patterning, and presentation, are
            constants that link the work together.
          </p>
          <p>
            Over the years I have seen and had access to a wealth of refuse that
            seems an endless stream in our current culture. In the process I
            have gained a greater appreciation for conserving consumption and
            waste, and have found new meaning in Modernism’s adopted motto,
            “less is more”.
          </p>
        </AboutSectionStyles>
      </IndexPageStyles>
    </motion.div>
  );
}

export const query = graphql`
  query MyQuery {
    titleImage: imageSharp(
      fluid: { originalName: { eq: "01-Untitled-No.-5-1.jpg" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    mugShot: imageSharp(fluid: { originalName: { eq: "mugshot.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    bodyImage: imageSharp(
      fluid: { originalName: { eq: "09-Untitled-No.-5-1.jpg" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
