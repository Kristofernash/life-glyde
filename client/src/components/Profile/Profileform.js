import React, { Component } from 'react';
import API from "../../utils/API";
import withAuth from '../withAuth';
import { Link } from 'react-router-dom';

class Profileform extends Component {

    state = {
        id: this.props.user.id,
        firstName: '',
        lastName: '',
        phoneNum: '',
        // profilePic: '',
        glider: '',
        ushpaRating: '',
        medicalInfo: '',
        emergencyContactName: '',
        emergencyContactRelation: '',
        emergencyContactPhone: ''
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
          this.setState({
            id: this.props.user.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            phoneNum: res.data.phoneNum,
            glider: res.data.glider,
            ushpaRating: res.data.ushpaRating,
            medicalInfo: res.data.medicalInfo,
            emergencyContactName: res.data.emergencyContactName,
            emergencyContactRelation: res.data.emergencyContactRelation,
            emergencyContactPhone: res.data.emergencyContactPhone
          })
        });
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
            .then(res => console.log(res.data),
            alert("Your Profile Information Has Been Updated")
        )
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
                            value={this.state.firstName || ''}
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
                            value={this.state.lastName || ''}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <p>Phone Number:</p>
                        <input
                            name="phoneNum"
                            placeholder='Phone #'
                            type="text"
                            className="form-control"
                            value={this.state.phoneNum || ''}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
{/*                     <div className="form-group col-md-6">
                        <input
                            name="profilePic"
                            placeholder='Profile Picture URL:'
                            type="text"
                            className="form-control"
                            value={this.state.profilePic}
                            onChange={e => this.change(e)}>
                        </input>
                    </div> */}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <p>Glider Make and Color(s):</p>
                        <input
                            name="glider"
                            placeholder='Glider Make and Color/s'
                            type="text"
                            className="form-control"
                            value={this.state.glider || ''}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                    <p>USHPA Rating:</p>
                        <input
                            name="ushpaRating"
                            placeholder='USHPA Rating'
                            type="text"
                            className="form-control"
                            value={this.state.ushpaRating || ''}
                            onChange={e => this.change(e)}>
                        </input>
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-12">
                <p>Pertinent Medical Info:</p>
                <input
                    name="medicalInfo"
                    placeholder='Pertinent Medical Info'
                    type="text"
                    className="form-control"
                    value={this.state.medicalInfo || ''}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-4">
                <p>Emergency Contact Name:</p>
                <input
                    name="emergencyContactName"
                    placeholder='Emergency Contact Name'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactName || ''}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                
                <div className="form-group col-md-4">
                <p>Emergency Contact Relation:</p>
                <input
                    name="emergencyContactRelation"
                    placeholder='Emergency Contact Relation'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactRelation || ''}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                <div className="form-group col-md-4">
                <p>Emergency Contact Phone #:</p>
                <input
                    name="emergencyContactPhone"
                    placeholder='Emergency Contact Phone #'
                    type="text"
                    className="form-control"
                    value={this.state.emergencyContactPhone || ''}
                    onChange={e => this.change(e)}>
                </input>
                </div>
                </div>
                <button type="button" className="btn btn-dark" onClick={(e) => this.onSubmit(e)}>Update Info</button>
                { " " }
                <Link to="/HomePage">Go home</Link>
            </form >
        )
    };
}

export default withAuth(Profileform);