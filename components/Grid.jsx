import Image from "next/image";
import fruits from "../public/images/fruits.jpg";
import Juice from "../public/images/juice.jpg";
import Healty from "../public/images/healty.jpg";

const Grid = () => {
  return (
    <>
      <div className="grid--main">
        <div className="grid--image-con  image1">
          <Image className="grid-image" src={fruits} alt="Fruits" />
        </div>
        <div className="grid--image-con image2">
          <Image className="grid-image" src={Juice} alt="Fruits" />
        </div>
        <div className="grid--image-con image3">
          <Image className="grid-image" src={Healty} alt="Fruits" />
        </div>
      </div>
    </>
  );
};
export default Grid;
