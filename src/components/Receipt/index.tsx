import { FC } from "react";
import styles from "./style.module.scss"
import InputItem from "./InputItem";
import Select from "./Select";
const Receipt: FC = () => (
    <div className={styles.receipt}>
        <div className={styles.form}>
            <InputItem label="姓名" type="text" />
            <InputItem label="性别" type="text" />
            <InputItem label="毕业时间" type="date" />
            <InputItem label="专业" type="text" />
            <InputItem label="工作单位" type="text" />
            <InputItem label="联系方式" type="text" />
            <Select label="返校时间" />
            <InputItem label="返程时间" type="date" />
        </div>
        <button className={styles.submit} >提交</button>
    </div>
)

export default Receipt

