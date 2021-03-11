import React from 'react';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PagesFooter() {
  return (
    <div className="footer">
    <p>Savepler&copy; 2021 | All rights reserved </p>
    <p>By /RZ <a target="blank" href="https://github.com/rnlaufz"><FontAwesomeIcon icon={faGithub} /> rnlaufz </a></p>
    </div> 
  );
}

export default PagesFooter;
