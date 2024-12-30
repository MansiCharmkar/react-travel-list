import styles from "../styles/Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                You have x items on your list, and you already packed x (xx.xx)
            </p>
        </div>
    );
};

export default Footer;
