import { useMutation, gql } from '@apollo/client';

const REGISTER_LOGIN = gql`
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
  const [login, { data, loading, error }] = useMutation(REGISTER_LOGIN);

  return {
    data,
    error,
    loading,
    login: (input) => {
      login({
        variables: { input },
      });
    },
  };
};
