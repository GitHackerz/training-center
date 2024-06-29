const tempImage = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

export const userColumns = [
    {
        field: "name",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={tempImage} alt="avatar"/>
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "role",
        headerName: "Role",
        width: 200,
    },
];

export const parcoursColumns = [
    {
        field: "title",
        headerName: "Parcours",
        width: 230,
    },
    {
        field: "description",
        headerName: "Description",
        width: 230,
    },
    {
        field: "duration",
        headerName: "Duration",
        width: 200,
    },
    {
        field: "price",
        headerName: "Price",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellPrice">
                    {params.row.price} $
                </div>
            );
        },
    },
];

export const coursesColumns = [
    {
        field: "title",
        headerName: "Course",
        width: 230,
    },
    {
        field: "file",
        headerName: "File",
        width: 230,
    },
];