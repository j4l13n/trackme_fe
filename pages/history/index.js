import styles from './styles/history.module.scss'

const History = () => (
    <div>
        <div className={styles.mainLogo}>
            <img src="/images/trackme-logo@2x.png" alt="Track me logo" />
        </div>
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href="/now">Now</a>
                </li>
                <li className={styles.active}>
                    <a href="/history">History</a>
                </li>
            </ul>
        </div>
        <div className={styles.tableDiv}>
            <table className={styles.table}>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Coords</th>
                    <th>Device ID</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>8/11/2020</td>
                    <td>Adafia</td>
                    <td>adafia@gmail.com</td>
                    <td>SRID=4326;POINT(29.245 -1.23)</td>
                    <td>xhdigwihgw</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>8/11/2020</td>
                    <td>Adafia</td>
                    <td>adafia@gmail.com</td>
                    <td>SRID=4326;POINT(29.245 -1.23)</td>
                    <td>xhdigwihgw</td>
                </tr>
            </table>
        </div>
    </div>
)

export default History;