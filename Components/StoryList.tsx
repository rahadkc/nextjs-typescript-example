import { Author } from '../interfaces'

interface Props {
	author: Author
}
const StoryList: React.FunctionComponent<Props> = ({ author }) => (
	<div>
		Author Id: {author.id} <br /> Author Name:{author.name}
	</div>
)

export default StoryList
