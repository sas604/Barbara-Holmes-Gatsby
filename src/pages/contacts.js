import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useForm } from '../utils/hooks';

const ContactPageStyles = styled.div`
  .form-wrapper {
    background-color: var(--gray);
  }
  .gatsby-image-wrapper {
    max-height: 50vh;
  }
  h1,
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  h1 {
    padding: 5rem 1.5rem 1rem;
    font-weight: 600;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.1rem);
    line-height: 1.3;
    color: var(--white);
    text-transform: uppercase;
  }
  form {
    margin: 0 auto;
    padding: 0 1.5rem 3rem;
    position: relative;
    font-size: 1rem;
  }
  button {
    padding: 0.5em 1em;
    margin-top: 1em;
    font-style: italic;
    font-weight: 600;
    border: 1px solid;
    background: none;
    color: var(--gold-bright);
    cursor: pointer;
    min-width: 150px;
  }
  button:disabled {
    background-color: var(--white);
    border: transparent;
    pointer-events: none;
    color: var(--black);
  }
  .field {
    overflow: hidden;
    display: flex;
    flex-flow: column-reverse;
  }
  .field:not(:first-of-type) {
    margin-top: 1em;
  }
  label,
  input {
    color: var(--white);
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input,
  textarea {
    font-size: 1em;
    border: 0;
    border-bottom: 1px solid var(--white);
    appearance: none;
    border-radius: 0;
    padding: 0.5em 0.3em;
    cursor: text;
    background-color: transparent;
  }
  input:focus,
  textarea :focus {
    outline: 0;
    background-color: var(--white);
    border-bottom: 1px solid #666;
  }
  input:placeholder-shown + label,
  textarea:placeholder-shown + label {
    cursor: text;
    flex: 66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125em) scale(1.3);
  }
  input::placeholder,
  textarea::placeholder {
    opacity: 0;
    transition: inherit;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }
  input:not(:placeholder-shown) + label,
  input:focus + label,
  textarea:not(:placeholder-shown) + label,
  textarea:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
    color: var(--white);
  }
  input:not(:placeholder-shown),
  textarea:not(:placeholder-shown) {
    color: var(--black);
    background-color: var(--white);
  }
  .status {
    color: var(--white);
    font-size: 1.3em;
    margin: 0;
  }
  @media (min-width: 960px) {
    display: flex;
    height: 100vh;
    .gatsby-image-wrapper {
      background-color: var(--blue);
      flex: 55%;
      max-height: unset;
      height: 100%;
      img {
        opacity: 0.4 !important;
      }
    }
    .form-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 45%;
      position: relative;
      background-color: transparent;
      background-color: var(--gray);
    }
    h1,
    form {
      margin: 0;
    }
    .form-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      right: 99.9%;
      width: 30%;
      height: 100%;
      background-color: var(--gray);
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }
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
      .then((response) => console.log(response.body))
      .then(() => {
        console.log('succes');
        setStatus('success');
        setMessage(
          'Thank you,Your message has been successfully sent. I will contact you very soon!'
        );
      })
      .catch((error) => {
        setStatus('error');
        setMessage('Oops, something went wrong try one more time');
      });
  };
  useEffect(() => {
    if (status === 'success') {
      const id = setTimeout(() => {
        setStatus('idle');
        reset();
        setMessage('');
      }, 3000);
      return () => clearInterval(id);
    }
  });
  return (
    <Layout>
      <SEO title="Contacs" />
      <ContactPageStyles>
        <GatsbyImage
          fluid={data.image.fluid}
          alt={data.image.fluid.originalName}
        />
        <div className="form-wrapper">
          <h1>Send me a message</h1>
          <form onSubmit={submitForm}>
            {message && <p className="status">{message}</p>}
            <div className="field">
              <input
                type="text"
                onChange={updateValues}
                value={values.name}
                name="name"
                required
                placeholder="Your name"
                id="name"
              />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="field">
              <input
                required
                type="text"
                onChange={updateValues}
                value={values.subject}
                name="subject"
                placeholder="Subject"
                id="subject"
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="field">
              <input
                required
                type="email"
                onChange={updateValues}
                value={values.email}
                name="email"
                placeholder="Your email"
                id="email"
              />
              <label htmlFor="email">Your email</label>
            </div>
            <div className="field">
              <textarea
                required
                onChange={updateValues}
                value={values.body}
                name="body"
                placeholder="Your message"
                id="body"
                rows="7"
              />
              <label htmlFor="body">Your message</label>
            </div>
            <div className="field" style={{ display: 'none' }}>
              <label htmlFor="sticky">
                Don’t fill this out if you’re human:{' '}
                <input
                  type="text"
                  onChange={updateValues}
                  value={values.sticky}
                  name="sticky"
                  placeholder="sticky"
                  id="sticky"
                />{' '}
              </label>
            </div>

            <button disabled={status === 'loading'} type="submit">
              {status === 'loading' ? 'Loadng...' : 'Send'}
            </button>
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
