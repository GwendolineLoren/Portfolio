// Import link component from next
import Link from "next/link";


/* I had difficulty getting the image to work, as it said it could not find the resource. Eventually changed 
the directory for "public/static/images" and it worked. Figured it out with this website's help:
https://stackoverflow.com/questions/49435368/nextjs-unable-to-load-images-from-static-folder */

const Header = () => (
  <div className="Heading">
    <h1>Gwendoline Loren</h1>
    <h2>Developer portfolio</h2>

    <div className="linksClass">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>

    {/* Styling for header #dedede*/}
    <style jsx>{`
    a {
        margin-right: 1rem;
    }
    .Heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1.9rem;
        border-bottom: 1px solid rgb(115, 146, 238);
        box-shadow: 3px 0px 8px rgb(115, 146, 238);
        background-color: rgb(180, 177, 235);

    }
    .linksClass {
        margin-left: auto;
        margin-right: 1rem;
    }
    h1 {
        margin-top: -1.7rem;
        display: inline;
        margin-right: 1rem;
        font-size: 2rem;
    }
    h2 {
      margin-bottom: -2.8rem;
      margin-left: -17rem;
      font-size: 1.5rem;
      font-family: monospace;
    }

    `}</style>
  </div>
);

export default Header;
