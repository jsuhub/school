import { FC, createContext, useState } from "react";
import styles from "./style.module.scss"
import InputItem from "./InputItem";
import Select from "./Select";
import { request } from "@/request/request";

type Type = {
    [key: string]: string,
}

const intialState: Type = {
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
                    for (const key in intialState) {
                        console.log(intialState[key])
                        if (key !== "phone" && intialState[key] === "") {
                            alert("请补全信息后再提交!")
                            return
                        } else if (key === "phone" && intialState[key] === "") {
                            alert("电话号码格式不符合!")
                            return
                        }

                    }
                    request(JSON.stringify(intialState))
                    alert("提交成功!")
                }}>提交</button>
            </div>
        </FormInfoContext.Provider>
    )
}

export default Receipt

