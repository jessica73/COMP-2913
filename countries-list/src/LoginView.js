import React from 'react';
import Axios from 'axios';

class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            token: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: newValue
        });
    }
    
    handleSubmit(e) {
        Axios.post('https://damp-fortress-54104.herokuapp.com/login', this.state)
        .then((response) => {
            console.log(response.data);
            // // this.setState({
            // //     token: response.data.token
            // // }, () => {

            // // Axios.defaults.headers.common['Authorization'] = response.data.token;
            
            //     Axios.get('https://damp-fortress-54104.herokuapp.com/user_info', {
            //         headers: { 
            //             Authorization: response.data.token
            //         }
            //     })
            //     .then((response) => {
            //         console.log(response.data);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
            // // });

            this.props.onClick(true);
        })
        .catch((error) => {
            //console.log(error);
            
            alert("login failed");
            this.props.onClick(false);
        });        
        
        // Axios({
        //     method: 'get',
        //     url: 'https://damp-fortress-54104.herokuapp.com/user_info',
        //     auth: this.state
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .then((error) => {
        //     console.log(error);
        // });

        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username: 
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
        );
    }
}

export default LoginView;