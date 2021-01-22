import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { student: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/student').then(
            res => {
                this.setState({ student: res.data });
            }
        ).catch((err) => {
            console.log(err);
        });
    }
    tableRow() {
        return this.state.student.map((object, i) => {
            return <TableRow obj={object} key={i} />;
        });
    }
    render() {
        return (
            <div>
                <h3 align="center">Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20, marginLeft: 50, marginRight: 50 }}>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>School</th>
                            <th>Class</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.tableRow()}</tbody>
                </table>
            </div>
        );
    }
}