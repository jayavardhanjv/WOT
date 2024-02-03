
import { Carousel } from "@material-tailwind/react";
 
export default function Carosal_images() {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded" autoplay={true} loop={true}>
      <img
        src="src\assets\Poster\poster.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="src\assets\Poster\poster.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="src\assets\Poster\poster.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />

    </Carousel>
  );
}