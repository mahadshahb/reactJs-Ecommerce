import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.4386065771623!2d71.42250321444733!3d30.19602671835226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b334cabfe29cd%3A0x975957c22207d539!2sMultan%20International%20Airport!5e0!3m2!1sen!2s!4v1665652629767!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xvoyqdap" method="POST" className="contact-inputs">
            <input
              placeholder="username"
              name="username"
              type="text"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              requried
              autoComplete="off"
              name="Email"
            />
            <textarea
              name="Message"
              autoComplete="off"
              cols="30"
              rows="10"
              required
              placeholder="Enter your Message"
            ></textarea>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
