import React from "react";
import PropTypes from "prop-types";

import "./CardTitle.scss";

const CardTitle = ({ level, children }) =>
  React.createElement(
    `h${level}`,
    {
      className: "card-title",
    },
    children,
  );

CardTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  // Required to avoid accessibility issues
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

export default CardTitle;