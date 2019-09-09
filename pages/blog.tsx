import React from 'react'
import { NextPage } from 'next'
import Layout from '../Components/Layout'
import List from '../Components/List'

interface Props {
	userAgent?: String
}

const Blog: NextPage<Props> = ({ userAgent }) => {
	const data = { name: 'Hello list' }
	return (
		<Layout title='Blog page'>
			Your user agent: {userAgent}
			<List data={data} />
		</Layout>
	)
}

Blog.getInitialProps = async ({ req }) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
	return { userAgent }
}

export default Blog
