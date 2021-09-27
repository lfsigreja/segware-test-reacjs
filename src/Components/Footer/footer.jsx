import React from 'react';

import { FooterSection } from './style';

function Footer() {
  return (
    <FooterSection>
      <h1>Segware Blog</h1>
      <p>O verdadeiro software para monitoramento de alarmes.</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/segwaresigma/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.segware.com/" target="_blank" rel="noreferrer">
            Site
          </a>
        </li>
      </ul>
      <p>© 2021-2021 Luis Igreja. All rights reserved.</p>
    </FooterSection>
  );
}

export default Footer;
