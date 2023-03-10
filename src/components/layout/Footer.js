import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
    return (
       <footer className={styles.footer}>
<ul className={styles.socialList}>
<li><FaFacebook/></li>
<li><FaLinkedin/></li>
<li><FaInstagram/></li>
</ul>
<p className={styles.copyRight}><span>Costs</span> &copy;2022</p>
       </footer>
    )
}

export default Footer