import { AiOutlineLike } from "react-icons/ai";


import { useUser } from "../../../hooks/useUser";
import { TPost } from "../../../@types/request";
import { UserAvatar } from "../../../components/UserAvatar";
import { useGlobalContext } from "../../../providers/GlobalProvider/useGlobalContext";


import { SPost, SPostTag, SPostTags, SPostReact  } from "./Post.styled";

interface PostProps {
    post: TPost;
}

export function Post ({ post }: PostProps) {
  const {user} = useUser({ userId: post.userId })
  const { comments }= useGlobalContext()

  console.log(comments[0].postId)

  return (
    <SPost>
        <h4>{post.title}</h4>
        <hr />
        <p>{post.body}</p>
        <SPostTags>
        {post.tags?.map((tag) => {
            return <SPostTag  key={tag}>{tag}</SPostTag>
        })}
        </SPostTags>
        <SPostReact>
           <AiOutlineLike/>
          <p> {post.reactions} </p>
        </SPostReact>
        {user?.username && <UserAvatar user={user}/>}
    </SPost>
    )
}