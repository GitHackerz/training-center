import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {parcoursColumns} from "../../../datatablesource";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {ServerUrl} from "../../../config/server";

const ParcoursDatatable = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(`${ServerUrl}/parcours`)
        const data = res.data.parcours
        data.map((item) => {
            item.id = item._id
            item.name = item.firstName + " " + item.lastName
            return item
        })
        setData(data)
    }

    const deleteData = async (id) => {
        await axios.delete(`${ServerUrl}/parcours/${id}`)
        getData()
    }

    useState(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        deleteData(id)
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/parcours/${params.row.id}/courses`} style={{textDecoration: "none"}}>
                            <div className="courseButton">Courses</div>
                        </Link>
                        <Link to={`/parcours/update/${params.row.id}`} style={{textDecoration: "none"}}>
                            <div className="viewButton">Update</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                List of Parcours
                <Link to="/parcours/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={parcoursColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default ParcoursDatatable;
