import React from 'react';
import roomIcon from "../../Images/roomIcon.png";

const ProductViewComponent = ({ data }) => {
    return (
        <div >
            <div className="col-3">
                <div className="allroom">
                    <div className="card">
                        <img src={data.room_img} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h6 className="card-text">
                                <span className="fs-6"><img src={roomIcon} /></span>
                                <span className="pl-3">Room: {data.room_no}</span>
                            </h6>
                            <ul className="list-unstyled d-flex justify-content-between mx-3" style={{ listStyleType: "circle" }}>
                                <li>{data.flat_no}</li>
                                <li>{data.flat_square}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductViewComponent;