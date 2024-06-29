import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {userColumns} from "../../../datatablesource";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {ServerUrl} from "../../../config/server";

const Datatable = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(`${ServerUrl}/users`)
        const data = res.data.users
        data.map((item) => {
            item.id = item._id
            item.name = item.firstName + " " + item.lastName
            return item
        })
        setData(data)
    }

    const deleteData = async (id) => {
        await axios.delete(`${ServerUrl}/users/${id}`)
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
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/users/update/${params.row.id}`} style={{textDecoration: "none"}}>
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
                List of Users
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
