import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Signup: {
    width: theme.spacing(12),
    height: theme.spacing(6),
    margin: 'auto 5px'
  }, Signin: {
    width: theme.spacing(11),
    height: theme.spacing(6),
    margin: 'auto 5px'
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
    <header className='header_main'>
      <div className='header_content-container'>
        <div className='header-left'>
          <Link to={'/'}><p>BOOKCLUB</p></Link>
          <Link to={'/bookList'}><p>Books</p></Link>
          <Link to={'/authorlist'}><p>Authors</p></Link>
        </div>
        <div className='btn-grp'>
          <Button variant="contained" color="primary" className={classes.Signin}>
            Sign in
        </Button>
          <Link to={'/createUser'}>
            <Button variant="contained" color="primary" className={classes.Signup}>
              Sign up
        </Button>
          </Link>
        </div>
      </div>
    </header >
  );
};

export default Header;