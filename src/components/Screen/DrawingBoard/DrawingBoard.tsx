import React, {FC} from 'react';
import './DrawingBoard.scss'
import ColorPicker from "./ColorPicker/ColorPicker";
import Editor from "./Editor/Editor";
import Button from "../../UI/Button/Button";
import colors from './colors'

interface BoardProps {
  width: number,
  height: number
}

const DrawingBoard: FC<BoardProps> = ({width, height}) => {
  return (
    <div className='board'>
      <Button>
        Reset
      </Button>
      <ColorPicker colors={colors} className={'board__color-picker'}/>
      <Editor/>
      <Button>
        Export as PNG
      </Button>
    </div>
  );
};

export default DrawingBoard;