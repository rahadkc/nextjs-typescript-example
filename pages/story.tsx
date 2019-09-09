import React from 'react'
import { NextPageContext } from 'next'
import StoryList from '../Components/StoryList'

interface Props {
	userAgent: String
}

export class Story extends React.Component<Props> {
	static async getInitialProps({ req }: NextPageContext) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		return { userAgent }
	}
	render() {
		const { userAgent } = this.props
		const author = { id: 1, name: 'Haiko' }

		return (
			<div>
				From story user agent: {userAgent} <StoryList author={author} />
			</div>
		)
	}
}

export default Story
