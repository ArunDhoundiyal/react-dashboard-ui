import React from "react";
import SavedLibrary from "../SavedLibrary";
import SliderCards from "../SliderCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar from "../SideBar";
import "./index.css";

class Home extends React.Component {
  state = { condition: false };

  onClickArrow = () => {
    this.setState({ condition: true });
  };
  render() {
    const { dashboard_data } = this.props;
    const { condition } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
      <div className="bg-container">
        <SideBar condition={condition} />
        <div className="home-bg-container">
          <div className="Header">
            <div className="icon-container">
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                onClick={this.onClickArrow}
              />
            </div>

            <ul className="library-bg-container">
              {dashboard_data.library_data.map((eachItem) => (
                <SavedLibrary
                  key={eachItem.id}
                  title={eachItem.title}
                  date={eachItem.date}
                />
              ))}
            </ul>
          </div>
          <div className="slider-container">
            <div className="slider-container-direction">
              <Slider {...settings}>
                {dashboard_data.banking_data.map((eachData) => (
                  <SliderCards
                    key={eachData.id}
                    heading={eachData.heading}
                    image={eachData.image}
                    description={eachData.description}
                  />
                ))}
              </Slider>
              <div className="button-container">
                <button className="slider-button">View More</button>
              </div>
            </div>
            <div className="recentRelease-container">
              <div className="top-recent-release-container">
                <h1 className="heading-recent-release">Recent Releases</h1>
                <select className="select-country">
                  <option className="country-style">India</option>
                  <option className="country-style">Japan</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
