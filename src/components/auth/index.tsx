import {
  Button,
  Card,
  View,
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react';

function Auth() {
  const { signOut } = useAuthenticator();
  return (
    <View>
      <Card>Projects</Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(Auth);
