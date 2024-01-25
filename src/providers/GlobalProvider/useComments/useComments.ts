import axios from "axios"
import { useEffect, useState } from "react"
import {TComment } from '../../../@types/request'

export function useComments(){
    const [comments, setComments] = useState<TComment[]>([]);

    async function fetchComments() {
        try{
            const response = await axios.get(
                "https://dummyjson.com/comments?limit=1000"
            );
            setComments(response.data?.comments);
        } catch (error) {}
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return {comments};
}