'use client'
import styles from "./styles.module.css"
import FooterTitle from "../../FooterTitle";
import Image from "next/image";
import Arrow from "../icons/arrow";
import { useTheme } from "@/stores/useTheme";


function SupportBlock() {
    const theme = useTheme((state) => state.theme);

    const src =
        theme === "light"
            ? "/footerSocialBg.png"
            : "/darkFooterSocialBg.png";
    return (
        <div className={styles.supportBlock}>
            <FooterTitle>Support:</FooterTitle>
            <span className={styles.link}>support@cryptopayments.com</span>
            <div className={styles.logo}>
                <Image
                    src={src}
                    alt="logo"
                    width={74}
                    height={74}
                />
            </div>
            <Arrow className={styles.arrow} />
        </div>
    )
}

export default SupportBlock;