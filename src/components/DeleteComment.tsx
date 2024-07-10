import React from 'react'
import { Button } from './ui/Button'

type Props = {
	id: number
	modal: boolean
	setModal: (value: boolean) => void
	handleDelete: (id: number, value: boolean) => void
}

export const DeleteComment: React.FC<Props> = ({ id, modal, setModal, handleDelete }) => {
	return (
		<div className="w-full h-full bg-blue-400/20 flex justify-center items-center absolute top-0 left-0 p-4">
			<div className="bg-white p-8 rounded-lg lg:w-[60%] sx:w-[100%]">
				<h3 className="text-3xl font-bold text-blue-400">Delete comment</h3>
				<p className="my-4 text-xl leading-normal">
					Are you sure you want to delete this comment? This will remove the comment and can't be undore
				</p>
				<div className="flex justify-between items-center">
					<Button onClick={() => setModal(!modal)} className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg">
						NO, CANCEL
					</Button>
					<Button
						onClick={() => handleDelete(id, modal)}
						className="bg-red-100 text-white px-8 py-4 rounded-lg text-lg"
					>
						YES, DELETE
					</Button>
				</div>
			</div>
		</div>
	)
}
