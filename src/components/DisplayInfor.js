import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const showHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => showHideListUser()}>
                    {isShowHideListUser === true
                        ? "Hide List user"
                        : "Show List User"}
                </span>
            </div>
            {isShowHideListUser && (
                <>
                    {listUser.map((user, index) => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 18 ? "green" : "red"}
                            >
                                <div>My Name {user.name}</div>
                                <div>My age {user.age}</div>
                                <hr></hr>
                                <div>
                                    <button
                                        onClick={() =>
                                            props.handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default DisplayInfor;
