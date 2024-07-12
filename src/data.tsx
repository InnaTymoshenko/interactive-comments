import juliusomo from './assets/image-juliusomo.png'
import amyrobson from './assets/image-amyrobson.png'
import maxblagun from './assets/image-maxblagun.png'
import ramsesmiron from './assets/image-ramsesmiron.png'

export const initialData = {
	currentUser: {
		image: {
			png: juliusomo,
			webp: './assets/image-juliusomo.webp'
		},
		username: 'juliusomo'
	},
	comments: [
		{
			id: 1,
			content:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			createdAt: '2 week ago',
			score: 12,
			user: {
				image: {
					png: amyrobson,
					webp: './assets/image-amyrobson.webp'
				},
				username: 'amyrobson'
			},
			replies: []
		},
		{
			id: 2,
			content:
				"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
			createdAt: '1 week ago',
			score: 5,
			user: {
				image: {
					png: maxblagun,
					webp: './assets/image-maxblagun.webp'
				},
				username: 'maxblagun'
			},
			replies: [
				{
					id: 3,
					content:
						"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
					createdAt: '2024-07-03T00:00:00',
					score: 4,
					replyingTo: 'maxblagun',
					user: {
						image: {
							png: ramsesmiron,
							webp: './assets/image-ramsesmiron.webp'
						},
						username: 'ramsesmiron'
					}
				},
				{
					id: 4,
					content:
						"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
					createdAt: '2 days ago',
					score: 2,
					replyingTo: 'maxblagun',
					user: {
						image: {
							png: juliusomo,
							webp: './assets/image-juliusomo.webp'
						},
						username: 'juliusomo'
					}
				}
			]
		}
	]
}
