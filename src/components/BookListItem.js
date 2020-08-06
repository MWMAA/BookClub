import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';

const BookListItem = (props) => {
  return (
    <Link onClick={() => props.handleChoose(props.book)}>
      <Card className='card'>
        <CardActionArea className='book_card'>
          <CardMedia
            title="Contemplative Reptile"
          >
            <img src='/images/book3.webp' alt={props.book.name} className='img_card' />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.book.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.book.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link >
  );
}

export default BookListItem;