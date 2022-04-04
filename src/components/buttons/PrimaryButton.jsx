import React from "react";
import classNames from "classnames";
// import PropTypes from "prop-types";

export default function PrimaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "bg-primary text-white rounded-full py-4 px-10",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

// PrimaryButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   onClick: PropTypes.func,
// };
