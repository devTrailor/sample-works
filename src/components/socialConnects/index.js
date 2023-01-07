import React from "react";

const SocialConnects = ({ icon, url }) => {
  return (
    <li className="list-group-item border-0 bg-transparent">
      <a href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default SocialConnects;
