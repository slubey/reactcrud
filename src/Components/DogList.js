import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Image } from 'react-bootstrap'
// mport { Button } from "@material-ui/core";
// import '../style/dogListImage';
// import "./styles.css";

function DogList() {
    // const [page, setPage] = useState(1);
    const [dogList, setDogList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // const loadMoreCommit = () => {
    //     setPage(page + 1);
    // };
    const imageStyle = {
        margin: '40px',
        border: '5px solid pink',
        height: 100,
        width: 100
      };
    useEffect(() => {
        // axios.get('http://localhost:4000/business')
        axios.get('https://localhost:44382/api/dogsapi/')

            .then(response => {
                console.log("dogsapi data " + response.data);
                setDogList(response.data);
                // this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    return (
        <div>
            <h1> Dog List </h1>


            {dogList.map((c, index) => (
                <div key={index}>

                    <div> {c.breed}  <Image style={imageStyle} id="dogImage" src={c.imageUri} responsive />
                       {/* <Button onClick="this.del" */}
                       
                        {/* <h2 style={{ textDecoration: "Underline" }}>
                            {c.breed}
                        </h2>
                        <Image style={imageStyle} id="dogImage" src={c.imageUri} responsive /> */}
                        {/* <img style={imageStyle} id="dogImage2" src={c.imageUri} alt="dogImage2" /> */}
                        {/* <ResponsiveEmbed a16by9>
                            <embed type="image/href+xml" href="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" />
                        </ResponsiveEmbed>
                        <div style={{ width: 660, height: 'auto' }}>
                            <ResponsiveEmbed a16by9>
                                <embed type="image/href+xml" href="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" />
                            </ResponsiveEmbed>
                        </div> */}
                        {/* <p>{c.imageUri}</p> */}
                    </div>
                    <hr />

                </div>
            ))}
        </div>
    );
}

//const rootElement = document.getElementById("root");
// export default ReactDOM.render(<Vote />, rootElement);
export default DogList;