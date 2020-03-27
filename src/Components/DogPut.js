import React, { Component } from "react";
import axios from 'axios';
// import '../style.css';
export class DogPut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: props.match.params.id,
            Breed: ' ',
            ImageUri: ' '

        }
        // constructor() {
        //     super()

        //     this.state = {
        //         Breed: "123",
        //         ImageUri: "567"
        //     }

        // this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    }
     componentDidMount() {
        // this.getData();
        console.log("componentDidMount  " + this.state.Breed + " " + this.state.ImageUri + " id " + this.props.match.params.id);
        axios.get('https://localhost:44382/api/dogsapi/' + this.props.match.params.id)
           // .then(res => { console.log("ge222t"); })
            .then(res => {

                this.setState({
                    Breed: res.data.breed,
                    ImageUri: res.data.imageUri
                });

            })
            .catch((error) => {
                console.log(error);
            })
        // this.setState({
        //     Breed: "value2",
        //     ImageUri: "ImageUri3"
        // });
        console.log("componentDidMount  22  " + this.state.Breed + " " + this.state.ImageUri);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('id :' + this.props.match.params.id);
        console.log('current state:  ' + this.state.Breed + "  " + this.state.ImageUri);
        // if(this.state.Breed.length === 0 || this.state.ImageUri.length === 0)
        // // TODO SL add validation message
        // return;

        // console.log('submitting form. ');
        // e.preventDefault();
        const obj = {
            Id: parseInt(this.props.match.params.id),
            Breed: this.state.Breed,
            ImageUri: this.state.ImageUri
        };

        // console.log('submitting obj. ' + obj);
        axios.put('https://localhost:44382/api/dogsapi/', obj)
            .then(res => console.log(res.data));

        // this.setState({
        //     Breed: '',
        //     ImageUri: ''
        // });
    }
    render() {
        return (
            <div>
                <h2>Dog Put</h2>
                <form action="/myform" method="post" onSubmit={this.handleSubmit} noValidate>
                    {
                        <div>
                            <p>
                                Breed: <br />
                                <input type="text" onChange={this.handleChange}
                                    value={this.state.Breed} name="Breed" required />
                            </p>
                            <p>
                                Image Uri: <br />
                                <input value={this.state.ImageUri} onChange={this.handleChange} type="text" name="ImageUri" required />
                            </p>
                        </div>
                    }
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
    // constructor(props) {
    //     super(props)
    // constructor() {
    //     super()

    //     this.state = {
    //         id: '1',    //props.match.params.id,
    //         Breed: '1',
    //         ImageUri: '1'

    //     }

    //     //this.props = props;
    //     // this.handleBlur = this.handleBlur.bind(this);
    //     //this.handleOnChange = this.handleOnChange.bind(this);
    //     this.componentDidMount = this.componentDidMount(this);
    //     // this.getData = this.getData(this);
    // }

    // getData() {

    //     console.log("getData");
    //     this.setState({
    //         breed: '11',// res.data.breed,
    //         imageUri: '22'// res.data.imageUri,
    //     });
    //     // axios.get('http://localhost:44382/api/dogsapi/' + this.props.match.params.id)
    //     //    // .then(res => { console.log("ge222t"); })
    //     //     .then(res => {

    //     //         this.setState({
    //     //             breed: '11',// res.data.breed,
    //     //             imageUri: '22'// res.data.imageUri,
    //     //         });

    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error);
    //     //     })
    //    // console.log(this.state);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     let newName = 'Obaseki Nosa'
    //     // Don't forget to compare states
    //     if (prevState && prevState.name !== newName) {
    //       this.setState({breed: newName});
    //     }
    //     console.log('componentDidUpdate  :  ' + this.state);
    //   }

    // componentDidMount() {
    //     // this.getData();
    //     console.log(" componentDidMount  " + this.state.Breed);
    //     this.setState({
    //         Breed: '1221',// res.data.breed,
    //         ImageUri: '2332'// res.data.imageUri,
    //     });
    //     console.log(" componentDidMount  " + this.state.Breed);
    //     // props.match.params.id

    //     //
    //     //axios.get('https://localhost:44382/api/dogsapi/')
    //     // https://localhost:44382/api/dogsapi/1
    //     // http://localhost:44382/api/dogsapi/1


    //     // console.log("get");
    //     // axios.get('http://localhost:44382/api/dogsapi/' + this.props.match.params.id)
    //     //     .then(res => { console.log("ge222t"); })
    //     //     .then(res => {

    //     //         this.setState({
    //     //             breed: '11',// res.data.breed,
    //     //             imageUri: '22'// res.data.imageUri,
    //     //         });

    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error);
    //     //     })
    //     // console.log(this.state);

    // }

    // handleOnChange(event) {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
    // handleBlur(event) {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (this.state.breed.length === 0 || this.state.imageUri.length === 0)
    //         // TODO SL add validation message
    //         return;

    //     console.log('submitting form. ');
    //     e.preventDefault();
    //     const dog = {
    //         id: this.state.id,
    //         breed: this.state.breed,
    //         imageUri: this.state.imageUri
    //     };

    //     console.log('submitting obj. ' + dog);

    //     const obj = {
    //         breed: this.state.breed,
    //         imageUri: this.state.imageUri
    //     };

    //     axios.put('https://localhost:44382/api/dogsapi/', obj)
    //         .then(res => console.log(res.data));
    // }

    // render() {
    //     return (
    //         <div>
    //             <h2>Dog Put</h2>
    //             <form action="/myform" method="post" onSubmit={this.handleSubmit} noValidate>
    //                 {
    //                     <div>
    //                         <p>
    //                             Breed: <br />
    //                             {/* value={this.state.data.breed} onChange={this.handleOnChange}  */}
    //                             <input type="text" name="breed" onBlur={this.handleBlur} required />
    //                         </p>
    //                         {/* <p>
    //                             Image Uri: <br />
    //                             <input type="text" onChange={this.handleOnChange} name="imageUri" onBlur={this.handleBlur} required />
    //                         </p> */}
    //                     </div>
    //                 }
    //                 <input type="submit" value="Submit Form" />
    //             </form>
    //         </div>
    //     );
    // }
}
export default DogPut;