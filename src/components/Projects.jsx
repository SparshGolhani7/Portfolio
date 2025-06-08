import { FaShoppingCart, FaRobot, FaHome, FaTools, FaChartLine } from 'react-icons/fa';

function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="card">
        <h3><FaShoppingCart /> 1. Men's Formal (US-Based E-commerce Platform)</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Developed a fully functional admin panel using ReactJS and Micro Frontend architecture.</li>
          <li><i className="fas fa-circle"></i> Included CMS, SEO tools, user listing, product management, contact forms, and reviews module.</li>
          <li><i className="fas fa-circle"></i> Integrated dynamic charts for last month's sales and analytics dashboards.</li>
          <li><i className="fas fa-circle"></i> Frontend built with XDS pattern for SEO optimization and modularity.</li>
          <li><i className="fas fa-circle"></i> Worked with a 3-member agile team to deliver within deadlines.</li>
          <li><i className="fas fa-circle"></i> Implemented secured authentication and role-based admin privileges.</li>
          <li><i className="fas fa-circle"></i> Used Redux for effective state management and modular logic separation.</li>
          <li><i className="fas fa-circle"></i> Handled API integration and backend communication using Axios.</li>
          <li><i className="fas fa-circle"></i> Deployed the platform on Vercel with build optimizations.</li>
          <li><i className="fas fa-circle"></i> Ensured Lighthouse-optimized performance and responsive UI across all devices.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaRobot /> 2. Hire2Inspire – AI-Powered Recruitment Platform</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Developed a recruitment SaaS platform for employers and agencies (no job seekers).</li>
          <li><i className="fas fa-circle"></i> Integrated OpenAI API for auto-resume parsing, job summary generation, and fitment matching (F&R).</li>
          <li><i className="fas fa-circle"></i> Enabled smart filtering and resume previews in employer and agency dashboards.</li>
          <li><i className="fas fa-circle"></i> Used LinkedIn PSL-like system for enriching job profiles and agency analytics.</li>
          <li><i className="fas fa-circle"></i> Built reusable components and real-time features using React and Redux.</li>
          <li><i className="fas fa-circle"></i> Included modules for draft email generation, JD parsing, and skill matrix views.</li>
          <li><i className="fas fa-circle"></i> Managed session handling, logout tracking, and notification sounds.</li>
          <li><i className="fas fa-circle"></i> Collaborated with team on OpenAI response formatting and reliability handling.</li>
          <li><i className="fas fa-circle"></i> Integrated Firebase for real-time notifications and data updates.</li>
          <li><i className="fas fa-circle"></i> Ensured scalability of codebase for future AI model integrations.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaShoppingCart /> 3. Mor Luxury – Beauty E-commerce Platform</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Built pixel-perfect UI in React based on Figma and Adobe XD designs.</li>
          <li><i className="fas fa-circle"></i> Used Redux to handle cart, user, and order data flow efficiently.</li>
          <li><i className="fas fa-circle"></i> Integrated secure payment gateways and user-friendly checkout flow.</li>
          <li><i className="fas fa-circle"></i> Created SCSS-based components for theme consistency and reusable styling.</li>
          <li><i className="fas fa-circle"></i> Synced with real-time APIs for inventory, pricing, and order history.</li>
          <li><i className="fas fa-circle"></i> Handled SEO meta-tagging and structured data rendering for search engines.</li>
          <li><i className="fas fa-circle"></i> Tested application using unit tests and cross-browser compatibility checks.</li>
          <li><i className="fas fa-circle"></i> Designed mobile-first responsive layout with optimized loading times.</li>
          <li><i className="fas fa-circle"></i> Created wishlist, rating, and review modules with live updates.</li>
          <li><i className="fas fa-circle"></i> Contributed to deployment and CI/CD using GitHub Actions.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaHome /> 4. Raeden – Real Estate Rental Web App</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Developed map-based property browsing using Google Maps API and geolocation filters.</li>
          <li><i className="fas fa-circle"></i> Integrated Auth0 authentication for secure session management.</li>
          <li><i className="fas fa-circle"></i> Implemented payment gateway for property booking and invoicing.</li>
          <li><i className="fas fa-circle"></i> Engineered seamless ERP integration for real-time property data syncing.</li>
          <li><i className="fas fa-circle"></i> Built property listings with search filters and pagination.</li>
          <li><i className="fas fa-circle"></i> Handled image gallery uploads with compression and cropping support.</li>
          <li><i className="fas fa-circle"></i> Enabled dynamic availability calendars for rental scheduling.</li>
          <li><i className="fas fa-circle"></i> Created contact and inquiry management dashboard for owners.</li>
          <li><i className="fas fa-circle"></i> Integrated admin panel for managing listings and user roles.</li>
          <li><i className="fas fa-circle"></i> Optimized Lighthouse performance and SEO score for public listings.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaTools /> 5. Cloud Rent – Equipment Leasing Portal</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Designed and developed leasing flows and booking systems in React.</li>
          <li><i className="fas fa-circle"></i> Built schedule and inventory view modules using Redux and custom hooks.</li>
          <li><i className="fas fa-circle"></i> Integrated REST APIs for order tracking, status updates, and cancellation logic.</li>
          <li><i className="fas fa-circle"></i> Handled vendor and machine profile management modules.</li>
          <li><i className="fas fa-circle"></i> Implemented OTP-based secure login and registration flow.</li>
          <li><i className="fas fa-circle"></i> Created dynamic calendar views for rental duration selection.</li>
          <li><i className="fas fa-circle"></i> Integrated rating and feedback system from clients.</li>
          <li><i className="fas fa-circle"></i> Worked with 3-person team in agile sprints to complete MVP on schedule.</li>
          <li><i className="fas fa-circle"></i> Tested with real client data and applied feedback iteratively.</li>
          <li><i className="fas fa-circle"></i> Deployed production build using Vercel and monitored with Datadog.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaChartLine /> 6. Light Money – ESG Investment Dashboard</h3>
        <ul>
          <li><i className="fas fa-circle"></i> Built React dashboard for Environmental, Social, and Governance (ESG) metric visualization.</li>
          <li><i className="fas fa-circle"></i> Integrated third-party APIs for ESG scores and dynamic graph updates.</li>
          <li><i className="fas fa-circle"></i> Enabled filters and advanced search by sector, rating, and geography.</li>
          <li><i className="fas fa-circle"></i> Used Redux and memoization for efficient data handling.</li>
          <li><i className="fas fa-circle"></i> Designed modular, SCSS-based components with theme support.</li>
          <li><i className="fas fa-circle"></i> Implemented export features (CSV, PDF) for investment data reports.</li>
          <li><i className="fas fa-circle"></i> Built accessibility-compliant charts and tooltips.</li>
          <li><i className="fas fa-circle"></i> Collaborated with data scientists for chart logic and score calculations.</li>
          <li><i className="fas fa-circle"></i> Included login, dashboard, and export modules with detailed logs.</li>
          <li><i className="fas fa-circle"></i> Tested ESG algorithms with test datasets in staging before release.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
