import PoiHeader from "../../ui/PoiHeader/PoiHeader";
import styles from "./page.module.css"

export default function PoiLayout({ children }) {
    return (
        <main className={`${styles.main}`}>
            <PoiHeader />
            {children}
        </main>
    );
}
