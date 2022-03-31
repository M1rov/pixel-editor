import React, {FC} from 'react';
import './Button.scss'

interface ButtonProps {
  children: string,
  [x:string]: any;
}

const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={['button', props.className].join(' ')}>
      {children}
    </button>
  );
};

export default Button;