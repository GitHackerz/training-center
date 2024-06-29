import "./style.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import ParcoursDatatable from "../../../components/datatable/parcours/ParcoursDatatable"
import {Toaster} from "react-hot-toast";

const ListParcours = () => {
  return (
    <div className="list">
        <Toaster/>
        <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ParcoursDatatable/>
      </div>
    </div>
  )
}

export default ListParcours