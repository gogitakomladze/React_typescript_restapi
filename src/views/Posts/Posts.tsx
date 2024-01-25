import { usePosts } from "./usePosts"
import { Post } from "./Post";

import { SPosts } from "./Posts.styled";

export function Posts() {
    const {posts, loading } = usePosts();

    return (
    <SPosts>
        {posts?.map((post) => {
            return <Post  key={post.id} post={post} />
        })}
    </SPosts>
    )
}