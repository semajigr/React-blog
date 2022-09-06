import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ to, children }: IProps) => {
  return <Link to={to}>{children}</Link>;
};
