// About page
export default function About() {
  return (
    <Layout>
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>&gt;</span> <b>About</b>
      </div>

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
        :root {
          --primary-color: #ff6fa3;
          --secondary-color: #fce8f1;
          --accent-color: #d6a0f2;
          --text-color: #333;
        }

        .breadcrumbs {
          font-size: 0.9rem;
          margin: 1rem 0;
          color: #666;
        }

        .breadcrumbs a {
          color: var(--primary-color);
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

        .profileImage img {
          border: 3px solid var(--primary-color);
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }

        .introText h2 {
          color: var(--primary-color);
          font-family: 'Poppins', sans-serif;
          margin-bottom: 0.5rem;
        }

        .introText p {
          font-size: 1rem;
          line-height: 1.5rem;
          color: var(--text-color);
        }

        .eduAndWork {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .card {
          flex: 1;
          background-color: var(--secondary-color);
          padding: 1rem;
          border-radius: 15px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.08);
        }

        .priorEduDivs {
          border-radius: 10px;
          background-color: #fff0f5;
          margin: 0.5rem 0;
          padding: 0.5rem;
          border: 1px solid #f5c5d7;
        }

        .job {
          background-color: #fff;
          border-radius: 10px;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
        }

        .job hr {
          margin: 0.5rem 0;
          border: none;
          border-top: 1px solid #f5c5d7;
        }

        .job p {
          font-size: 0.9rem;
          line-height: 1.4rem;
        }
      `}</style>
    </Layout>
  );
}
