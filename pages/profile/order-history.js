import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Shared/Header/Header';
import auth from '../../firebase.init';
import Loading from '../../components/Shared/Loading/Loading';

const orderHistory = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [userSocial, loading2, error2] = useAuthState(auth);

    if(loading2){
        return <Loading></Loading>
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                                
                                <img src={user?.photoURL || userSocial?.photoURL} alt="" />
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {user?.fullName}
                                    {userSocial?.displayName}
                                </div>
                                <div className="profile-usertitle-job">
                                    Customer
                                </div>
                            </div>
                            <div className="profile-usermenu">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Account Information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Order History</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Settings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">
                            <div className="tab-pane fade" id="order-history">
                                <h2>Order History</h2>
                                <hr/>

                                <p>Your order history is empty.</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default orderHistory;