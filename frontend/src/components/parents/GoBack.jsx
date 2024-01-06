import React from "react";
import { useNavigate } from "react-router-dom";

export const GoBack = ({ children, className }) => {
  const navigate = useNavigate();
  return (
    <div className={className} onClick={() => navigate(-1)}>
      {children}
    </div>
  );
};
