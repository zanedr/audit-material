import React, { Component } from 'react';
import { Typography, 
         Card, 
         CardContent, 
         Input, 
         InputLabel,
         MenuItem,
         Select,
         FormControl,
         FormHelperText } from '@material-ui/core';
import './Audit.css';
import { auditStub } from './AuditStubData';

class Audit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auditPacks: [],
      selectedPack: '',
      packActions: [],
      selectedAction: '',
      runAsUser: '',
    }

    this.auditStyles = {
      mainTitle: {
        fontSize: 32,
        marginBottom: 20,
        marginTop: 15,
        marginLeft: 20,
        paddingBottom: 1,
        paddingLeft: 20
      },
      cardContainer: {
        width: 'calc(100vw - 40px)',
        margin: '0 auto'
      },
      formControl: {
        width: 220,
        minWidth: 200,
      },
      select: {
        width: 220,
      }
    }
  }

  evaluateChoices(choices) {
    return choices.map(c => {
      return <MenuItem key={c} value={c}>{c}</MenuItem>
    })
  }

  handleChange = (event) => {
    this.setState({ selectedPack: event.target.value });
  }

  render() {
    return (
      <div className="Audit">
        <Typography style={this.auditStyles.mainTitle} className="audit-main-title" variant="headline">Audit</Typography>
        <Card style={this.auditStyles.cardContainer}>
          <CardContent>
            <span className="audit-options-container">
              <div className="audit-option">
                <FormControl style={this.auditStyles.formControl}>
                  <InputLabel htmlFor="pack-helper">Packs</InputLabel>
                  <Select
                    style={this.auditStyles.select}
                    value={this.state.selectedPack}
                    onChange={this.handleChange}
                    input={<Input name="pack" id="pack-helper" />}>
                    {this.evaluateChoices(auditStub)}
                  </Select>
                  <FormHelperText style={{fontSize: 14}}>Please select a pack</FormHelperText>
                </FormControl>
              </div>
              <div className="audit-option">
                <FormControl style={this.auditStyles.formControl}>
                  <InputLabel htmlFor="pack-helper">Choose an audit</InputLabel>
                  <Select
                    style={this.auditStyles.select}
                    value={this.state.selectedAction}
                    onChange={this.handleChange}
                    input={<Input name="pack" id="pack-helper" />}>
                    {this.evaluateChoices(auditStub)}
                  </Select>
                  <FormHelperText style={{fontSize: 14}}>Please select an action</FormHelperText>
                </FormControl>
              </div>
              <div className="audit-option">
                <FormControl style={this.auditStyles.formControl}>
                  <InputLabel htmlFor="pack-helper">Run as</InputLabel>
                  <Select
                    style={this.auditStyles.select}
                    value={this.state.runAsUser}
                    onChange={this.handleChange}
                    input={<Input name="pack" id="pack-helper" />}>
                    {this.evaluateChoices(auditStub)}
                  </Select>
                  <FormHelperText style={{fontSize: 14}}>Run as user</FormHelperText>
                </FormControl>
              </div>
            </span>

            <div className="devices-table">

            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Audit;
