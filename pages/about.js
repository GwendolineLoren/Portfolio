// Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 220,
  margin: "0rem 1rem 0rem 1rem",
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// About page
export default function About() {
  return (
    <Layout>
      <div className="breadcrumbs">
        <a href="/">Home</a> {">"} <b>About</b>
      </div>

      <div className="aboutPage">
        <div className="paraAndImage">
          <div className="para">
            <h2>About</h2>
            <p>
              Gwendoline Loren Dedda Maganga is my name, and I am a friendly, easygoing person who enjoys meeting new people. I enjoy taking on new tasks and find the world to be a fascinating place. Reading, dancing, and web development are my greatest passions. I am inspired by the prospect of a rewarding career in Full Stack Web Development, and I am having a blast learning how to create helpful websites.
            </p>
          </div>
        </div>

        <div className="eduAndWork">
          <div className="edu">
            <h3>Education</h3>
            <p>
              My prior education is listed below:
              <br />
              <div className="priorEduDivs">
                <b>HyperionDev</b> <br />
                Full Stack Web Developer Bootcamp <br />
                2022
              </div>
              <div className="priorEduDivs">
                <b>Damelin College</b> <br />
                Diploma in Financial Accounting <br />
                2020
              </div>
            </p>
          </div>

          <div className="work">
            <h3>Work Experience</h3>

            <div className="job">
              <b>Junior Accountant</b> <br />
              Kiwondo's Sushi (Pty) Ltd (October 2019 to April 2020)
              <hr />
              <p>
                Responsible for administration of accounts receivable and accounts payable, maintaining the integrity of the general ledger, and working with MS Office, especially Excel, with strong proficiency.
              </p>
            </div>

            <div className="job">
              <b>Sales Agent</b> <br />
              CompCare Wellness Medical (February 2018 to April 2019)
              <hr />
              <p>
                Promoted the brand and company products to clients, engaged directly with customers, advertised product benefits, and followed up on prospective customers. Assisted international students from French-speaking countries with English difficulties. Helped with medical aid applications and contract signings.
              </p>
            </div>

            <div className="job">
              <b>Primary School Educator</b> <br />
              Damelin College (April to November 2019)
              <hr />
              <p>
                Assisted senior lecturers and supported first-year students in financial accounting modules.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styling for about page */}
      <style jsx>{`
        .job p {
          line-height: 1.3rem;
          font-size: 0.9rem;
          padding-top: 0.5rem;
        }
        hr {
          padding: 0;
          margin: 0;
        }
        .aboutPage {
          display: flex;
          flex-direction: column;
          padding: 1rem 4rem 1rem 4rem;
        }
        .paraAndImage {
          display: flex;
          flex-direction: row;
          width: 100%;
        }
        .para {
          width: 78%;
        }
        .image {
          margin-left: auto;
        }
        .edu {
          flex: 1;
        }
        .work {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .job {
          border: 1px solid #c4c4c4;
          border-radius: 8px;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          background-color: #f6f8fa;
        }
        .eduAndWork {
          display: flex;
          flex-direction: row;
        }
        .priorEduDivs {
          border: 1px solid #c4c4c4;
          background-color: #d9e5ef;
          margin: 0.5rem 1rem 0.5rem 0rem;
          padding: 0.5rem;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
}
