import styles from './styles/now.module.scss'
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Map'),{ ssr: false });

const Now = () => (
    <div>
        <div className={styles.mainLogo}>
            <img src="/images/trackme-logo@2x.png" alt="Track me logo" />
        </div>
        <div className={styles.navigation}>
            <ul>
                <li className={styles.active}>
                    <a href="/now">Now</a>
                </li>
                <li>
                    <a href="/history">History</a>
                </li>
            </ul>
        </div>
        <div className={styles.mapDiv}>
            <DynamicComponentWithNoSSR />
        </div>
    </div>
);

export default Now;