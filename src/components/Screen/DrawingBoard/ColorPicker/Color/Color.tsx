import React from 'react';
import './Color.scss'

type Props = {
  hex: string
}


const Color = ({hex}: Props) => {
  return (
    <button
      style={{background: hex}}
      className='color-picker__item'
    />
  );
};

export default Color;