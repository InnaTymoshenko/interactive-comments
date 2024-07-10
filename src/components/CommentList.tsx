import React, { useState } from 'react'
import Comment from './Comment'
import { UserReply } from './UserReply'
import useCommentStore from '../store/store'

const CommentList: React.FC = () => {
	const { data, addComment, addReply, deleteComment, editComment, changeScore } = useCommentStore()
	const [newComment, setNewComment] = useState('')

	const handleAddComment = () => {
		if (newComment.trim()) {
			addComment(newComment)
			setNewComment('')
		}
	}

	return (
		<div className="w-full flex flex-col gap-4 relative">
			{data.comments.map(comment => (
				<Comment
					key={comment.id}
					comment={comment}
					currentUser={data.currentUser}
					handleReply={addReply}
					handleDelete={deleteComment}
					handleEdit={editComment}
					handleScoreChange={changeScore}
				/>
			))}
			<UserReply
				addComment={handleAddComment}
				user={data.currentUser}
				newComment={newComment}
				setNewComment={setNewComment}
			/>
		</div>
	)
}

export default CommentList
