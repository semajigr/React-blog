import { useState } from "react";
import { FormSignUp } from "../../components";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <h1>Sign Up</h1>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen}
    </div>
  );
};
