import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, logout } from './firebase';
import { Dashboard } from './components/Dashboard';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { UilGoogle } from '@iconscout/react-unicons';

const App = () => {
  const [user, fetchingUser] = useAuthState(auth);

  return (
    <div className="App">
      <h1 className="title">Stuffs To Do</h1>
      <SignOut />
      {user ? <Dashboard /> : <SignIn isFetchinguser={fetchingUser} />}
    </div>
  );
};

const SignIn = (props) => {
  return (
    <>
      <button
        className={props.isFetchinguser ? 'btn sign-in loading' : 'btn sign-in'}
        onClick={signInWithGoogle}
        disabled={props.isFetchinguser}
      >
        <div className="icon">
          <UilGoogle />
        </div>
        <div className="text">Login with Google</div>
      </button>
    </>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="btn sign-out" onClick={logout}>
        <div className="text">{auth.currentUser.displayName}</div>
        <div className="icon">
          <UilSignOutAlt />
        </div>
      </button>
    )
  );
};

export default App;
