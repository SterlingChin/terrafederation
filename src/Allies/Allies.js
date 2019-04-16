import React from 'react'
import { connect } from 'react-redux';
import isMobile from '../Utils/isMobile';


// Selectors
import { getColorScheme } from '../Home/Home.selectors';

// Styles
import styles from './Allies.css';

const isMobileWidth = isMobile.isMobile ? '100%' : '50vw'

const Allies = ({
    colorScheme,
}) => {
    return (
        <div id='allies' className={styles.container} style={{backgroundColor: `${colorScheme.background}`, color: `${colorScheme.bodyColor}`}}>
            <div className={styles.title}>Allies</div>
            <div className={styles.section} style={{width: `${isMobileWidth}`}}>
                <div className={styles.content}>
                    <li>TA</li>
                    <li>TOS</li>
                    <li>DMK</li>
                    <li>LOP</li>
                    <li>Anyone with "GAUx" in their name</li>
                </div>
            </div>
            <div className={styles.title}>Enemies</div>
            <div className={styles.section} style={{width: `${isMobileWidth}`}}>
                <div className={styles.content}>
                    <li>NAS</li>
                    <li>XENO (all groups)</li>
                    <li>PICM</li>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    colorScheme: getColorScheme(state),
});

export default connect(mapStateToProps)(Allies);
