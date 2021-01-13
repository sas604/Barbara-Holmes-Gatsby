import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useForm } from '../utils/hooks';

const ContactPageStyles = styled.div`
  form {
    position: relative;
  }
  form > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: var(--white);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function Contacts({ data }) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [values, updateValues, reset] = useForm({
    name: '',
    email: '',
    subject: '',
    body: '',
    sticky: '',
  });
  const submitForm = (e) => {
    e.preventDefault();
    setStatus('loading');
    fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        setStatus('success');
        setMessage(response.message);
      })
      .catch((error) => {
        setStatus('error');
        console.log(error);
      });
  };
  useEffect(() => {
    if (status === 'success') {
      const id = setTimeout(() => {
        setStatus('idle');
        reset();
      }, 1000);
      return () => clearInterval(id);
    }
  });
  return (
    <Layout>
      <ContactPageStyles>
        <GatsbyImage
          fluid={data.image.fluid}
          alt={data.image.fluid.originalName}
        />
        <div>
          <h1>Send me a message</h1>
          <form onSubmit={submitForm}>
            {status === 'loading' && (
              <div>
                <span>Loading...</span>
              </div>
            )}
            <input
              type="text"
              onChange={updateValues}
              value={values.name}
              name="name"
              placeholder="Your name"
              id="name"
            />
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              onChange={updateValues}
              value={values.subject}
              name="subject"
              placeholder="Subject"
              id="subject"
            />
            <label htmlFor="Subject">Subject</label>
            <input
              type="email"
              onChange={updateValues}
              value={values.email}
              name="email"
              placeholder="Your email"
              id="email"
            />
            <label htmlFor="email">Your email</label>
            <textarea
              onChange={updateValues}
              value={values.body}
              name="body"
              placeholder="Your message"
              id="body"
            />
            <label htmlFor="body">Your message</label>
            <input
              type="text"
              onChange={updateValues}
              value={values.sticky}
              name="sticky"
              placeholder="sticky"
              id="sticky"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </ContactPageStyles>
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
