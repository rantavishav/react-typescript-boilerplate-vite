import { SOME_DUMMY_URL } from './ButtonServices';

import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  const handleClick = () => {
    //   do api call here
    console.log('button clicked', SOME_DUMMY_URL);
  };

  return (
    <button {...rest} type='button' onClick={handleClick} className='btn'>
      {children}
    </button>
  );
};

export default Button;
