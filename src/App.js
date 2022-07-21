import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, logout } from './firebase';
import { Dashboard } from './components/Dashboard';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { UilGoogle } from '@iconscout/react-unicons';
import { UilPalette } from '@iconscout/react-unicons';
import { useEffect } from 'react';

const colors = [
  { colorName: 'dark', hex: '#455A64' },
  { colorName: 'purple', hex: '#303F9F' },
  { colorName: 'blue', hex: '#3670C7' },
  { colorName: 'teal', hex: '#00796B' },
  { colorName: 'green', hex: '#66bb6a' },
  { colorName: 'yellow', hex: '#cb8208' },
];
const App = () => {
  const [user, fetchingUser] = useAuthState(auth);

  const changeTheme = (hex) => {
    localStorage.setItem('theme-color', hex);
    document.documentElement.style.setProperty('--clr-primary', hex);
  };

  useEffect(() => {
    const setTheme = localStorage.getItem('theme-color');
    if (setTheme) changeTheme(setTheme);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Stuffs To Do</h1>
      {user && <ColorPallete handleTheme={changeTheme} />}
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

const ColorPallete = (props) => {
  return (
    <div className="palette-container">
      <UilPalette />
      <ul className="palette-colors">
        {colors.map((c) => (
          <li
            key={c.colorName}
            className="colors"
            style={{ backgroundColor: c.hex }}
            onClick={() => props.handleTheme(c.hex)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
