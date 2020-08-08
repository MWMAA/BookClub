import React from 'react';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Button: {
    width: theme.spacing(15),
    height: theme.spacing(6),
    margin: 'auto 0'
  }
}));

const BookListPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className='page-header-sm'>
        <div className='header-container'>
          <h2 className='page-header__title'>Book List Page</h2>
          <Link to={'/createBook'}>
            <div>
              <Button variant="contained" color="primary" className={classes.Button}>
                Add Book
            </Button>
            </div>
          </Link>
        </div>
      </div>
      <BookList />
    </div>
  );
};

export default BookListPage;