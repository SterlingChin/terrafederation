import React from 'react';
import { connect } from 'react-redux';

// Selectors
import { getColorScheme } from './Home.selectors';


// Styles
import styles from './Home.css';

const Current = ({
    colorScheme
}) => {
    const { background, bodyColor } = colorScheme;
    const newsLink = 'https://www.reddit.com/r/STFC_Official/comments/bctzre/new_expansion_the_augment/?fbclid=IwAR3Pcjfd1WXKPcD7uBfbhmu2nH8x194pX5gsBKVhPOi9Ta1wrYkrt6BvvCA'
    return (
    <div className={styles.container} style={{backgroundColor: `${background}`, color: `${bodyColor}`}}>
        <div className={styles.title}>Welcome to Terra Federation</div>
        <div className={styles.section}>
            <div className={styles.header}>
                News:
            </div>
            <div className={styles.content}>
                The Augment Faction is coming. There are new crew (looks liek they are all focused on being used to attack bases) and a new ship.
            </div>
            <div className={styles.content}>
            TLDR:<ul>
                    <li>
                        New Ship: Botany Bay - Survey
                    </li>
                    <li>
                        New Crew: Joaquin, Kati, Otto
                    </li>
            </ul>
            </div>
            <div className={styles.content}>
                Check out the official reddit thread here: <a style={{color: `${bodyColor}`}} href={newsLink} target="_blank" rel='noopener noreferrer'>Reddit Link</a>
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.header}>
                Information:
            </div>
            <div className={styles.content}>
                Terra Federation is part of a larger group of alliances called "Galactic Alliance Union".  We put "GAUx" in front of our names to distinguish ourselves.
            </div>
        </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
    colorScheme: getColorScheme(state),
})

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Current)