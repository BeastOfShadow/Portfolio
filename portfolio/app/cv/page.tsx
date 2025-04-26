// app/cv/page.tsx

export default function CVPage() {
  return (
    <div className="pb-3 container">
      <div className="gradient">
        <p className="pb-1 big-title lh-less">WORKING EXPERIENCES</p>
        <p>
          Here are some of my key work experiences, ranging from web development to other software-related roles.
        </p>
      </div>

      {/* FIRST JOB */}
      <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4 border rounded shadow-sm">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="h4">Fanderlust - C#/.NET Developer</p>
          </div>
          <div className="col-12 col-md-6 text-start text-md-end">
            <p className="date">09/2024 - NOW</p>
          </div>
        </div>
        <p>
          I developed a <strong>web application</strong> that acts as a marketplace for sports ticket buyers and sellers.
          Instead of direct transactions, the platform connects customers with a dedicated team that finds tickets on their behalf.
          The application is built using <strong>C# with .NET and Razor Pages</strong> for a smooth user experience.
        </p>
        <p>Key contributions:</p>
        <ul className="circle">
          <li>Developed a <strong>secure login system</strong> with external authentication (Google).</li>
          <li>Implemented <strong>reCAPTCHA W3</strong> for enhanced security against bot attacks.</li>
          <li>Designed a <strong>user-friendly interface</strong> for buyers to submit requests and interact with the team.</li>
          <li>Built a <strong>scalable backend</strong> using <strong>.NET and Razor Pages</strong>.</li>
          <li>Future plans include <strong>AWS integration</strong>.</li>
        </ul>
        <p>
          This project strengthened my skills in <strong>C#, .NET, security best practices, and full-stack development</strong>.
        </p>
      </div>

      {/* SECOND JOB */}
      <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4 border rounded shadow-sm">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="h4">Sports Ticket Management SaaS - Node.js Developer</p>
          </div>
          <div className="col-12 col-md-6 text-start text-md-end">
            <p className="date">08/2024 - 09/2024</p>
          </div>
        </div>
        <p>
          I developed a SaaS platform for managing sports event tickets, enabling users to manually input ticket data and
          track sales and revenue efficiently.
        </p>
        <p>Key contributions:</p>
        <ul className="circle">
          <li>Built the backend using <strong>Node.js</strong> and <strong>Express</strong>.</li>
          <li>Implemented <strong>role-based authentication</strong>.</li>
          <li>Designed a database (<strong>MongoDB/MySQL</strong>).</li>
          <li>Developed a <strong>dashboard</strong> for real-time monitoring.</li>
          <li>Optimized for multi-user/event scenarios.</li>
        </ul>
        <p>
          This project enhanced my expertise in <strong>backend development, SaaS architecture, and database management</strong>.
        </p>
      </div>

      {/* THIRD JOB */}
      <div className="row mb-4">
        <div className="col-12 col-md-6">
          <p className="h4">TECNOMAT</p>
        </div>
        <div className="col-12 col-md-6 text-start text-md-end">
          <p className="date">07/2024 - 12/2024</p>
        </div>
      </div>

      {/* SKILL SECTION */}
      <div className="pt-4">
        <h2>SKILL SECTION</h2>
        <p className="h5">PROGRAMMING LANGUAGES</p>
          {['C', 'Python', 'C#', 'Java', 'JavaScript', 'Kotlin', 'Swift'].map((lang, index) => (
            <div className="apple-pill me-2" key={index}>
              <div className="apple-pill-content">{lang}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
