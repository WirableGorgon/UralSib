import { FC } from "react";
import { Comment, CommentListProps } from "../../api/api";
import './CommentList.css'

export const CommentList: FC<CommentListProps> = ({ comments }) => {
    return (
        <div>
            <ul>
                {comments.map((res) => (
                    <li className="com" key={res.id}>
                        <p className="name">{res.name}</p>
                        <p className="email">{res.email}</p>
                        <p>{res.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}