import react, { useEffect, useState } from "react";
import axios from "axios";

const FecthData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios
                .get("https://lfapi.html5.run/products")
                .then(res => {
                    const listData = res.data;
                    const list = listData[0];
                    setUsers({ list });
                })
                .catch((err) => {
                    console.log("Err: ", err);
                });
        };
        getData();
    }, []);
    console.log(users);
    return (
        <>
            {/* {users} */}
        </>
    )
}
export default FecthData;