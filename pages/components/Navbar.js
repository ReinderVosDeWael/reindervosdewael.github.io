import {React} from 'react';

import {NavbarData} from '../data';

/**
 * Creats a navigation bar.
 * @return {React.Component}
 */
export default function Navbar() {
  return (
    <div className="navbar">
      {NavbarData.map(({label, href}, idx) => {
        return (
          <div className="navbar_item" key={idx}>
            <a href={href} className="navbar_link">
              <span className='navbar_text'>{label}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
