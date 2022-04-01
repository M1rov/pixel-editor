import React, {FC, useRef, useState} from 'react';
import './DrawingBoard.scss'
import ColorPicker from "./ColorPicker/ColorPicker";
import Editor from "./Editor/Editor";
import Button from "../../UI/Button/Button";
import colors from './colors'
import {ScreenStates} from "../../../models/ScreenStates";
import {exportComponentAsPNG} from 'react-component-export-image'

interface BoardProps {
  width: number,
  height: number,
  setScreenState: (state: ScreenStates) => void;
}

const exportParams = {
  fileName: 'picture',
}

const DrawingBoard: FC<BoardProps> = ({width, height, setScreenState}) => {
  const [color, setColor] = useState<string>(colors[0].hex)

  const editorRef = useRef<HTMLDivElement>(null)

  return (
    <div className='board'>
      <Button
        onClick={() => setScreenState(ScreenStates.OPTIONS)}
      >
        Reset
      </Button>
      <ColorPicker
        colors={colors}
        className={'board__color-picker'}
        selectedColor={color}
        onColorChange={setColor}
      />
      <Editor editorRef={editorRef} color={color} width={width} height={height}/>
      <Button onClick={() => exportComponentAsPNG(editorRef, exportParams)}>
        Export as PNG
      </Button>
    </div>
  );
};

export default DrawingBoard;