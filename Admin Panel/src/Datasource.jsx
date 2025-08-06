import '../src/Components/DataTable/datatable.scss';

export const userColumns = [
  { field: "id",
    headerName: "ID",
    width: 70
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
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
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

// temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Haris",
//     img: "https://media.istockphoto.com/id/2192039249/photo/london-view-at-night-of-the-shard.jpg?s=612x612&w=0&k=20&c=Wwa7jfPev2gzUDLA-w15aF6RTqJTLcVctw34ov2DoAg=",
//     status: "active",
//     email: "1haris@gmail.com",
//     age: 35,
//   },
//   {
//     id: 2,
//     username: "Sara",
//     img: "https://media.istockphoto.com/id/2192039249/photo/london-view-at-night-of-the-shard.jpg?s=612x612&w=0&k=20&c=Wwa7jfPev2gzUDLA-w15aF6RTqJTLcVctw34ov2DoAg=",
//     status: "passive",
//     email: "2sara@gmail.com",
//     age: 35,
//   },
//   {
//     id: 3,
//     username: "Zubair",
//     img: "https://media.istockphoto.com/id/2192039249/photo/london-view-at-night-of-the-shard.jpg?s=612x612&w=0&k=20&c=Wwa7jfPev2gzUDLA-w15aF6RTqJTLcVctw34ov2DoAg=",
//     status: "pending",
//     email: "3zubair@gmail.com",
//     age: 22,
//   },
//   {
//     id: 4,
//     username: "Akram",
//     img: "https://media.istockphoto.com/id/2192039249/photo/london-view-at-night-of-the-shard.jpg?s=612x612&w=0&k=20&c=Wwa7jfPev2gzUDLA-w15aF6RTqJTLcVctw34ov2DoAg=",
//     status: "active",
//     email: "4akram@gmail.com",
//     age: 27,
//   },
//   {
//     id: 5,
//     username: "Ijaz",
//     img: "https://media.istockphoto.com/id/2192039249/photo/london-view-at-night-of-the-shard.jpg?s=612x612&w=0&k=20&c=Wwa7jfPev2gzUDLA-w15aF6RTqJTLcVctw34ov2DoAg=",
//     status: "pending",
//     email: "5ijaz@gmail.com",
//     age: 41,
//   },
// ]