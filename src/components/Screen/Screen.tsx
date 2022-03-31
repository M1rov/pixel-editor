import React, {useState} from 'react';
import './Screen.scss'
import {ScreenStates} from "../../models/ScreenStates";
import Options from "./Options/Options";
import DrawingBoard from "./DrawingBoard/DrawingBoard";

const Screen = () => {
  const [screenState, setScreenState] = useState<ScreenStates>(ScreenStates.OPTIONS)
  const [width, setWidth] = useState<number>(16);
  const [height, setHeight] = useState<number>(16);

  return (
    <div className='screen'>
      <h1 className="screen__title">Pixel Editor</h1>
      {screenState === ScreenStates.OPTIONS ?
        <Options
          height={height}
          width={width}
          setHeight={setHeight}
          setWidth={setWidth}
          setScreenState={setScreenState}
        />
        :
        null
      }

      {screenState === ScreenStates.DRAWING_BOARD ?
        <DrawingBoard width={width} height={height}/>
        :
        null
      }

    </div>
  );
};

export default Screen;