// types.ts
export interface User {
	image: {
		png: string
		webp: string
	}
	username: string
}

export interface Reply {
	id: number
	content: string
	createdAt: string
	score: number
	replyingTo: string
	user: User
	replies?: Reply[]
}

export interface Comment {
	id: number
	content: string
	createdAt: string
	score: number
	user: User
	replyingTo?: string
	replies?: Reply[]
}

export interface CurrentUser {
	image: {
		png: string
		webp: string
	}
	username: string
}

export interface Data {
	currentUser: CurrentUser
	comments: Comment[]
}
