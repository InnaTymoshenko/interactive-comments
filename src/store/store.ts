/* eslint-disable no-mixed-spaces-and-tabs */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Comment, Reply, Data } from '../types/type'
import { initialData } from '../data'

interface CommentState {
	data: Data
	addComment: (content: string) => void
	addReply: (commentId: number, content: string, replyingTo: string) => void
	deleteComment: (id: number, isComment: boolean) => void
	editComment: (id: number, content: string) => void
	changeScore: (id: number, change: number) => void
}

const useCommentStore = create<CommentState>()(
	devtools(
		persist(
			set => ({
				data: initialData,
				addComment: (content: string) =>
					set(state => {
						const newComment: Comment = {
							id: Date.now(),
							content,
							createdAt: new Date().toISOString(),
							score: 0,
							user: state.data.currentUser,
							replies: []
						}
						return { data: { ...state.data, comments: [...state.data.comments, newComment] } }
					}),
				addReply: (commentId: number, content: string, replyingTo: string) =>
					set(state => {
						const newReply: Reply = {
							id: Date.now(),
							content,
							createdAt: new Date().toISOString(),
							score: 0,
							replyingTo,
							user: state.data.currentUser,
							replies: []
						}

						const addReplyToComments = (comments: Comment[]): Comment[] => {
							return comments.map(comment => {
								if (comment.id === commentId) {
									return {
										...comment,
										replies: [...(comment.replies || []), newReply]
									}
								}
								return {
									...comment,
									replies: addReplyToReplies(comment.replies || [])
								}
							})
						}

						const addReplyToReplies = (replies: Reply[]): Reply[] => {
							return replies.map(reply => {
								if (reply.id === commentId) {
									return {
										...reply,
										replies: [...(reply.replies || []), newReply]
									}
								}
								return {
									...reply,
									replies: addReplyToReplies(reply.replies || [])
								}
							})
						}

						return { data: { ...state.data, comments: addReplyToComments(state.data.comments) } }
					}),
				deleteComment: (id: number, isComment: boolean) =>
					set(state => {
						const deleteFromComments = (comments: Comment[]): Comment[] => {
							return comments
								.filter(comment => comment.id !== id)
								.map(comment => ({
									...comment,
									replies: deleteFromReplies(comment.replies || [])
								}))
						}

						const deleteFromReplies = (replies: Reply[]): Reply[] => {
							return replies
								.filter(reply => reply.id !== id)
								.map(reply => ({
									...reply,
									replies: deleteFromReplies(reply.replies || [])
								}))
						}

						return {
							data: {
								...state.data,
								comments: isComment
									? deleteFromComments(state.data.comments)
									: state.data.comments.map(comment => ({
											...comment,
											replies: deleteFromReplies(comment.replies || [])
									  }))
							}
						}
					}),
				editComment: (id: number, content: string) =>
					set(state => {
						const editComments = (comments: Comment[]): Comment[] => {
							return comments.map(comment => {
								if (comment.id === id) {
									return {
										...comment,
										content
									}
								}
								return {
									...comment,
									replies: editReplies(comment.replies || [])
								}
							})
						}

						const editReplies = (replies: Reply[]): Reply[] => {
							return replies.map(reply => {
								if (reply.id === id) {
									return {
										...reply,
										content
									}
								}
								return {
									...reply,
									replies: editReplies(reply.replies || [])
								}
							})
						}

						return { data: { ...state.data, comments: editComments(state.data.comments) } }
					}),
				changeScore: (id: number, change: number) =>
					set(state => {
						const updateScoreInComments = (comments: Comment[]): Comment[] => {
							return comments.map(comment => {
								if (comment.id === id) {
									return { ...comment, score: comment.score + change }
								}
								return {
									...comment,
									replies: updateScoreInReplies(comment.replies || [])
								}
							})
						}

						const updateScoreInReplies = (replies: Reply[]): Reply[] => {
							return replies.map(reply => {
								if (reply.id === id) {
									return { ...reply, score: reply.score + change }
								}
								return {
									...reply,
									replies: updateScoreInReplies(reply.replies || [])
								}
							})
						}

						return { data: { ...state.data, comments: updateScoreInComments(state.data.comments) } }
					})
			}),
			{ name: 'comment-storage' }
		)
	)
)

export default useCommentStore
