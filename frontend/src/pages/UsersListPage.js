import { useState, useEffect } from "react"
import React from 'react'

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

    return (
        <div>
            <h2>Users</h2>
        </div>
    )
}

export default UsersListPage
