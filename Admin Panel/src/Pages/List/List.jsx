import "./list.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DataTable from "../../Components/DataTable/DataTable";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable columns={columns} />
      </div>
    </div>
  );
};

export default List;
