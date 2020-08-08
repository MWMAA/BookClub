import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthorList from './AuthorList';

const useStyles = makeStyles((theme) => ({
  Button: {
    width: theme.spacing(17),
    height: theme.spacing(6),
    margin: 'auto 0'
  }
}));

const AuthorListPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className='page-header-sm'>
        <div className='header-container'>
          <h2 className='page-header__title'>Author List Page</h2>
          <Link to={'/createAuthor'}>
            <div>
              <Button variant="contained" color="primary" className={classes.Button}>
                Add Author
            </Button>
            </div>
          </Link>
        </div>
      </div>
      <AuthorList />
    </div>
  );
};

export default AuthorListPage;