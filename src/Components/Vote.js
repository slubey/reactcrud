import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Image } from 'react-bootstrap'
// import "./styles.css";

function Vote() {
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


    return (
        <div>
            <h1> Votes </h1>
          

            {commitHistory.map((c, index) => (
                <div key={index}>

                    <div>
                        <h2 style={{ textDecoration: "Underline" }}>
                            {c.breed}
                        </h2>
                        <Image id="dogImage" src={c.imageUri} />
                        <img id="dogImage2" src={c.imageUri} alt="dogImage2" />
                        <p>{c.imageUri}</p>
                    </div>
                    <hr />

                </div>
            ))}
        </div>
    );
}

//const rootElement = document.getElementById("root");
// export default ReactDOM.render(<Vote />, rootElement);
export default Vote;