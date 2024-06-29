import "./style.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatable from "../../../components/datatable/user/Datatable"
import {Toaster} from "react-hot-toast";

const ListUsers = () => {
  return (
    <div className="list">
        <Toaster/>
        <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default ListUsers