import { useMutation, gql } from '@apollo/client';

const REGISTER_QUERY = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      token
      user {
        id
      }
    }
  }
`;

export const useRegister = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_QUERY);

  return {
    data,
    error,
    loading,
    register: (input) => {
      register({
        variables: { input },
      });
    },
  };
};
