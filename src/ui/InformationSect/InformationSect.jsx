import styles from './informationSect.module.css';
import AudioTrack from '../AudioTrack/AudioTrack';

export default function InformationSect({header, body, audioSrc}){
    return (
        <section className={styles.content}>
                <h1 className={styles.h1}>{header}</h1>
                <p className={styles.p}>
                    {body}
                </p>
                <AudioTrack src={audioSrc}/>
        </section>
    );
};