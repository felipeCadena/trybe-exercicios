import './title.css';
import Button from '../button/Button';

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return (
    <>
      <h2 className="title">{children}</h2>
      <Button style={{ backgroundColor: 'red' }}>I am a Button!</Button>
    </>
  );
}

export default Title;
