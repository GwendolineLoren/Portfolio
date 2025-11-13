// About page
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <Layout>
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>&gt;</span> <b>About</b>
      </div>

      <div className="aboutPage">
        <div className="intro">
          <div className="profileImage">
            <Image src="/profile.jpg" roundedCircle />
          </div>
          <div className="introText">
            <h2>Hello! I’m Gwendoline</h2>
            <p>
              I’m a friendly, easygoing person passionate about web development, dancing, and reading. I love meeting new people and tackling challenges. Currently, I’m diving deep into Full Stack Web Development, creating useful and elegant websites along the way.
            </p>
          </div>
        </div>

        <div className="eduAndWork">
          <div className="edu card">
            <h3>Education</h3>
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
          </div>

          <div className="work card">
            <h3>Work Experience</h3>

            <div className="job">
              <b>Junior Accountant</b> <br />
              Kiwondo's Sushi (Oct 2019 – Apr 2020)
              <hr />
              <p>
                Administered accounts receivable/payable, maintained ledger integrity, and worked extensively with MS Excel.
              </p>
            </div>

            <div className="job">
              <b>Sales Agent</b> <br />
              CompCare Wellness Medical (Feb 2018 – Apr 2019)
              <hr />
              <p>
                Promoted products to clients, helped international students with English challenges, assisted with medical aid applications.
              </p>
            </div>

            <div className="job">
              <b>Primary School Educator</b> <br />
              Damelin College (Apr – Nov 2019)
              <hr />
              <p>Assisted senior lecturers and supported first-year students in financial accounting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Component-specific styles */}
      <style jsx>{`
        /* This style is ONLY for this About page */
        .introText p {
          font-style: italic; /* example: make paragraph italic just on About page */
        }

        .introText h2 {
          letter-spacing: 1px; /* unique About page styling */
        }

        /* Maybe a hover effect on profile image for About page */
        .profileImage img:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </Layout>
  );
}
