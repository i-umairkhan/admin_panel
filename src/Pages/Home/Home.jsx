import "./Home.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homecontainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
