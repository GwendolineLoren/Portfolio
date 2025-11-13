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

      <style jsx>{`
        .aboutPage {
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fff0f5; /* light pastel background */
          color: #ff6f91; /* soft pink text */
        }

        .breadcrumbs {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .breadcrumbs a {
          color: #ffa8c5;
          text-decoration: none;
        }

        .breadcrumbs a:hover {
          color: #ff6f91;
        }

        .intro {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .profileImage img {
          width: 150px;
          height: 150px;
          border: 4px solid #ffb3c1;
          transition: transform 0.3s ease-in-out;
        }

        .profileImage img:hover {
          transform: scale(1.05);
        }

        .introText h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .introText p {
          font-style: italic;
          line-height: 1.6;
          max-width: 500px;
        }

        .eduAndWork {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .card {
          flex: 1;
          padding: 1rem;
          border-radius: 12px;
          background-color: #ffe6f0; /* soft pastel pink card */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .edu h3,
        .work h3 {
          color: #ff4d79; /* deeper pink for headings */
          margin-bottom: 1rem;
        }

        .job hr {
          border: 0.5px solid #ffb3c1;
          margin: 0.5rem 0;
        }

        .priorEduDivs {
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  );
}
