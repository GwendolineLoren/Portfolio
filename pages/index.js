// Import components
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
import Link from "next/link";

// Styling for image
const imgStyle = {
  width: 300,
  border: "1px #c9c9c9 solid",
  borderRadius: "10px",
  boxShadow: "2px 2px 8px #c9c9c9",
  opacity: 0.8,
};

// Home page
export default function Home() {
  return (
    <Layout>
      <div className="breadcrumbs">Home</div>

      <div className="indexDiv">
        <div className="image">
          <Image
            src="/static/images/cv-picture.jpeg"
            alt="Gwendoline Loren"
            style={imgStyle}
          />
        </div>

        <div className="para">
          <p>
            I am a Full Stack Web Developer, and my name is Evan Malherbe. Please feel free to browse the pages of this website to learn more{" "}
            <Link href="/about">about me</Link> and see some of my recent{" "}
            <Link href="/projects">coding work</Link>. Both front-end and back-end technologies/frameworks are second nature to me:
          </p>

          <div className="twoLists">
            <div className="list">
              <ul>
                <li>MongoDB</li>
                <li>JWT (JSON Web Tokens)</li>
                <li>Next.js</li>
                <li>REST APIs</li>
                <li>Bootstrap</li>
                <li>Git and GitHub</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="list">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>

          <p>
            <Link href="/contact">Contact me</Link> with any questions or if you believe I would be a good fit for your business.
          </p>
        </div>
      </div>

      {/* Styling for home page */}
      <style jsx>{`
        .indexDiv {
          display: flex;
          flex-direction: row;
          padding: 0 10px;
          margin-top: 5%;
          width: 95%;
          float: right;
        }
        .breadcrumbs {
          font-weight: bold;
        }
        .para {
          width: 80%;
          display: flex;
          flex-direction: column;
          padding-right: 1rem;
        }
        .image {
          margin-left: -1%;
          margin-top: -4%;
          padding: 16px;
        }
        ul {
          margin-top: 0.5rem;
        }
        li {
          line-height: 1.7rem;
        }
        .twoLists {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </Layout>
  );
}
