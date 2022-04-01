import React, {FC, ReactElement, RefObject, useEffect, useRef, useState} from 'react';
import './Editor.scss'

interface EditorProps {
  width: number,
  height: number,
  color: string,
  editorRef?: RefObject<HTMLDivElement>
}

const BIG_BOARD_SIZE = 400;
const SMALL_BOARD_SIZE = 300;
const BOARD_SIZE = window.innerWidth > 530 ? BIG_BOARD_SIZE : SMALL_BOARD_SIZE;

const Editor: FC<EditorProps> = ({width, height, color, editorRef}) => {
  const [cells, setCells] = useState<ReactElement[]>([]);
  const [isMousePressed, _setIsMousePressed] = useState<boolean>(false)

  const isMousePressedRef = useRef<boolean>(isMousePressed)

  const setIsMousePressed = (data: boolean) => {
    isMousePressedRef.current = data;
    _setIsMousePressed(data);
  }


  useEffect(() => {
    for (let i = 0; i < width * height; i++) {
      const cellSize = `${BOARD_SIZE / width}px`
      setCells(prev => [...prev,
        <div
          className='editor__cell'
          style={{width: cellSize, height: cellSize}}
          key={i}
        />
      ])
    }
  }, [width, height])

  const setBackgroundColor = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, force ?: boolean) => {
    if (isMousePressedRef.current || force) {
      (event.target as HTMLDivElement).style.backgroundColor = color
    }
  }

  return (
    <div className='board__editor editor'
         ref={editorRef}
         onMouseDown={() => setIsMousePressed(true)}
         onMouseOver={setBackgroundColor}
         onClick={e => setBackgroundColor(e, true)}
         onMouseUp={() => setIsMousePressed(false)}
         onMouseLeave={() => setIsMousePressed(false)}
    >
      {cells}
    </div>
  );
};

export default Editor;