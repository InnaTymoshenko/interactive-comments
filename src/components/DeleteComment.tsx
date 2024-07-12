import React from 'react'
import { Button } from './ui/Button'

type Props = {
	id: number

	setModal: (id: number) => void
	handleDelete: () => void
}

export const DeleteComment: React.FC<Props> = ({ id, setModal, handleDelete }) => {
	return (
		<div className="w-full  bg-blue-400/90 flex justify-center items-center absolute z-10 top-0 bottom-0 left-0 p-4">
			<div className="bg-white p-8 rounded-lg xl:w-[40%] 2xl:w-[30%] lg:w-[50%] md:w-[60%] sx:w-[90%]">
				<h3 className="lg:text-3xl sx:text-xl font-bold text-blue-400">Delete comment</h3>
				<p className="my-4 lg:text-xl sx:text-md leading-normal">
					Are you sure you want to delete this comment? This will remove the comment and can't be undore
				</p>
				<div className="flex justify-between items-center gap-2">
					<Button
						onClick={() => setModal(id)}
						className="bg-blue-400 text-white md2:px-8 sx:px-4 sx:py-2 md2:py-4 rounded-lg md2:text-lg sx:text-sm"
					>
						NO, CANCEL
					</Button>
					<Button
						onClick={() => handleDelete()}
						className="bg-red-100 text-white md2:px-8 sx:px-4 sx:py-2 md2:py-4 rounded-lg md2:text-lg sx:text-sm"
					>
						YES, DELETE
					</Button>
				</div>
			</div>
		</div>
	)
}
