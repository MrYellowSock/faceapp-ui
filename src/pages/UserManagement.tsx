import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import UserManagementAdd from './UserManagementAdd'
import UserManagementSearch from './UserManagementSearch'
import BackButton from '../components/BackButton'


export default function UserManagement() {
    return (
        <Container>
            <Row>
                <Tabs defaultActiveKey="addUser" id="uncontrolled-tab-example">
                    <Tab eventKey="addUser" title="Add User">
                        <UserManagementAdd></UserManagementAdd>
                    </Tab>
                    <Tab eventKey="searchUser" title="Search User">
                        <UserManagementSearch searchFunction={(name: string) => ({
                            avatarImage: "./images/smurf.jpg",
                            name: "Papa",
                            surname: "Smurf",
                            spawnAt: new Date()
                        })}></UserManagementSearch>
                    </Tab>
                    <Tab eventKey="editUser" title="Edit User">
                        <p>Something similar to user add</p>
                    </Tab>
                </Tabs>
            </Row>
            <BackButton></BackButton>
        </Container>
    )
}
