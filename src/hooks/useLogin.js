import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
      user {
        id
      }
    }
  }
`;

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [login] = useMutation(LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({
        variables: {
          input: { email, password },
        },
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Failed to login");
    }
  };

  return { handleLogin, setEmail, setPassword };
};
