import React, {FC} from 'react';
import './Options.scss'
import {ScreenStates} from "../../../models/ScreenStates";
import Button from "../../UI/Button/Button";

interface OptionsProps {
  width: number,
  height: number,
  setHeight: (height: number) => void,
  setWidth: (width: number) => void,
  setScreenState: (state: ScreenStates) => void
}

const Options: FC<OptionsProps> = ({width, height, setHeight, setWidth, setScreenState}) => {
  const setDimension = (setState: Function, value: string) => {
    if (!value) {
      setState(0)
    } else if (/^[\d]+$/.test(value) && value.length < 3) {
      setState(+value)
    }
  }

  return (
    <div className='screen__options options'>
      <h2 className="options__subtitle">Enter Panel Dimensions</h2>
      <div className="options__inputs">
        <label className="options__label">
          <input type="text"
                 className="options__input"
                 value={width}
                 onChange={e => setDimension(setWidth, e.target.value)}
          />
          Width
        </label>
        <label className="options__label">
          <input type="text"
                 className="options__input"
                 value={height}
                 onChange={e => setDimension(setHeight, e.target.value)}
          />
          Height
        </label>
      </div>
      <Button
        disabled={width === 0 || height === 0}
        onClick={() => setScreenState(ScreenStates.DRAWING_BOARD)}
      >
          Start drawing
      </Button>
    </div>
  );
};

export default Options;