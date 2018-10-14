import React, { Component } from 'react';

import './IssuesListStyle.scss';

class IssuesListComponent extends Component {

    _deleteIssue(id) {
        this.props._deleteIssue(id);
    }

    render() {
        return (
            <div className="issues-list">
                <h3>Issues</h3>
                <ul>
                    {this.props.issues.map(issue => (
                        <li key={issue.id}>
                            <p>Issue ID: <span>{issue.id}</span></p>
                            <h4>{issue.description}</h4>
                            <p></p>
                            <p>Severity: {issue.severity}</p>
                            <h6>Assigned to: {issue.name}</h6>
                            <button className="close">Close</button>
                            <button onClick={this._deleteIssue.bind(this, issue)} className="delete">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default IssuesListComponent;