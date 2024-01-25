import axios from "axios";
import { useEffect, useState } from "react";
import { TPost } from "../../../@types/request";

export function usePosts () {
    const [posts, setPosts] = useState<TPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchPosts() {
        try {
           const response = await axios("https://dummyjson.com/posts");
           setPosts(response.data?.posts);
        } catch (error) {

        } finally {
           setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return {posts, loading};
}