import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from '../utils/hooks';

export default function Contacts({ data }) {
  const [values, updateValues] = useForm({
    name: '',
    email: '',
    subject: '',
    body: '',
    sticky: '',
  });
  return (
    <Layout>
      <div>
        <GatsbyImage
          fluid={data.image.fluid}
          alt={data.image.fluid.originalName}
        />
        <h1>Contact Me</h1>
        <form>
          <fieldset>
            <legend>Send me a message</legend>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query {
    image: imageSharp(
      fluid: { originalName: { eq: "04-Untitled-No.-5-1.jpg" } }
    ) {
      fluid {
        originalName
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
