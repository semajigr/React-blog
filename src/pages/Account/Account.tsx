import React from "react";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";

export const Account = () => {
  const { email, creationTime } = useAppSelector(getUserInfo);

  return (
    <div>
      <h3>Email: {email}</h3>
      <h4>Account creation time: {new Date(creationTime).toLocaleDateString()}</h4>
    </div>
  );
};
