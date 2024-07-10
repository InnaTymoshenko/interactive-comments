import React, { useState } from 'react'
import { Comment as CommentType, CurrentUser } from '../types/type'
import { Button } from './ui/Button'
import { Plus } from './icons/Plus'
import { Minus } from './icons/Minus'
import { Delete } from './icons/Delete'
import { Edit } from './icons/Edit'
import { IReply } from './icons/IReply'
import { UserReply } from './UserReply'
import { DeleteComment } from './DeleteComment'
import { EditComment } from './EditComment'
import { timeAgo } from '../utils/method'

interface Props {
	comment: CommentType
	currentUser: CurrentUser
	handleReply: (commentId: number, content: string, replyingTo: string) => void
	handleDelete: (id: number, isComment: boolean) => void
	handleEdit: (id: number, content: string) => void
	handleScoreChange: (id: number, change: number) => void
}

const Comment: React.FC<Props> = ({
	comment,
	currentUser,
	handleReply,
	handleDelete,
	handleEdit,
	handleScoreChange
}) => {
	const [replyContent, setReplyContent] = useState('')
	const [modal, setModal] = useState(false)
	const [showReply, setShowReply] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [editedContent, setEditedContent] = useState(comment.content)

	const addReply = () => {
		if (replyContent.trim()) {
			handleReply(comment.id, replyContent, comment.user.username)
			setReplyContent('')
			setShowReply(false)
		}
	}

	const saveEdit = () => {
		handleEdit(comment.id, editedContent)
		setIsEditing(false)
	}

	return (
		<>
			<div className="comment">
				<img
					src={comment.user.image.png}
					alt={comment.user.username}
					className="col-span-1 sx:col-start-1 lg:col-start-2 lg:w-[80%]"
				/>
				<span className="text-xl text-blue-400 font-bold col-span-2 sx:col-start-2 lg:col-start-3  ">
					{comment.user.username}
				</span>
				{comment.user.username === currentUser.username && (
					<span className="font-bold text-white px-2 py-1 bg-blue-300 text-center rounded-sm col-span-1 sx:col-start-4 lg:col-start-5">
						you
					</span>
				)}
				<span
					className={`text-lg sx:col-span-3  ${
						comment.user.username === currentUser.username ? 'col-start-6' : 'col-start-5'
					}`}
				>
					{timeAgo(comment.createdAt)}
				</span>
				<div
					className={`w-[100%] sx:col-start-1 lg:col-start-2 sx:col-span-7 lg:col-span-10 row-start-2 ${
						isEditing ? 'row-span-4' : 'row-span-2'
					} `}
				>
					{isEditing ? (
						<EditComment editedContent={editedContent} setEditedContent={setEditedContent} saveEdit={saveEdit} />
					) : (
						<p className="text-lg">
							<span className="text-blue-300 font-bold">{comment.replyingTo && `@${comment.replyingTo}`}</span>{' '}
							{comment.content}
						</p>
					)}
				</div>
				{!isEditing && (
					<div className="w-[100%] h-full flex sx:flex-row lg:flex-col  bg-gray-200 justify-between items-center p-2 rounded-lg sx:row-start-4 lg:row-start-1 lg:row-span-2 col-start-1 lg:col-span-1 sx:col-span-2">
						<Button onClick={() => handleScoreChange(comment.id, 1)} className="p-2">
							<Plus />
						</Button>
						<span className="text-blue-300 text-lg font-bold">{comment.score}</span>
						<Button onClick={() => handleScoreChange(comment.id, -1)} className="p-2">
							<Minus />
						</Button>
					</div>
				)}

				{!isEditing && comment.user.username === currentUser.username && (
					<>
						<Button
							onClick={() => setModal(!modal)}
							className="button text-red-100  text-lg font-bold sx:col-start-4 lg:col-start-9 sx:col-span-2 sx:row-start-4 lg:row-start-1"
						>
							<Delete /> Delete
						</Button>
						<Button
							onClick={() => setIsEditing(!isEditing)}
							className="button text-blue-300 text-lg font-bold sx:col-start-6 lg:col-start-11 sx:col-span-2 sx:row-start-4 lg:row-start-1"
						>
							<Edit /> Edit
						</Button>
					</>
				)}
				{comment.user.username !== currentUser.username && (
					<Button
						onClick={() => setShowReply(!showReply)}
						className="button text-blue-300 text-lg font-bold sx:col-start-6 lg:col-start-11 col-span-2 sx:row-start-4 lg:row-start-1"
					>
						<IReply />
						Reply
					</Button>
				)}
			</div>
			{showReply && (
				<UserReply user={currentUser} newComment={replyContent} setNewComment={setReplyContent} addComment={addReply} />
			)}
			{modal ? (
				<DeleteComment
					id={comment.id}
					modal={modal}
					setModal={setModal}
					handleDelete={() => handleDelete(comment.id, true)}
				/>
			) : null}
			{comment.replies?.length ? (
				<div
					className={`w-full flex flex-col  lg:ml-10 lg:pl-10 sx:pl-4 border-l-4 border-l-gray-200 gap-8  ${
						comment?.replies?.length ? 'my-8' : 'my-4'
					} `}
				>
					{comment.replies.map(reply => (
						<Comment
							key={reply.id}
							comment={reply as CommentType}
							currentUser={currentUser}
							handleReply={handleReply}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							handleScoreChange={handleScoreChange}
						/>
					))}
				</div>
			) : null}
		</>
	)
}

export default Comment
