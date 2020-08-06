import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  }, author_name: {
    font_weight: '500',
    font_size: '1.5rem',
    margin: 'auto auto auto 3px',
  }

}));

const AuthorListItem = (props) => {
  const classes = useStyles();

  return (
    <Link onClick={() => props.handleChoose(props.author)} className='author_container'>
      <Container className={classes.root} >
        <Avatar alt={`${props.author.name}`} src='\images\img.jpg' className={classes.large} />
        <p className={classes.author_name}>{props.author.name}</p>
      </Container>
    </Link>
  );
}

export default AuthorListItem;