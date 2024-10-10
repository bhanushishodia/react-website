import React from "react";
import { Link } from "react-router-dom";
import "./SidebarInfo.css"; // Importing the CSS

const SidebarInfo = () => {
  return (
    <div className="sidebar-info specific-section">
      <ul>
        <li>
          <Link to="/how-to-setup-a-welcome-message-on-anantya.ai">
            Publisher
          </Link>
        </li>
        <li>
          <Link to="/how-to-add-agent-sublogin">Meta</Link>
        </li>
        <li>
          <Link to="/how-to-launch-first-campaign-in-anantya.ai">
            Category
          </Link>
        </li>
        <li>
          <Link to="/how-to-enable-whatsapp-out-of-office-message">
            Messaging Channels
          </Link>
        </li>
        <li>
          <Link to="/how-to-auto-assign-chats">Available on</Link>
        </li>
        <li>
          <Link to="/how-to-create-whatsapp-templete-messages-in-anantya.ai">
            Team
          </Link>
        </li>
        <li>
          <Link to="/how-to-create-whatsapp-templete-messages-in-anantya.ai">
            Business
          </Link>
        </li>
        <li>
          <Link to="/how-to-create-whatsapp-templete-messages-in-anantya.ai">
            Enterprise
          </Link>
        </li>
      </ul>
      <div className="mt-2 text-center">
        <a href="/contact" target="_blank" className="btn login_button">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SidebarInfo;
