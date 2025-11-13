//Import layout component
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
export default () => (
  <Layout>

    <div className="breadcrumbs">
      <a href="/">Home</a> {">"} <b>About</b>
    </div>
    <div className="aboutPage">
      <div className="paraAndImage">
        <div className="para">
          <h2>About</h2>
          <p>
            Gwendoline Loren Dedda Maganga is my name, and I am a nice, easygoing person who enjoys meeting new people. I appreciate taking on new tasks and find the world to be a fascinating place. Reading, dancing, and web development are three of my greatest passions. I am inspired by the prospect of a rewarding career in Full Stack Web Development, and I am having a blast learning how to create helpful websites.
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
              2022 <br />
            </div>
            <div className="priorEduDivs">
              <b>Damelin college</b> <br />
              Diploma in Financial Accounting <br />
              2020
            </div>
          </p>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <div className="job">
            {" "}
            <b>Junior accountant </b> <br />
            Kiwondo's sushi (pty) Ltd (October 2019 to April 2020) <hr />
            <p>
              I was in charge of administration of account receivable and account payable, an efficient maintenance of the integrity of general ledger account and I also work on MS Ofce with a strong level of profciency in excel.

            </p>
          </div>
          <div className="job">
            <b>Sale agent</b> <br />
            CompCare wellness medical (February 2018 to April 2019) <hr />
            <p>
              Promote the brand and the company’ s
              products by selling its clients.
              Marketing lead: direct engagement with customers, advertise product benefits and follow up on prospective customers.
              Assist international students coming from french - speaking countries with English difficulties.
              Closing deals: help international students with medical aid applications and contract signature
            </p>
          </div>

          <div className="job">
            <b>Primary School Educator</b> <br />
            Dameline college (April to November 2019) <hr />
            <p>
              {" "}
              Assisting the senior lecturer to each and assist first year students in fnancial accounting modules. </p>
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

//#dedede
