import { ChangeEvent, FC, useState } from "react";
import styles from "./Select.module.scss"

type PropsType = {
    label: string
}

const Select: FC<PropsType> = ({ label, }) => {
    const [option, setOption] = useState("o1")

    function changeOption(evt: ChangeEvent<HTMLSelectElement>) {
        setOption(evt.target.value)
    }

    return (
        < div className={styles.selectContainer} >
            <label className={styles.label} htmlFor={label}>{label}</label>
            <select value={option} onChange={changeOption} className={styles.select}>
                <option value="o1" >10月11日上午</option>
                <option value="o2" >10月11日下午</option>
                <option value="o3" >10月12日上午</option>
                <option value="o4" >10月12日下午</option>
            </select>
        </div >
    )
}

export default Select