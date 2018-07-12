import React, { Component } from 'react';
import './UserMenu.css';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';

class UserMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.userMenuStyles = {
            details: {
                padding: 0,
                margin: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'middle'
            },
            icon: {
                paddingLeft: 25
            }

        }
    }

  render() {
    return (
      <div className="user-menu-container">
        <ExpansionPanel className="user-menu">
        <ExpansionPanelSummary className="user-menu-summary" >
            <AccountCircle className="user-menu-icon" />
            <p className="user-menu-title">Menu</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={this.userMenuStyles.details} className="user-menu-details">
            <div className="user-menu-option">
                <ExitToApp style={this.userMenuStyles.icon} className="user-menu-option-icon"/>
                    <p className="user-menu-option-text">Feedback</p>
            </div>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={this.userMenuStyles.details} className="user-menu-details">
            <div className="user-menu-option">
                <ExitToApp style={this.userMenuStyles.icon} className="user-menu-option-icon"/>
                    <p className="user-menu-option-text">Logout</p>
            </div>
            </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    );
  }
}

export default UserMenu;
