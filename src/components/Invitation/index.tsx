import { FC } from "react";
import styles from "./style.module.scss"
const Invitation: FC = () => (
    <div className={styles.invitation}>
        <div className={styles.textContainer}>
            <h2 className={styles.title}>尊敬的校友: </h2>
            <p className={styles.content}>
                武陵山下, 风雨湖边，韶光似水，佳期如约。10月12日，吉首大学即将迎来建校65周年。一路走来，吉大人不忘立校初心，牢记育才使命，披荆斩棘，团结奋进，滋兰树慧，德业日新。学校已成为国家民委与湖南省人民政府共建高校、一本批次录取高校、博士学位授权单位、推荐优秀应届本科毕业生免试攻读硕士学位研究生普通高校、湖南省高水平建设大学、湖南省“双一流”建设高校。</p>
            <p className={styles.content}>
                母校的历史，凝结着你的青春和贡献，母校的未来，有赖于你的关注和襄助。躬逢盛世迎华诞，继往开来谱新篇。</p>
            <p className={styles.content}>
                兹定于2023年10月12日举行吉首大学65周年办学成就总结暨高质量发展系列活动，诚挚邀请你重返母校，重温青春岁月，共商学校发展！如蒙应允，敬请回复（回执附后）。 </p>
            <p className={styles.content}>归去来兮，谨邀。</p>
            <div className={styles.inscribe}>
                <p>吉首大学 党委书记：廖志坤</p>
                <p>校&nbsp;&nbsp;&nbsp;&nbsp;长：黎奇升</p>
                <p>2023年9月25日</p>
            </div>
        </div>
    </div>
)

export default Invitation

