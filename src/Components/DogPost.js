import React, { Component } from "react";
import axios from 'axios';
// import '../style.css';
export class DogPost extends Component {
    constructor() {
        super()
    
        this.state = {
            Breed: '',
            ImageUri: ' '
        }
    
       // this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
      }
    //   componentDidMount() {
    //      // console.log("componentDidMount  " + this.state.Breed);
    //      this.setState({
    //         Breed: "value",
    //         ImageUri: "ImageUri"
    //     });
    //     // console.log("componentDidMount  " + this.state.Breed);
    //   }
    // static defaultProps = {
    //     value: ''
    // };

    // state = {
    //     value: this.props.value
    // };
    // handleChange = event => {
    //     this.setState({ value: event.target.value });
    //     console.log("handleChange  " + this.state.value);
    //     // + this.prevstate.value
    // }
    // handleBlur = event => {
    //     this.setState({ value: event.target.value });
    //     console.log("handleBlur  " + this.state.value);
    //     // + this.prevstate.value
    // }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // handleBlur(event) {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('current state:  ' + this.state.Breed + "  " + this.state.ImageUri);
        if(this.state.Breed.length === 0 || this.state.ImageUri.length === 0)
        // TODO SL add validation message
        return;

        // console.log('submitting form. ');
        // e.preventDefault();
        const obj = {
            Breed: this.state.Breed,
            ImageUri: this.state.ImageUri
        };

        // console.log('submitting obj. ' + obj);
        axios.post('https://localhost:44382/api/dogsapi/', obj)
            .then(res => console.log(res.data));

        this.setState({
            Breed: '',
            ImageUri: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Create New Item</h2>
                <form action="/myform" method="post" onSubmit={this.handleSubmit } noValidate>
                    {
                        <div>
                            <p>
                                Breed: <br />
                                <input type="text" onChange={this.handleChange} 
                                value={this.state.Breed} name="Breed" required />
                            </p>
                            <p>
                                Image Uri: <br />
                                <input value={this.state.ImageUri} onChange={this.handleChange}  type="text" name="ImageUri"  required />
                            </p>
                        </div>
                        /*<p>Textarea: <br />
                            <textarea id={this.props.id}
                                name={this.props.name}
                                defaultValue={this.state.value}
                                onChange={this.handleChange} />
                        </p>
                        <p>Checkbox: <br />
                            <input type="checkbox" name="category" value="category1" /> Cat1
                            <input type="checkbox" name="category" value="category2" /> Cat2
                            <input type="checkbox" name="category" value="category3" /> Cat3
                            </p>
                        <p>Radio: <br />
                            <input type="radio" name="location" value="location1" /> Loc1
                            <input type="radio" name="location" value="location2" /> Loc2
                            <input type="radio" name="location" value="location3" /> Loc3
                            </p>
                        <p>Select: <br />
                            <select name="product" defaultValue={2}>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </p> */
                    }
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default DogPost;

// function DogPost() {

//     useEffect(() => {
//         axios.post('https://localhost:44382/api/dogsapi/',
//             {
//                 Breed: "breed1",
//                 ImageUri: "ImageUri"

//             })
//     });

//     return (
//         <div>
//             <h1> Vote Post </h1>

//         </div>
//     );
// }

// export default DogPost;


// import React, { Component } from "react";
// import '../style.css';

// class FormSampleComponent extends Component {
//   constructor() {
//     super()

//     this.state = {
//       firstName: ""
//     }

//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name,value} = event.target
//     this.setState({
//       [name]: value
//     })
//   }


//   render() {
//     return (
//       <form>
//         <input type="text" value={this.state.firstName}   name="firstName" placeholder="First Name" onChange={this.handleChange} />
//         <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//       </form>
//     )
//   }

// }
// export default FormSampleComponent;
