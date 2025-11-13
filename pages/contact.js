// Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 500,
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// Contact page
export default function Contact() {
  return (
    <Layout>
      <div className="breadcrumbs">
        <a href="/">Home</a> {">"} <b>Contact</b>
      </div>

      <div className="contactPage">
        <div className="para">
          <h2>Contact</h2>

          <div>
            <b>Name:</b> Gwendoline Loren Dedda Maganga
          </div>

          <div>
            <b>Email:</b>{" "}
            <a href="mailto:deddagwen@gmail.com">deddagwen@gmail.com</a>
          </div>

          <div>
            <b>GitHub repository:</b>{" "}
            <a
              href="https://github.com/GwendolineLoren"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/GwendolineLoren
            </a>
          </div>

          <div>
            <b>LinkedIn:</b>{" "}
            <a
              href="https://linkedin.com/in/gwendoline-loren-dedda-maganga-aa693b168"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gwendoline-loren-dedda-maganga-aa693b168
            </a>
          </div>
        </div>

        <div className="image">
          <Image
            src="/static/images/businessImg.jpg"
            alt="Laptop and books"
            style={imgStyle}
          />
        </div>
      </div>

      {/* Styling for contact page */}
      <style jsx>{`
        .contactPage {
          display: flex;
          flex-direction: row;
          padding: 1rem 4rem 1rem 4rem;
        }
        .para {
          flex: 2;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .para div {
          margin-top: 0.5rem;
        }
        .image {
          flex: 1;
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}
