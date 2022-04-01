import React from 'react';
import './Color.scss'

type Props = {
  hex: string,
  onColorChange: (color: string) => void,
  active: boolean
}


const Color = ({hex, active, onColorChange}: Props) => {
  return (
    <button
      style={active ? {background: '#3e4043', border: `3px solid ${hex}`} : {background: hex}}
      onClick={() => onColorChange(hex)}
      className='color-picker__item'
    />
  );
};

export default Color;