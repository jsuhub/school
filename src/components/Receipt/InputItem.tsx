import { FC } from "react";
import styles from "./InputItem.module.scss"

type PropsType = {
    label: string
    type: string
}

const InputItem: FC<PropsType> = ({ label, type }) => (
    <div className={styles.itemContainer}>
        <label className={styles.label} htmlFor={label}>{label}</label>
        <input className={styles.input} type={type} id={label} />
    </div>
)

export default InputItem