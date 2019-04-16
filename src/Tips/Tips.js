import React from 'react'
import { connect } from 'react-redux';

// Selectors
import { getColorScheme } from '../Home/Home.selectors';

// Styles
import styles from './Tips.css';

const Tips = ({
    colorScheme,
}) => {
    return (
        <div id='tips' className={styles.container} style={{backgroundColor: `${colorScheme.background}`, color: `${colorScheme.bodyColor}`}}>
            <div className={styles.title}>Tips & Tricks</div>
            <div className={styles.section}>
                <div className={styles.content}>
                    Coming Soon!
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    colorScheme: getColorScheme(state),
});

export default connect(mapStateToProps)(Tips);
