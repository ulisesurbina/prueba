import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import UserDetails from "./UserDetails";
import "../App.css"

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get("https://reqres.in/api/users")
            .then((res) => setUsers(res.data.data))
            .catch((error) => console.log(error));
    }, []);

    const selectUser = (user) => {
        setUserSelected(user);
    };

    const buttonFunction = (user) => {
        handleShow();
        selectUser(user);
    };

    const updateUser = (userUpdate) => {
        const index = users.findIndex((user) => user.id === userUpdate.id);
        users[index] = userUpdate;
        setUsers([...users]);
    };

    return (
        <div>
            <section>
                <h2>Users List</h2>
                <div>
                    {users.map((user) => (
                        <section key={user.id} className="UsersCards">
                            <h3><strong> {user.first_name} {user.last_name}</strong></h3>
                            <p>{user.email}</p>
                            <img src={user.avatar} alt={user.first_name} />
                            <section>
                                <Button
                                    variant="dark"
                                    onClick={() => buttonFunction(user)}>
                                    <i className="fa-solid"></i> User Details{" "}
                                </Button>
                            </section>

                            <Offcanvas
                                show={show}
                                onHide={handleClose}
                                scroll={true}
                                placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Details</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <UserDetails
                                        user={user}
                                        userSelected={userSelected}
                                        updateUser={updateUser}
                                        handleClose={handleClose}
                                        selectUser={selectUser}
                                    />
                                </Offcanvas.Body>
                            </Offcanvas>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UserList;
