import React from 'react';
import { connect } from 'react-redux';
import { MembersList } from './MembersList'
import isMobile from '../Utils/isMobile';

// Selectors
import { getColorScheme } from '../Home/Home.selectors';

// Styles
import styles from './Members.css';

const isMobileWidth = isMobile.isMobile ? '100%' : '50vw'

const Members = ({ colorScheme }) => {
    console.log(isMobile)
    return (
    <div className={styles.container} style={{backgroundColor: `${colorScheme.background}`, color: `${colorScheme.bodyColor}`}}>
        <div className={styles.title}>Members</div>
        <div className={styles.members} style={{width: `${isMobileWidth}`}}>
            {MembersList.map(member => {
                return (
                    <div key={member.name} className={styles.member}>
                        <div className={`${styles.name}`}>
                            {member.name}
                        </div>
                        <div className={styles.rank}>
                            {member.rank}
                        </div>
                    </div>
                )}
            )}
        </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
    colorScheme: getColorScheme(state)
})

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Members)