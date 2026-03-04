import { useState } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";
import styles from "./main.module.css";
const Main = () => {
    const [number, setNumber] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleIncrement = () => {
      if (isLoading) return;
      setIsLoading(true);
      setTimeout(() => {
        setNumber(prev => prev + 1);
        setIsLoading(false);
      }, 1000);
    };
    return (
      <div className={styles.conteiner}>
        <div className={styles.contentGroup}>
            <div className={styles.count}>  
          <Counter number={number} isLoading={isLoading}/>
          </div>
          <Button onIncrement={handleIncrement} isLoading={isLoading} />
        </div>
      </div>
    );
  }
export default Main;