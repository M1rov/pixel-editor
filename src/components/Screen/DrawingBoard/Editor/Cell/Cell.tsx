import React, {FC} from 'react';

interface CellProps {
  size: number,
  color: string,

}

const Cell: FC<CellProps> = ({size}) => {

  return (
    <div
      style={{width: `${size}px`, height: `${size}px`}}
      onMouseDown={() => console.log('down')}
      className='editor__cell'
    />
  );
};

export default Cell;