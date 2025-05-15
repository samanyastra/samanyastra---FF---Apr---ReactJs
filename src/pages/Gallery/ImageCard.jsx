import './gallery.css'

const ImageCard = ({img_url, author}) => {
    return <div className='image-container'>
        <img src={img_url} height={"180px"} width={"180px"} />
        <p>{author}</p>
    </div>
}

export default ImageCard