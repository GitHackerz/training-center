import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {coursesColumns} from "../../../datatablesource";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {ServerUrl} from "../../../config/server";

const CoursesDatatable = ({parcourId}) => {
    const [data, setData] = useState([]);
    const [parcour, setParcour] = useState({})

    const getData = async () => {
        const res = await axios.get(`${ServerUrl}/parcours/${parcourId}`)
        const data = res.data.parcour.courses
        setParcour(res.data.parcour)
        data.map((item) => {
            item.id = item._id
            return item
        })
        setData(data)
    }

    const deleteData = async (id) => {
        await axios.delete(`${ServerUrl}/parcours/${parcourId}/courses/${id}`)
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
                    <Link to={`/parcours`} className="link-back">
                        <span> Go back</span>
                    </Link>
                    List of courses for {parcour.title}
                <Link to={`/parcours/${parcourId}/courses/new`} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={coursesColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default CoursesDatatable;
