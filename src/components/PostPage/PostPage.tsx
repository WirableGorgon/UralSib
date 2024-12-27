import { fetchComments, fetchPost } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { CommentList } from "../CommentList/CommentList";
import { useState } from "react";
import './PostPage.css'

export const PostPage = () => {
    const { id } = useParams();
    const postId: number = Number(id)
    
    const [postState, setPostState] = useState(false)

    const PostQuery = useQuery({
        queryFn: () => fetchPost(postId),
        queryKey: ['post']
    }, queryClient)

    const CommentsQuery = useQuery({
        queryFn: () => fetchComments(postId).then((res) => {
            setPostState(true);
            return (res)
        }),
        queryKey: ['comments']
    }, queryClient)

    if (PostQuery.isLoading || CommentsQuery.isLoading) {
        return (
            <p>Загрузка...</p>
        )
    }

    if (PostQuery.isError || CommentsQuery.isError) {
        return (
            <p>Ошибка загрузки :(</p>
        )
    }

    if (PostQuery.data && CommentsQuery.data && postState) {
        return (
            <div>
                <Link to={'/'} className="back-but" onClick={() => {
                    setPostState(false)
                }}>Назад</Link>
                <div className="post-inf">
                    <h2>{PostQuery.data.title}</h2>
                    <p>{PostQuery.data.body}</p>
                    <p className="post-user">User: {PostQuery.data.userId}</p>
                </div>
                <h2>Комментарии:</h2>
                <CommentList comments={CommentsQuery.data} />
            </div>
        )
    }
}