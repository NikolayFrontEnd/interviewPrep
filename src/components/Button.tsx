import styles from './Button.module.css';
import img from "../assets/loader.png"
interface ButtonProps {
    onIncrement: () => void;
    isLoading: boolean;
  }
  const Button = ({ onIncrement, isLoading }: ButtonProps) => {
    return (
      <button onClick={onIncrement} className={styles.button} disabled={isLoading}>
        {isLoading ? <img src={img} alt="loading" /> : "Увеличить"}
      </button>
    );
  }
export default Button;