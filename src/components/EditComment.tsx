import React from 'react'
import { Button } from './ui/Button'

type EditProps = {
	editedContent: string
	setEditedContent: (value: string) => void
	saveEdit: () => void
}

export const EditComment: React.FC<EditProps> = ({ editedContent, setEditedContent, saveEdit }) => {
	return (
		<div className="w-[100%] h-full flex flex-col justify-between items-end gap-4">
			<textarea
				value={editedContent}
				onChange={e => setEditedContent(e.target.value)}
				className="border border-gray-200 w-full min-h-[100%] p-2 overflow-hidden text-lg rounded-lg outline-1 outline-blue-200"
			/>
			<Button onClick={saveEdit} className="bg-blue-300 text-white py-[.75rem] px-8 rounded-lg font-bold">
				UPDATE
			</Button>
		</div>
	)
}
