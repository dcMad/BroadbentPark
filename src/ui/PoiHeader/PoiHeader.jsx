"use client";
import Link from "next/link";
import styles from "./poiHeader.module.css";
import nextConfig from "../../../next.config.mjs";

export default function PoiHeader({ path="", onBackClick, title}) {
  return (
    <header className={styles.header}>
      {onBackClick ? (
        <div className={styles.back_btn} onClick={onBackClick}>
          <img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/back_btn_icon.svg`} alt="Back button"/>
        </div>
      ) : (
        <Link className={styles.back_btn} href={`../${path}`}>
          <img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/back_btn_icon.svg`} alt="Back button"/>
        </Link>
      )}
      {title ? <h1 className={styles.title}>{title}</h1> : undefined}
      <Link className={styles.logo} href={"/"}>
        <img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/header_logo.svg`} alt="Home page button" width={47} height={57} />
      </Link>
    </header>
  );
}

