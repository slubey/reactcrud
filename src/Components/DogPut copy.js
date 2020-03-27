import React, { Component } from "react";
import axios from 'axios';
// import '../style.css';
export class DogPutCopy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            breed: '',
            imageUri: ''
            
        }

        this.props = props;
        this.handleBlur = this.handleBlur.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        // props.match.params.id

        //
        //axios.get('https://localhost:44382/api/dogsapi/')
        // https://localhost:44382/api/dogsapi/1
        // http://localhost:44382/api/dogsapi/1
        axios.get('http://localhost:44382/api/dogsapi/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    breed: res.data.breed,
                    imageUri: res.data.imageUri,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleOnChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleBlur(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.breed.length === 0 || this.state.imageUri.length === 0)
            // TODO SL add validation message
            return;

        console.log('submitting form. ');
        e.preventDefault();
        const dog = {
            id: this.state.id,
            breed: this.state.breed,
            imageUri: this.state.imageUri
        };

        console.log('submitting obj. ' + dog);
        //         https://localhost:44382/api/dogsapi/1

        // update(e) {
        //     e.preventDefault();
        //     const employee = {
        //         name: this.state.name,
        //         age: this.state.age,
        //         salary: this.state.salary,
        //     }
        //     axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
        //     .then(res => console.log(res.data));
        // }


        // axios.put('https://localhost:44382/api/dogsapi/1',dog)
        // axios.post('https://localhost:44382/api/dogsapi/', obj)
        //     .then(res => console.log(res.data));
        // axios.put('https://localhost:44382/api/dogsapi/1',dog)
        const obj = {
            breed: this.state.breed,
            imageUri: this.state.imageUri
        };

        axios.put('https://localhost:44382/api/dogsapi/',obj)
            .then(res => console.log(res.data));

        // this.setState({
        //     Breed: '',
        //     ImageUri: ''
        // });
    }

    render() {
        return (
            <div>
                <h2>Dog Post</h2>
                <form action="/myform" method="post" onSubmit={this.handleSubmit} noValidate>
                    {
                        <div>
                            <p>
                                Breed: <br />
                                {/* value={this.state.data.breed}  */}
                                <input value={this.state.breed} type="text" onChange={this.handleOnChange} name="breed" onBlur={this.handleBlur} required />
                            </p>
                            <p>
                                Image Uri: <br />
                                <input type="text" onChange={this.handleOnChange}  name="imageUri" onBlur={this.handleBlur} required />
                            </p>
                        </div>
                    }
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}
export default DogPutCopy;