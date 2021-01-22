import React, { Component } from 'react';
import axios from "axios";

export default class Edit extends Component {
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
    componentDidMount() {
        axios.get('http://localhost:4000/student/edit/' + this.props.match.params._id).then(
            res => {
                this.setState({
                    student_name: res.data.student_name,
                    school_name: res.data.school_name,
                    class_name: res.data.class_name
                });
            }
        ).catch((err) => {
            console.log(err);
        });
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
        axios.post('http://localhost:4000/student/edit/' + this.props.match.params._id, obj).then(
            res => {
                console.log(res.data);
            });
        this.props.history.push('/index');
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
                <h3> Edit Student </h3>
            </div>
        );
    }
}