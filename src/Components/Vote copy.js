import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Image } from 'react-bootstrap'
import "../styles/DogList.css";
import Table from 'react-bootstrap/Table';

function VoteCopy() {
    // const [page, setPage] = useState(1);
    const [commitHistory, setCommitHistory] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // const loadMoreCommit = () => {
    //     setPage(page + 1);
    // };

    useEffect(() => {
        // axios.get('http://localhost:4000/business')
        axios.get('https://localhost:44382/api/dogsapi/')

            .then(response => {
                console.log("dogsapi data " + response.data);
                setCommitHistory(response.data);
                // this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    // renderTableData()  {
    //     return this.state.dogs.map((dog, index) => {
    //         const { id, breed, imageUri } = dog
    //         return (
    //             <tr key={id}>
    //                 <td>{id}</td>
    //                 <td>{breed}</td>
    //                 <td>{imageUri}</td>
    //                 <td>
    //                     <Link className="edit-link" to={"/dogput/" + id}>
    //                         Edit
    //                     </Link>
    //                 </td>
    //                 <td>
    //                     <button className="btn btn-danger" onClick={() => { if (window.confirm('Delete the item?')) { this.handleDelete(id) }; }}>Delete</button>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // };

    return (
        <div>
            <h1> Items </h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>
                    {commitHistory.map((c, index) => (
                        <div key={index}>
 {/* //             <tr key={id}>
    //                 <td>{id}</td>
    //                 <td>{breed}</td>
    //                 <td>{imageUri}</td>
    //                 <td>
    //                     <Link className="edit-link" to={"/dogput/" + id}>
    //                         Edit
    //                     </Link>
    //                 </td>
    //                 <td>
    //                     <button className="btn btn-danger" onClick={() => { if (window.confirm('Delete the item?')) { this.handleDelete(id) }; }}>Delete</button>
    //                 </td>
    //             </tr> */}
                            {/* <div> */}
                            <h2 style={{ textDecoration: "Underline" }}>
                                {c.breed}
                            </h2>
                            <Image id="dogImage" className='dogListImage' src={c.imageUri} />
                            {/* <img id="dogImage2" src={c.imageUri} alt="dogImage2" /> */}
                            {/* <p>{c.imageUri}</p> */}
                            {/* </div>
                    <hr /> */}

                        </div>
                    ))}
                </tbody>
            </Table>


        </div>
    );
}

//const rootElement = document.getElementById("root");
// export default ReactDOM.render(<Vote />, rootElement);
export default VoteCopy;