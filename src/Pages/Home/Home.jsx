import "./Home.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homecontainer">
        <NavBar />
        Homeconatiner
      </div>
    </div>
  );
};

export default Home;
