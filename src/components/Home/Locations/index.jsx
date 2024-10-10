import { useDispatch, useSelector } from "react-redux";
import { setActiveImage } from "../../../redux/gallerySlice";

const Locations = () => {
  const dispatch = useDispatch();
  const { activeImage } = useSelector((state) => state.gallery);

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/location-1.jpg?alt=media&token=e6af1e9b-0a3f-4f5d-a46c-b8371c5e18d2",
      alt: "Nanjing",
      info: { title: "Nanjing", population: "Population: 2M" },
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/location-2.jpg?alt=media&token=5d7e3966-ebb8-4328-a2a2-1cc2bdeeb4f2",
      alt: "Landscape",
      info: { title: "Nanjing", population: "Population: 2M" },
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/location-3.jpg?alt=media&token=e98a0103-a64b-4ea4-a8bf-d136e7bf0911",
      alt: "Temple",
      info: { title: "Nanjing", population: "Population: 2M" },
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/location-4.jpg?alt=media&token=b7e04740-182a-40f3-a677-53fd431a1c6b",
      alt: "Bamboo Forest",
      info: { title: "Nanjing", population: "Population: 2M" },
    },
  ];

  const handleImageClick = (index) => {
    dispatch(setActiveImage(index));
  };

  return (
    <section>
      <div className="container">
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative flex-1 overflow-hidden transition-all rounded-3xl duration-500 cursor-pointer ${
                activeImage === index ? "flex-[3]" : "flex-[1]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-auto transition-transform duration-500 rounded-3xl ${
                  activeImage === index ? "scale-110" : "scale-100"
                }`}
              />
              {image.info && activeImage === index && (
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2">
                  <h2 className="text-lg font-bold">{image.info.title}</h2>
                  <p>{image.info.population}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
