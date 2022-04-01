import React, {FC} from 'react';
import {ColorI} from "../../../../models/ColorI";
import Color from "./Color/Color";
import './ColorPicker.scss'

interface ColorPickerProps {
  colors: ColorI[],
  className?: string,
  selectedColor: string,
  onColorChange: (color: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({colors, className, selectedColor, onColorChange}) => {
  return (
    <div className={['color-picker', className].join(' ')}>
      {colors.map(color =>
        <Color
          key={color.id}
          hex={color.hex}
          active={color.hex === selectedColor}
          onColorChange={onColorChange}
        />)}
    </div>
  );
};

export default ColorPicker;