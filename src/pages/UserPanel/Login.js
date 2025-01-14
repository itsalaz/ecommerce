import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ setCurrentUser }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  function handleCheckbox(event) {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberMe');
    }
  }



function handleSubmit(e) {
  e.preventDefault()
  
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        setCurrentUser(data);
        navigate('/patients');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="login-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className='login-header'>Login</h2>

        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
        />
        <br></br>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <br></br>
        <label className='checkbox'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          Remember Me
        </label>
        <p>{isChecked ? 'The checkbox is checked!' : 'Checking for you'}</p>

        <input type="submit" value="Login" />

        <Link to="/signup">
          <button type="button" className="signup-button">
            Signup
          </button>
        </Link>

        <h2 className='check-order-header'>Check Order</h2>
        <p>
          Check
          <Link to="/check-order">
            <button type="button">Order</button>
          </Link>
          for details.
        </p>
      </form>
    </div>
  );
}