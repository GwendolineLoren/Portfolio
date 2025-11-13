// About page
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>&gt;</span> <b>About</b>
      </div>

      {/* Intro Section */}
      <div className="aboutPage">
        <div className="intro">
          <div className="profileImage">
            <Image src="/profile.jpg" roundedCircle style={{ width: "180px" }} />
          </div>
          <div className="introText">
            <h2>Hello! I’m Gwendoline</h2>
            <p>
              I’m a friendly, easygoing person passionate about web development, dancing, and reading. I love meeting new people and tackling challenges. Currently, I’m diving deep into Full Stack Web Development, creating useful and elegant websites along the way.
            </p>
          </div>
        </div>

        {/* Education & Work */}
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

      {/* Minimal page-specific styles */}
      <style jsx>{`
        .breadcrumbs {
          font-size: 0.9rem;
          margin: 1rem 0;
          color: #666;
        }
        .breadcrumbs a {
          color: #1155cc; /* simple link color */
          text-decoration: none;
        }
        .breadcrumbs a:hover {
          text-decoration: underline;
        }

        .aboutPage {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem 4rem;
        }

        .intro {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .introText h2 {
          margin-bottom: 0.5rem;
        }

        .introText p {
          font-size: 1rem;
          line-height: 1.5rem;
        }

        .eduAndWork {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .card {
          flex: 1;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
        }

        .priorEduDivs {
          border-radius: 8px;
          background-color: #fff;
          margin: 0.5rem 0;
          padding: 0.5rem;
          border: 1px solid #ccc;
        }

        .job {
          background-color: #fff;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
        }

        .job hr {
          margin: 0.5rem 0;
          border: none;
          border-top: 1px solid #ccc;
        }

        .job p {
          font-size: 0.9rem;
          line-height: 1.4rem;
        }
      `}</style>
    </Layout>
  );
}
