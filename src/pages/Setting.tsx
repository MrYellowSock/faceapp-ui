import React, { useState } from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import BackButton from '../components/BackButton'
import MessageSetting from './MessageSetting'
import MoodSetting from './MoodSetting'
import MessageSearch from './MessageSearch'

export default function Setting() {
	const [activeTab, setActiveTab] = useState('MessageSetting')

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<Container>
			<Row>
				<Tabs id="setting" activeKey={activeTab} onSelect={(key)=>handleTabChange(key ?? "")}>
					<Tab eventKey="MessageSetting" title="Message Setting" className='p-2'>
						<MessageSetting></MessageSetting>
					</Tab>
					<Tab eventKey="MoodSetting" title="Mood Setting" className='p-2'>
						<MoodSetting></MoodSetting>
					</Tab>
					<Tab eventKey="MessageSearch" title="Message search" className='p-2'>
						<MessageSearch onEdit={() => {
							handleTabChange('MessageSetting')
						}}></MessageSearch>
					</Tab>
				</Tabs>
			</Row>
			<BackButton></BackButton>
		</Container>
	)
}
