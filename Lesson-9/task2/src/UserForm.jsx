import React from 'react';

class UserForm extends React.Component {
    state = {
        name: '',
        student: '',
        ocupation: '',
        about: ''
    };

    handleChange = event => {
        const { name, value, checked, type } = event.target;
        const val = type === 'checkbox'
            ? checked
            : value;
        this.setState({
            [name]: val
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-input" value={this.state.name} onChange={this.handleChange}  type="text" id="name" name="name" />
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="student">Student</label>
                    <input className="form-input" value={this.state.student} onChange={this.handleChange}  type="checkbox" id="student" name="student" />
                </div>
                <div className="form-control">
                    <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
                    <select name="occupation" value={this.state.ocupation} onChange={this.handleChange}  className="form-input">
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="coconut">Sidney</option>
                        <option value="mango">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="form-label" id="about" htmlFor="about">About</label>
                    <textarea name="about" value={this.state.about} onChange={this.handleChange} className="form-input" />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default UserForm;