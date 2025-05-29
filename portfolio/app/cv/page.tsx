"use client";

import React, { useState } from 'react';

export default function CVPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const programmingLanguages = [
    { name: 'C', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Python', level: 90, color: 'from-green-500 to-green-600' },
    { name: 'C#', level: 95, color: 'from-purple-500 to-purple-600' },
    { name: 'Java', level: 80, color: 'from-orange-500 to-orange-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Kotlin', level: 75, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Swift', level: 70, color: 'from-red-500 to-red-600' }
  ];

  const frameworks = ['React', 'Node.js', 'Express', '.NET', 'Razor Pages'];
  const databases = ['MongoDB', 'MySQL', 'PostgreSQL'];
  const tools = ['AWS', 'Git', 'Docker', 'VS Code'];

  const experiences = [
    {
      id: 1,
      company: "Fanderlust",
      role: "C#/.NET Developer",
      period: "09/2024 - NOW",
      status: "current",
      description: "I developed a web application that acts as a marketplace for sports ticket buyers and sellers. Instead of direct transactions, the platform connects customers with a dedicated team that finds tickets on their behalf.",
      tech: "C# with .NET and Razor Pages",
      achievements: [
        "Developed a secure login system with external authentication (Google)",
        "Implemented reCAPTCHA W3 for enhanced security against bot attacks",
        "Designed a user-friendly interface for buyers to submit requests",
        "Built a scalable backend using .NET and Razor Pages",
        "Future plans include AWS integration"
      ],
      skills: ["C#", ".NET", "Security", "Full-stack Development"]
    },
    {
      id: 2,
      company: "Sports Ticket Management SaaS",
      role: "Node.js Developer",
      period: "08/2024 - 09/2024",
      status: "completed",
      description: "I developed a SaaS platform for managing sports event tickets, enabling users to manually input ticket data and track sales and revenue efficiently.",
      tech: "Node.js and Express",
      achievements: [
        "Built the backend using Node.js and Express",
        "Implemented role-based authentication",
        "Designed a database (MongoDB/MySQL)",
        "Developed a dashboard for real-time monitoring",
        "Optimized for multi-user/event scenarios"
      ],
      skills: ["Backend Development", "SaaS Architecture", "Database Management"]
    },
    {
      id: 3,
      company: "TECNOMAT",
      role: "Developer",
      period: "07/2024 - 12/2024",
      status: "completed",
      description: "Industrial technology solutions and development projects.",
      tech: "Various technologies",
      achievements: [
        "Contributed to industrial software solutions",
        "Worked with cutting-edge technology stack",
        "Collaborated with cross-functional teams"
      ],
      skills: ["Industrial Software", "Team Collaboration"]
    }
  ];

  return (
    <div className="pb-3 container">
      {/* Header Section */}
      <div className="gradient mb-5">
        <p className="pb-1 big-title lh-less">WORKING EXPERIENCES</p>
        <p className="text-lg opacity-80">
          Here are some of my key work experiences, ranging from web development to other software-related roles.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6 mb-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`card-top pt-3 pb-2 pe-4 ps-4 mb-4 border rounded shadow-sm transition-all duration-300 ${
              hoveredCard === exp.id ? 'transform translate-y-[-2px]' : ''
            }`}
            onMouseEnter={() => setHoveredCard(exp.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Header */}
            <div className="row align-items-center mb-3">
              <div className="col-12 col-md-8">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="mb-0">{exp.company} - {exp.role}</h4>
                  {exp.status === 'current' && (
                    <span className="badge bg-success bg-opacity-20 text-success border border-success">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4 text-start text-md-end">
                <p className="date mb-0">{exp.period}</p>
              </div>
            </div>

            {/* Description */}
            <p className="mb-3">{exp.description}</p>
            
            {exp.tech && (
              <p className="mb-3">
                The application is built using <strong>{exp.tech}</strong> for a smooth user experience.
              </p>
            )}

            {/* Achievements */}
            <div className="mb-3">
              <p className="fw-semibold mb-2">Key contributions:</p>
              <ul className="circle ps-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="mb-1">{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Skills Tags */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="apple-pill px-3 py-1 small"
                  style={{ marginTop: '0.5rem' }}
                >
                  <span className="apple-pill-content">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="pt-4">
        <div className="gradient mb-4">
          <h2 className="mb-3">TECHNICAL SKILLS</h2>
        </div>

        {/* Programming Languages with Progress Bars */}
        <div className="mb-5">
          <h5 className="mb-4 text-uppercase tracking-wider">Programming Languages</h5>
          <div className="row">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div 
                  className="position-relative"
                  onMouseEnter={() => setSelectedSkill(lang.name)}
                  onMouseLeave={() => setSelectedSkill(null)}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold">{lang.name}</span>
                    <span className="small text-muted">{lang.level}%</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className={`progress-bar bg-gradient-to-r ${lang.color} transition-all duration-500`}
                      style={{
                        width: `${selectedSkill === lang.name ? lang.level : lang.level * 0.8}%`,
                        background: `linear-gradient(90deg, rgba(37, 140, 251, 0.8), rgba(37, 140, 251, 1))`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills Categories */}
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Frameworks & Libraries</h6>
            <div className="d-flex flex-wrap gap-2">
              {frameworks.map((framework, idx) => (
                <div key={idx} className="apple-pill me-2 mb-2">
                  <div className="apple-pill-content small">{framework}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Databases</h6>
            <div className="d-flex flex-wrap gap-2">
              {databases.map((db, idx) => (
                <div key={idx} className="apple-pill me-2 mb-2">
                  <div className="apple-pill-content small">{db}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Tools & Technologies</h6>
            <div className="d-flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <div key={idx} className="apple-pill me-2 mb-2">
                  <div className="apple-pill-content small">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="card-top p-4 mt-5">
          <div className="row text-center">
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <div className="h3 fw-bold text-primary">3+</div>
              <div className="text-muted">Projects Completed</div>
            </div>
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <div className="h3 fw-bold text-success">7+</div>
              <div className="text-muted">Technologies Mastered</div>
            </div>
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <div className="h3 fw-bold text-warning">6</div>
              <div className="text-muted">Months Experience</div>
            </div>
            <div className="col-12 col-md-3">
              <div className="h3 fw-bold text-info">100%</div>
              <div className="text-muted">Commitment Level</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .progress {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar {
          transition: width 0.6s ease;
          border-radius: 3px;
        }
        .tracking-wider {
          letter-spacing: 0.05em;
        }
        .apple-pill {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .apple-pill:hover {
          transform: translateY(-1px);
        }
        .card-top {
          transition: all 0.3s ease;
        }
        .badge {
          font-size: 0.75rem;
          padding: 0.35em 0.65em;
        }
        .space-y-6 > * + * {
          margin-top: 1.5rem;
        }
        .text-primary { color: #258cfb !important; }
        .text-success { color: #28a745 !important; }
        .text-warning { color: #ffc107 !important; }
        .text-info { color: #17a2b8 !important; }
      `}</style>
    </div>
  );
}