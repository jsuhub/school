import { FC, useContext } from "react";
import styles from "./InputItem.module.scss"
import { FormInfoContext } from ".";

type PropsType = {
    label: string
    type: string
}

const InputItem: FC<PropsType> = ({ label, type }) => {

    let state = useContext(FormInfoContext)

    function isValidPhoneNumber(phoneNumber: any) {
        const pattern = /^1[3456789]\d{9}$/;
        return pattern.test(phoneNumber);
    }

    return (
        <div className={styles.itemContainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <input className={styles.input} onBlur={(evt) => {
                if (label === "姓名") {
                    state.name = evt.target.value
                }
                if (label === "性别") {
                    state.sex = evt.target.value
                }
                if (label === "毕业时间") {
                    state.by = evt.target.value
                }
                if (label === "专业") {
                    state.zy = evt.target.value
                }
                if (label === "工作单位") {
                    state.dw = evt.target.value
                }
                if (label === "联系方式") {
                    const flg = isValidPhoneNumber(evt.target.value)
                    if (flg) state.phone = evt.target.value
                    else alert("电话号码格式不符合!")
                }
                if (label === "返校时间") {
                    state.select = evt.target.value
                }
                if (label === "返程时间") {
                    state.fc = evt.target.value
                }
                console.log(state)
            }} type={type} id={label} />
        </div>
    )
}

export default InputItem