import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";
import './gallery.css'

const Gallery = () => {
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100")
            .then((res) => {
                console.log(res.data)
                setImagesData(res.data)
            })
    },  [])
    // useEffect(callback_function, []) // [] -> dependency array


    return <div style={{width:"100%"}}>
        <h1>Gallery of Images</h1>
        <hr />
       
        <div className="images-body" >
            {
                imagesData.map(image =>  <ImageCard author={image.author} img_url={image.download_url}   />)
            }
        </div>
    </div>
}

export default Gallery;


/**
 * 
 * [
    {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/...",
        "download_url": "https://picsum.photos/..."
    }
]
 */