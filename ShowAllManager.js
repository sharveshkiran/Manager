import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ShowAllManager extends Component {
    constructor(){
        super();
        this.state={manager:null}
    }
    Showall()
    {
        
        fetch('http://localhost:50734/api/ManagerDetails/Allmanager').then(res=>res.json())
        .then(result=>{
            this.setState({manager:result})
        })
    }
    componentDidMount()
    {
        this.Showall();
    }
    render() {
        return (
            <>
            <Table striped bordered hover>
                <thead>
                
            <tr>
            <th>Manager Id</th>
            <th>full name</th>
            {/* <th>First Name</th>
            <th>Last Name</th> */}
            <th>E_Mail</th>
            <th>Phone number</th>
            <th>Department</th>
            <th>Manager Name</th>
            <th>Date Joined</th>
            <th>Leave Balance</th>
            <th>Password</th>
            </tr>
           </thead>

            {
            this.state.manager?this.state.manager.map(x=>
                <tbody>
                <tr>
                    
                <td> {x.managerId} </td>
                <td>{x.firstName+"  "+x.lastName}</td>
                
                <td> {x.e_Mail} </td>
                <td> {x.contactNumber} </td>
                <td> {x.department} </td>
                <td> {x.manager} </td>
                <td> {x.dateJoined} </td>
                <td> {x.leaveBalance} </td>
                <td> {x.password} </td>
                </tr>
                </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}