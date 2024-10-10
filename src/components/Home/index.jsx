import Fackts from "./Fackts";
import FormList from "./FormList";
import Hero from "./Hero";
import Info from "./Info";
// import Locations from "./Locations";
import Reservation from "./Reservation";
import Tickets from "./Tickets";
import Travels from "./Travels";

const Home = () => {
  return (
    <>
      <Hero />
      <Travels />
      <Tickets />
      <Fackts />
      {/* <Locations /> */}
      <Reservation />
      <Info />
      <FormList />
    </>
  );
};

export default Home;
