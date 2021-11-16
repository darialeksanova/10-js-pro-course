import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const cx = classNames.bind(styles);

const Button = ({ text, size, onClick }: Props): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button 
      className={cx({
        button: true,
        dark: currentTheme === Theme.dark, 
    }, size)} 
      onClick={onClick}>{text}
    </button>
  );
}

export default Button;