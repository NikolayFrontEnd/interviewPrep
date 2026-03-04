import styles from "./Counter.module.css"
interface CounterProps {
    number: number,
    isLoading: boolean
  }
  const Counter = ({ number, isLoading }: CounterProps) => {
    const displayValue = number > 99 ? '99+' : number;
    return (
        <div>
{isLoading ? <div></div> : <div className={styles.conteiner}>
        <div>Значение: </div>
        <div className={styles.counter}>{displayValue}</div>
      </div>}
      </div>
    );
  };
export default Counter;