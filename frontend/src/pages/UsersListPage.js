import { useState, useEffect } from "react"
import React from 'react'
import Table from 'react-bootstrap/Table';



const UsersListPage = () => {

    let [users, setUsers] = useState([])
    
    useEffect(() => {
        getUsers()
    }, [])
    
    let getUsers = async () => {
        let response = await fetch('/backend/users/')
        let data = await response.json()
        setUsers(data)
    }

    console.log(users)
	const DisplayData=users.map(
		(info)=>{
			return(
				<tr>
					<td>{info.last_name}</td>
					<td>{info.first_name}</td>
				</tr>
			)
		}
	)
	return(
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
					<th>Nachname</th>
					<th>Vorname</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
            </Table>
			
		</div>
	)
}


export default UsersListPage;