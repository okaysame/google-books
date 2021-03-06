import React from 'react';

const BookData = (props) => {
  return (
    <div className='book-container'>
      <img src={props.image} alt='asdasd' />
      <div className='desc'>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
      </div>
    </div>
  );
};

export default BookData;
