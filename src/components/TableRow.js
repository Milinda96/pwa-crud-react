import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class TableRow extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.obj.student_name}</td>
                    <td>{this.props.obj.school_name}</td>
                    <td>{this.props.obj.class_name}</td>
                    <td><Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link></td>
                    <td><button className="btn btn-primary">Delete</button></td>
                </tr>
        );
    }
}

export default TableRow;