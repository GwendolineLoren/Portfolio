// Footer component for every page border-bottom: 1px solid #97afa3; border-top: 1px solid #97afa3;
// #f0f0f0
const Footer = () => (
  /* I used the following website to get my footer to stay at the bottom of the pages:
  https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/ */
  <div className="footer">
    © Copyright Gwendoline Dedda 2022
    <style jsx>{`
      .footer {
        background-color: rgb(167, 163, 240);
        padding: 1rem;
        border-top: 1px solid rgb(115, 146, 238);

        text-align: center;
        position: relative;
        bottom: 0;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Footer;
