import { Auth as Authentication } from 'aws-amplify';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Fragment } from 'react';
import * as styles from 'components/auth/styles';

function Auth() {
  const { signOut } = useAuthenticator();
  return (
    <div css={styles.auth}>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(Auth, {
  components: { SignIn: { Footer: () => <Fragment /> } },
  formFields: {
    signIn: {
      username: { label: '', placeholder: 'Username' },
      password: { label: '', placeholder: 'Password' },
    },
  },
  hideSignUp: true,
  // services: {
  //   handleSignIn: async ({
  //     username,
  //     password,
  //   }: {
  //     username: string;
  //     password: string;
  //   }) => console.log('Credentials: ' + username + ' / ' + password),
  // },
});
