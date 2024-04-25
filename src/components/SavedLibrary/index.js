import "./index.css";
import { GoNote } from "react-icons/go";
const SavedLibrary = (props) => {
  const { title, date } = props;
  return (
    <li className="library-container">
      <GoNote className="note-icon" />
      <h1 className="title-heading">{title}</h1>
      <p className="date-content">{date}</p>
    </li>
  );
};

export default SavedLibrary;
