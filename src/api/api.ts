const API_URL = 'https://jsonplaceholder.typicode.com'

export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number
}

export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface CommentListProps {
    comments: Comment[]
}

export const fetchPosts = (): Promise<Post[]> => 
    fetch(`${API_URL}/posts`)
    .then((res) => res.json())
    .then((res) => {
        return(res)
    })

export const fetchPost = (id: number): Promise<Post> =>
    fetch(`${API_URL}/posts/${id}`)
    .then((res) => res.json())
    .then((res) => {
        return(res)
    })

export const fetchComments = (id: number): Promise<Comment[]> =>
    fetch(`${API_URL}/posts/${id}/comments`)
    .then((res) => res.json())
    .then((res) => {
        return(res)
    })