import React from "react";

export const ErrorMessageInput = ({ msg, className = "text-red-600" }) => {
  return <span className={className}>{msg}</span>;
};
