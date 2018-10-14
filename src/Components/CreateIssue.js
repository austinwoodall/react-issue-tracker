import React, { Component } from 'react';

import IssuesListComponent from './IssuesList';

import './CreateIssueStyle.scss';

class CreateIssueComponent extends Component {
    constructor(props) {
        super(props);

        this.state= {
            issues: [],
            desc: '',
            name: '',
            severity: 'Low'
        }

        this._handleDescChange = this._handleDescChange.bind(this);
        this._handleSeverityChange = this._handleSeverityChange.bind(this);
        this._handleNameChange = this._handleNameChange.bind(this);
        this._addIssue = this._addIssue.bind(this);
        this._deleteIssue = this._deleteIssue.bind(this);
    }

    _handleDescChange(e) {
        this.setState({
            desc: e.target.value,
        });
    }

    _handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    _handleSeverityChange(e) {
        this.setState({
            severity: e.target.value
        });
    }

    _addIssue(e) {
        e.preventDefault();
        if(!this.state.desc.length || !this.state.name.length) {
            alert("You must add a description and name");
            return;
        }

        const newIssue = {
            id: Date.now(),
            description: this.state.desc,
            name: this.state.name,
            severity: this.state.severity,
        }

        this.setState(state => ({
            issues: state.issues.concat(newIssue),
            desc: '',
            severity: 'Low',
            name: ''
        }))
    }

    _deleteIssue(id) {
        this.setState({
            issues: this.state.issues.filter(issue => issue !== id)
        });
    }

    render() {
        return (
            <div className="create-issue-container">
                <div className="create-issue">
                    <h2>Add Issue</h2>
                    <ul className="wrapper">
                        <li className="form-row">
                            <label htmlFor="">Description</label>
                            <input onChange={this._handleDescChange} value={this.state.desc} className="input" type="text" placeholder="Description" required />
                        </li>
                        <li className="form-row">
                            <label htmlFor="">Severity</label>
                            <select onChange={this._handleSeverityChange} value={this.state.severity} className="input" required>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </li>
                        <li className="form-row">
                            <label htmlFor="">Name</label>
                            <input onChange={this._handleNameChange} value={this.state.name} className="input" type="text" placeholder="Name" required/>
                        </li>
                    </ul>
                    <button onClick={this._addIssue}>Create Issue</button>
                </div>
                <IssuesListComponent issues={this.state.issues} _deleteIssue={this._deleteIssue.bind(this)} />
            </div>
            
        );
    }
}

export default CreateIssueComponent;