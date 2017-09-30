import React from 'react';

export const Title = (props) => {
  return (
    <div>
      <h1>{props.date}</h1>
      <h2>Ciao, {props.name}.</h2>
    </div>
  );
}
