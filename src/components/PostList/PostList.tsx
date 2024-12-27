import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../../api/api"
import { queryClient } from "../../api/queryClient"
import { Link } from "react-router-dom"
import './PostList.css'

export const PostList = () => {
    const PostListQuery = useQuery({
        queryFn: () => fetchPosts(),
        queryKey: ['posts'],
    }, queryClient)

    if (PostListQuery.isLoading) {
        return (
            <p>Загрузка постов</p>
        )
    }

    if (PostListQuery.isError) {
        return (
            <p>Ошибка загрузки постов</p>
        )
    }

    if (PostListQuery.data) {
        return (
            <div>
                <h1>Список постов</h1>
                <ul>
                    {PostListQuery.data.map((res) => {
                        return (
                            <li className="post" key={res.id}>
                                <Link to={`/post/${res.id}`}>
                                    {res.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}