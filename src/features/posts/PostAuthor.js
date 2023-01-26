import { useSelector } from "react-redux";
import { selectAlUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAlUsers)

    const author = users.find(user => user.id === userId)
    return (
        <span>by {author ? author.name : 'Unknown author'}</span>
    )
}

export default PostAuthor