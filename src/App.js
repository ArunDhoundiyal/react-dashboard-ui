import Home from "./components/Home";
import "./App.css";

const dashboard_data = {
  library_data: [
    {
      id: 1,
      title: "My Saved Library 1",
      date: "dd-mm-yyyy",
    },
    {
      id: 2,
      title: "My Saved Library 2",
      date: "dd-mm-yyyy",
    },
    {
      id: 3,
      title: "My Saved Library 3",
      date: "dd-mm-yyyy",
    },
    {
      id: 4,
      title: "My Saved Library 4",
      date: "dd-mm-yyyy",
    },
    {
      id: 5,
      title: "My Saved Library 5",
      date: "dd-mm-yyyy",
    },
  ],
  banking_data: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/da52fiag8/image/upload/v1713958393/Pngtree_business_people_have_board_meetings_7516388_qzjxhm.png",
      heading: "State of Markets",
      description:
        "The markets capitalization of India stocks crossed USS4.5 trillion in january.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/da52fiag8/image/upload/v1713961864/business-concept-with-graphic-holography_ylxrt1.jpg",
      heading: "The Central Capex Surge",
      description:
        "The last few years have seen a very substantial step up in capital.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/da52fiag8/image/upload/v1713962106/4028644_2_ycvlib.jpg",
      heading: "Direct Taxes and Business Cycle",
      description:
        "The share of direct taxes in total tax collection of the Central government.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/da52fiag8/image/upload/v1713962199/6204063_gzyjju.jpg",
      heading: "Banking Monitor",
      description:
        "Credit growth has remained broadly stable in recent weeks at just.",
    },
  ],
};

const App = () => <Home dashboard_data={dashboard_data} />;

export default App;
