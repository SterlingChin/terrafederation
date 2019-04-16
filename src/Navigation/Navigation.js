import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isMobile from '../Utils/isMobile';

import { getColorScheme } from '../Home/Home.selectors';

// Icon
import { Menu } from '../Utils/icons/Menu';

// Styles
import styles from './Navigation.css';

class Navigation extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            isOpen: props.isOpen,
            isMobile: isMobile.isMobile
        }
    }

    handleOpenMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        const { isOpen } = this.state;
        const { colorScheme } = this.props;
        const sideNav = isOpen
            ? {width: '40%', transition: 'width .5s', backgroundColor: `${colorScheme.header}`, color: `${colorScheme.headerColor}`}
            : {width: 0, transition: 'width .5s', backgroundColor: `${colorScheme.header}`, color: `${colorScheme.headerColor}`}
        return (
            <div className={styles.body} style={{backgroundColor: `${colorScheme.header}`, color: `${colorScheme.headerColor}`}}>
                <Menu
                    className={styles.menu}
                    fill={colorScheme.headerColor || '#dadcdf'}
                    height={24}
                    onClick={this.handleOpenMenu}
                    width={24}
                />
                <div className={styles.linkContainer} style={sideNav}>
                    <Link
                        onClick={this.handleOpenMenu}
                        className={styles.link}
                        style={{color: `${colorScheme.headerColor}`}}
                        to="/">Home</Link>
                    <Link
                        onClick={this.handleOpenMenu}
                        className={styles.link}
                        style={{color: `${colorScheme.headerColor}`}}
                        to="/members">Members</Link>
                    <Link
                        onClick={this.handleOpenMenu}
                        className={styles.link}
                        style={{color: `${colorScheme.headerColor}`}}
                        to="/allies">Allies</Link>
                    <Link
                        onClick={this.handleOpenMenu}
                        className={styles.link}
                        style={{color: `${colorScheme.headerColor}`}}
                        to="/tips">Tips</Link>
                </div>
                <div className={styles.title} style={{color: `${colorScheme.headerColor}`}}>The Terra Federation</div>
                <div className={styles.icon} >
                    <img src={require('../Utils/icons/badge.png')} alt='' className={styles.icon}/>
                </div>
            </div>
        )
    }
};

Navigation.defaultProps = {
    isOpen: false,

}

export const mapStateToProps = (state) => ({
    colorScheme: getColorScheme(state),
})

export default connect(mapStateToProps)(Navigation);