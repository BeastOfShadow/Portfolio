import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();
  const copyrightText = currentYear === 2025 
    ? "© 2025 simonenegro.com. All Rights Reserved."
    : `© 2025-${currentYear} simonenegro.com. All Rights Reserved.`;

  return (
    <footer className="pt-3 t-bord">
      <div className="container ps-4 pe-4">
        <div className="row text-md-start">
          {/* Sezione Pagine */}
          <div className="col-md-4 d-flex justify-content-left">
            <div>
              <p className="light-c mb-1 pt-0">PAGES</p>
              <ul className="list-unstyled">
                <li>
                  <a className="link-b ps-0 pt-1 pb-1 pe-4" href="/">シモネ</a>
                </li>
                <li>
                  <a className="link-d pt-1 pb-1" href="/about">About</a>
                </li>
                <li>
                  <a className="link-d pt-1 pb-1" href="/cv">CV</a>
                </li>
                <li>
                  <a className="link-d pt-1 pb-1" href="/projects">Projects</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Sezione Contatti */}
          <div className="col-md-4 d-flex justify-content-left">
            <div>
              <p className="light-c mb-1 pt-0">CONTACTS</p>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:simonenegro.dev@gmail.it" className="link-b me-2 mb-0">simonenegro.dev@gmail.it</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Sezione Social */}
          <div className="col-md-4 d-flex justify-content-left pb-3">
            <div>
              <p className="light-c mb-1 pt-0">SOCIAL</p>
              <div>
                <a href="https://github.com/BeastOfShadow" target="_blank" rel="noreferrer" className="text-decoration-none link-b me-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                      fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/negro-simone-babb88238/" target="_blank" rel="noreferrer" className="text-decoration-none link-b">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
                    <path
                      d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                      fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-0" />
      <div className="container ps-4 pe-4">
        <small className="mb-1">{copyrightText}</small>
      </div>
    </footer>
  );
};

export default Footer;