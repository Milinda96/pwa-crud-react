import React, { Component } from "react";
import axios from "axios";
export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeSchooName = this.onChangeSchooName.bind(this);
        this.onChangeClassName = this.onChangeClassName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            school_name: '',
            class_name: ''
        };
    }
    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value,
        });
    }
    onChangeSchooName(e) {
        this.setState({
            school_name: e.target.value,
        });
    }
    onChangeClassName(e) {
        this.setState({
            class_name: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_name: this.state.student_name,
            school_name: this.state.school_name,
            class_name: this.state.class_name
        };
        axios.post('http://localhost:4000/student/add', obj).then(
            res => {
                console.log(res.data);
            });
        this.setState({
            student_name: '',
            school_name: '',
            class_name: ''
        });
    }

    render() {
        return (
            <div
                style={{
                    marginTop: 50,
                    marginLeft: 100,
                    marginRight: 100,
                }}
            >
                <h3> Add New Student </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Student Name: </label>
                        <input type="text" className="form-control" value={this.state.student_name} onChange={this.onChangeStudentName} />
                    </div>
                    <div className="form-group">
                        <label> School Name: </label>
                        <input type="text" className="form-control" value={this.state.school_name} onChange={this.onChangeSchooName} />
                    </div>
                    <div className="form-group">
                        <label> Student Class: </label>
                        <input type="text" className="form-control" value={this.state.class_name} onChange={this.onChangeClassName} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        );
    }
}
