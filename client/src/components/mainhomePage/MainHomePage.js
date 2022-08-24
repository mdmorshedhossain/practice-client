import React, { useState } from 'react';
// import room104 from '../Images/room104.jpg';
import ProductViewComponent from './ProductViewComponent ';
import room104 from "../../Images/room104.jpg";


const MainHomePage = () => {
    const allRoom = [
        { id: 1, room_img: room104, room_no: "103", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 2, room_img: room104, room_no: "104", flat_no: "2nd floor", flat_square: "220 SqFt" },
        { id: 3, room_img: room104, room_no: "105", flat_no: "3rd floor", flat_square: "220 SqFt" },
        { id: 4, room_img: room104, room_no: "106", flat_no: "4th floor", flat_square: "220 SqFt" },
        { id: 5, room_img: room104, room_no: "107", flat_no: "5th floor", flat_square: "220 SqFt" },
        { id: 6, room_img: room104, room_no: "108", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 7, room_img: room104, room_no: "109", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 8, room_img: room104, room_no: "100", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 9, room_img: room104, room_no: "111", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 10, room_img: room104, room_no: "112", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 11, room_img: room104, room_no: "112", flat_no: "1st floor", flat_square: "220 SqFt" },
        { id: 12, room_img: room104, room_no: "112", flat_no: "1st floor", flat_square: "220 SqFt" },
    ]
    console.log("allRoom", allRoom);

    return (
        <div className="container">
            <div className="row g-3">
                {allRoom.map((data) => <ProductViewComponent data={data} />)}
            </div>
        </div>
    );
};

export default MainHomePage;