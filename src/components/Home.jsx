import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="container">
      {/* Profile Header */}
      <div className="card">
        <h1>Sparsh Golhani</h1>
        <p>Senior Software Developer</p>
        <p>
          Indore, M.P | +91-9340357914 |{" "}
          <MdEmail style={{ verticalAlign: 'middle' }} />{" "}
          <a href="mailto:sgmonu007@gmail.com">sgmonu007@gmail.com</a>
        </p>
      </div>

      {/* Professional Summary */}
      <div className="card">
        <h2>Professional Summary</h2>
        <p>
          I am a passionate and performance-oriented Full-Stack Developer with over 3 years of experience in developing modern web applications using cutting-edge technologies. My work spans across various domains, including AI-powered job platforms, real estate rental systems, industrial equipment portals, and e-commerce platforms tailored for U.S.-based markets.
        </p>
        <p>
          With a strong command over frontend frameworks like React.js, Next.js, and Angular—paired with backend technologies like Node.js, Express, and Firebase—I specialize in building dynamic, modular, and scalable applications. I have hands-on experience integrating OpenAI APIs for resume parsing, job matching (F&R), and summary generation in production-grade platforms.
        </p>
        <p>
          Additionally, I have worked with micro frontend architectures, implemented SEO strategies using server-side rendering, and delivered API-first solutions for both admin panels and public websites. My development workflow is highly collaborative, detail-driven, and focused on real-world performance and usability.
        </p>
      </div>
    </div>
  );
}

export default Home;
