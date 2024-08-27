import React from "react";

import "../../assets/css/NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__body">
        <h1 className="not-found__h1">
          404
          <span className="not-found__h1-span" aria-hidden="true">
            404
          </span>
        </h1>
        <div className="not-found__cloak-wrapper">
          <div className="not-found__cloak-container">
            <div className="not-found__cloak"></div>
          </div>
        </div>
        <div className="not-found__info">
          <p className="not-found__info-p">
            We're fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on its behalf.
          </p>
          <a
            className="not-found__follow"
            href="https://twitter.com/intent/follow?screen_name=jh3yy"
            target="_blank"
            rel="noreferrer noopener"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
