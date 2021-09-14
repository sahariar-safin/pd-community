import React from 'react'
import '../../style/MemberList.css';
import MemberProfile from './Modal/MemberProfile';

function MembersList() {
    return (
        <div className="memberListWrapper">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Member Photo</th>
                        <th scope="col">Member Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <img
                                className="memberPhoto"
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="" />
                        </td>
                        <td>Shafin</td>
                        <td>Platinum</td>
                        <td>
                            <div type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fas fa-eye"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <MemberProfile />
        </div>
    )
}

export default MembersList
