import React from 'react'
import { Button } from './ui/Button'
import { User } from '../types/type'

interface UserReply {
	user: User
	newComment: string
	setNewComment: (value: string) => void
	addComment: () => void
}

export const UserReply: React.FC<UserReply> = ({ user, newComment, setNewComment, addComment }) => {
	return (
		<React.Fragment>
			<div className="sx:comment lg:grid-rows-2">
				<img
					src={`${user.image.png}`}
					alt={user.username}
					className="col-start-1 sx:row-start-3 lg:row-start-1 lg:col-span-1 sx:col-span-2 sx:row-span-2"
				/>
				<textarea
					value={newComment}
					onChange={e => setNewComment(e.target.value)}
					placeholder="Add a comment..."
					className="border border-gray-200 w-[100%] min-h-[100%] p-2 overflow-hidden text-lg rounded-lg outline-1 outline-blue-200 sx:col-start-1 lg:col-start-2 sx:col-span-11 lg:col-span-8 row-start-1 sx:row-span-2 lg:row-span-2"
				/>
				<Button
					onClick={addComment}
					className="bg-blue-300 text-white py-[.75rem] px-8 rounded-lg font-bold sx:row-start-3 lg:row-start-1 col-start-10 col-span-2 sx:row-span-2"
				>
					SEND
				</Button>
			</div>
		</React.Fragment>
	)
}
