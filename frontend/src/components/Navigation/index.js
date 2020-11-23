import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(sessionActions.logOutUser());
  }
  return (
    <>
      <div className='nav-title-container'>
        <h1 className='header-title'>Morgan Stanley</h1>
        {sessionUser &&
        <>
        <p>Welcome {sessionUser.username}</p>
        <NavLink to='/' onClick={handleLogOut}>Log out</NavLink>
        </>}
        </div>
      {sessionUser &&
        <>
          <div className='nav-bar'>
            <div className='nav-bar-content'>
              <ul>
                <div className='navLink-container'>
                  <NavLink to='/'>Home</NavLink>
                </div>
              </ul>
            </div>
          </div>
        </>}
    </>
  )
}

export default Navigation;