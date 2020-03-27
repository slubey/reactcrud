import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
// import '../style.css';
export class DogListClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dogs: []
        };

        this.handleDelete = this.handleDelete.bind(this)
        this.getList = this.getList.bind(this)
    }

    getList() {
        axios.get('https://localhost:44382/api/dogsapi/')
        .then(res => {
            this.setState({
                dogs: res.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    componentDidMount() {
       this.getList();
    }

    renderTableData() {
        return this.state.dogs.map((dog, index) => {
            const { id, breed, imageUri } = dog
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{breed}</td>
                    <td>{imageUri}</td>
                    <td>
                        <Link className="edit-link" to={"/dogput/" + id}>
                            Edit
                        </Link>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={() => { if (window.confirm('Delete the item?')) { this.handleDelete(id) }; }}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    handleDelete = (id) => {
        axios.delete('https://localhost:44382/api/dogsapi/' + id)
            .then(res => {
                this.getList();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="table-wrapper">
                <p>Items List</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Breed</th>
                            <th>ImageUri</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </div>);
    }
}
export default DogListClassComponent;