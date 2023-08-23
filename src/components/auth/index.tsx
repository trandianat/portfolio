import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Fragment, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as styles from 'components/auth/styles';
import isProjects from 'utils/projects';

const Auth = ({ children }: { children: ReactNode }): JSX.Element => {
  const { signOut } = useAuthenticator();
  const { pathname } = useLocation();
  return (
    <Fragment>
      <div css={styles.navigation}>
        {isProjects(pathname) ? <div /> : <Link to="projects">≪ Back</Link>}
        <button onClick={signOut}>Sign out</button>
      </div>
      {children}
    </Fragment>
  );
};

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
