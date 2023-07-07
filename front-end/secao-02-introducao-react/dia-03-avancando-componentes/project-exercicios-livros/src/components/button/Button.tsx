import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div className='container-button'>
    <button className="styled-btn">
      { children }
      </button>
    </div>
    )
}
