import React, { Component } from 'react'

class TableRow extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.obj.student_name}</td>
                    <td>{this.props.obj.school_name}</td>
                    <td>{this.props.obj.class_name}</td>
                    <td><button className="btn btn-primary">Edit</button></td>
                    <td><button className="btn btn-primary">Delete</button></td>
                </tr>
        );
    }
}

export default TableRow;