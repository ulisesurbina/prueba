import React, { useEffect, useState } from "react";
import PostUsers from "./PostUsers";
import AlbumUsers from "./AlbumUsers";


const UsersDetails = ({
    handleClose,
    updateUser,
    selectUser,
    userSelected,
}) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirst_name(userSelected?.first_name);
            setLast_name(userSelected?.last_name);
            setEmail(userSelected?.email);
            setAvatar(userSelected?.avatar);
        }
    }, [userSelected]);

    const submit = (e) => {
        e.preventDefault();
        const userUpdate = {
            first_name,
            last_name,
            email,
            avatar,
        };
        userUpdate.id = userSelected?.id;
        updateUser(userUpdate);
    };

    const closeButton = () => {
        handleClose();
        selectUser(userSelected);
    };

    return (
        <div className="DetailsUsers">
            <form onSubmit={submit} className="FormUser">
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        onChange={(e) => setFirst_name(e.target.value)}
                        value={first_name}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        onChange={(e) => setLast_name(e.target.value)}
                        value={last_name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email / Password</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Url Image</label>
                    <input
                        type="text"
                        id="avatar"
                        onChange={(e) => setAvatar(e.target.value)}
                        value={avatar}
                    />
                </div>
                <button onClick={() => closeButton()}> Edit </button>
            </form>
            <section className="PostUser">
                <h3>Posts of User</h3>
                <PostUsers id={userSelected?.id} />
            </section>
            <section className="AlbumUser">
                <h3>Albums of User</h3>
                <AlbumUsers id={userSelected?.id} />
            </section>
        </div>
    );
};

export default UsersDetails;
