import { CarProfile } from "@phosphor-icons/react";
import styles from "./Veiculos.module.css";

export function Veiculos() {
  return (
    <>
      <div className={styles.title}>
        <h1>
          <CarProfile size={40} />
          Veículos
        </h1>
        <span>+ Adicionar</span>
      </div>
    </>
  );
}
