import { FC, createContext, useState } from "react";
import styles from "./style.module.scss"
import InputItem from "./InputItem";
import Select from "./Select";
import { request } from "@/request/request";


const intialState = {
    name: '',
    sex: "",
    by: "",
    zy: "",
    dw: "",
    phone: "",
    select: "o1",
    fc: ""
}
export const FormInfoContext = createContext(intialState)

const Receipt: FC = () => {

    return (
        <FormInfoContext.Provider value={intialState}>
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
                <button className={styles.submit} onClick={() => {
                    request(JSON.stringify(intialState))
                    alert("提交成功")
                }}>提交</button>
            </div>
        </FormInfoContext.Provider>
    )
}

export default Receipt

