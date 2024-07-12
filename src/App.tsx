import React from 'react'
import CommentList from './components/CommentList'
import { Shell } from './components/ui/Shell'
import { useDeleteModal, useCommentStore } from './store/store'
import { DeleteComment } from './components/DeleteComment'

const App: React.FC = () => {
	const { modal, setModal, id } = useDeleteModal()
	const { deleteComment } = useCommentStore()

	const handledeleteComment = () => {
		deleteComment(id, true)
		setModal(id)
	}

	return (
		<div className="w-full min-h-screen relative">
			{modal && <DeleteComment id={0} setModal={setModal} handleDelete={handledeleteComment} />}

			<Shell className="container w-screen max-w-[800px] my-16 ">
				<CommentList />
			</Shell>
		</div>
	)
}

export default App
