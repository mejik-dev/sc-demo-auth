import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
  mutation Register($input: RegisterInput) {
    register(input: $input) {
      token
      user {
        id
      }
    }
  }
`;

export const useRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [register] = useMutation(REGISTER);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({
        variables: {
          input: { firstName, lastName, email, password },
        },
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Failed to register");
    }
  };

  return { handleRegister, setEmail, setFirstName, setLastName, setPassword };
};
