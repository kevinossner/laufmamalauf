import { useState, useEffect } from "react"
import React from 'react'
import { Container, Card, Row } from 'react-bootstrap';  

function UsersListPage() {
    let [users, setUsers] = useState([])
    
    useEffect(() => {
        getUsers()
    }, [])
    
    let getUsers = async () => {
        let response = await fetch('/backend/users/')
        let data = await response.json()
        setUsers(data)
    }

	return (
		<div className="App">  
	   		<Container className='p-4'>  
				<Row>  	 
				{ Object.keys(users).map((key, idx) => (  
	  				<Card  
						bg={users[key]['status']==='1' ? 'danger' : 'success'}  
						text='white'  
						style={{width:"20%"}}  
						className="m-2"  
					>  
						<Card.Header>{users[key]['first_name']} {users[key]['last_name']}</Card.Header>  
						<Card.Body>  
						<Card.Text>  
							Status: {users[key]['status']==='1' ? 'nicht bezahlt' : 'bezahlt'} <br/>
							Erstellt: {users[key]['created']}  
						</Card.Text>  
						</Card.Body>  
					</Card>  
				))}  
				</Row>  
			</Container>  
		</div>  
	);  
}

export default UsersListPage
