import React, {Component} from 'react';

export default class Profileform extends Component {

    state = {
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
    }

    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="lastName"
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="phoneNum"
                    placeholder='Phone #'
                    value={this.state.phoneNum}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="profilePic"
                    placeholder='Profile Picture URL:'
                    value={this.state.profilePic}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="glider"
                    placeholder='Glider Make and Color/s'
                    value={this.state.glider}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="ushpaRating"
                    placeholder='USHPA Rating'
                    value={this.state.ushpaRating}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="medicalInfo"
                    placeholder='Pertinent Medical Info'
                    value={this.state.medicalInfo}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="emergencyContactName"
                    placeholder='Emergency Contact Name'
                    value={this.state.emergencyContactName}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="emergencyContactRelation"
                    placeholder='Emergency Contact Relation'
                    value={this.state.emergencyContactRelation}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <input
                    name="emergencyContactPhone"
                    placeholder='Emergency Contact Phone #'
                    value={this.state.emergencyContactPhone}
                    onChange={e => this.change(e)}>
                </input>
                <br />
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form>
        )
    };
}