import PoiHeader from "../../ui/PoiHeader/PoiHeader";
import styles from "./info.module.css"
export default function InfoLayout({ children }) {
    return (
        <main className={`${styles.main}`}>
            <PoiHeader />
            {children}
        </main>
    );
}