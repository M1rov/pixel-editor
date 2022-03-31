import React, {FC} from 'react';
import {ColorI} from "../../../../models/ColorI";
import Color from "./Color/Color";
import './ColorPicker.scss'

interface ColorPickerProps {
  colors: ColorI[],
  className?: string
}

const ColorPicker: FC<ColorPickerProps> = ({colors, className}) => {
  return (
    <div className={['color-picker', className].join(' ')}>
      {colors.map(color => <Color key={color.id} hex={color.hex}/>)}
    </div>
  );
};

export default ColorPicker;