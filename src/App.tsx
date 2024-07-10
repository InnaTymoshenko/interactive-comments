import React from 'react'
import CommentList from './components/CommentList'
import { Shell } from './components/ui/Shell'

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Shell className="container w-screen max-w-[800px] my-16 ">
				<CommentList />
			</Shell>
		</React.Fragment>
	)
}

export default App
