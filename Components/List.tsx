import { Component } from 'react'

type Props = {
	data: {
		name: string
	}
}

const List: React.FunctionComponent<Props> = ({ data }) => (
	<div>List component {data.name}</div>
)

export default List
