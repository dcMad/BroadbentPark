import styles from "./audioTrack.module.css";

export default function AudioTrack({src}){
    return <>
        <audio className={styles.audio} controls src={src}></audio>
    </> 
}