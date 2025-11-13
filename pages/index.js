//Import components
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
export default (props) => (
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
        <div>
          {" "}
          I am a Full Stack Web Developer, and my name is Evan Malherbe. Please feel free to browse the pages of this website to learn more {" "} <a href="about">about me</a> and to see some of my recent{" "} <a href="projects">recent coding work</a> coding work. Both front end and back end technologies/frameworks are second nature to me:
        </div>
        <div className="twoLists">
          <div className="list">
            <ul>
              <li>MongoDB</li>
              <li>JWT (JSON web tokens)</li>
              <li>Next.js</li>
              <li>REST APIs</li>
              <li>Bootstrap</li>
              <li>Git and Github</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="list">
            {" "}
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>{" "}
          with any questions or if you believe I would be a good fit for your
          business.
        </div>
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
        margin-left:-1%;
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
