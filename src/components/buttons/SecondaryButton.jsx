import React from "react";
import classNames from "classnames";
// import PropTypes from "prop-types";

export default function SecondaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames(
    "border border-primary text-primary hover:bg-primary transition-colors duration-300 hover:text-white rounded-full py-4 px-10",
    className
  );

  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

// SecondaryButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   onClick: PropTypes.func,
// };
