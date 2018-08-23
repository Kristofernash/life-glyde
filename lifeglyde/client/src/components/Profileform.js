import React, { Component } from 'react';
import API from "../utils/API";

export default class Profileform extends Component {

    state = {
        id: this.props.userId,
        firstName: '',
        lastName: '',
        phoneNum: '',
        profilePic: '',
        glider: '',
        ushpaRating: '',
        medicalInfo: '',
        emergencyContactName: '',
        emergencyContactRelation: '',
        emergencyContactPhone: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        API.updateUser(this.state)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            name="firstName"
                            placeholder='First Name'
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                    <br />
                    <div className="form-group col-md-6">
                        <input
                            name="lastName"
                            placeholder='Last Name'
                            type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            name="phoneNum"
                            placeholder='Phone #'
                            type="text"
                            className="form-control"
                            value={this.state.phoneNum}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            name="profilePic"
                            placeholder='Profile Picture URL:'
                            type="text"
                            className="form-control"
                            value={this.state.profilePic}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            name="glider"
                            placeholder='Glider Make and Color/s'
                            type="text"
                            className="form-control"
                            value={this.state.glider}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            name="ushpaRating"
                            placeholder='USHPA Rating'
                            type="text"
                            className="form-control"
                            value={this.state.ushpaRating}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-12">
                <input
                    name="medicalInfo"
                    placeholder='Pertinent Medical Info'
                    type="text"
                    className="form-control"
                    value={this.state.medicalInfo}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-4">
                <input
                    name="emergencyContactName"
                    placeholder='Emergency Contact Name'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactName}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                
                <div className="form-group col-md-4">
                <input
                    name="emergencyContactRelation"
                    placeholder='Emergency Contact Relation'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactRelation}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                <div className="form-group col-md-4">
                <input
                    name="emergencyContactPhone"
                    placeholder='Emergency Contact Phone #'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactPhone}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                </div>
                <button type="button" className="btn btn-dark" onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form >
        )
    };
}