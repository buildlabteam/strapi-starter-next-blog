import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
  if(image){
    const imageUrl = getStrapiMedia(image);
    return (
      <img
        src={imageUrl}
        alt={image.alternativeText || image.name}
        style={style}
      />
    );
  }else{
    return <div/>
  }
};

export default Image;
