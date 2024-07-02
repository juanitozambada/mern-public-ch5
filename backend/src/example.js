import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Mongoose!',
  author: 'Juanito Zambada',
  contents: 'This post is stored in a MongoDB database unsing Mongoose.',
  tags: ['mongoose', 'mongodb'],
})

await post.save()

const crreatedPost = await post.save()

await Post.findByIdAndUpdate(crreatedPost._id, {
  $set: { title: 'Hello again, Mongoose!!!!!!' },
})

const posts = await Post.find()
console.log(posts)
