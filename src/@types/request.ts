export interface TUser {
    id: number;
    username: string;
    image: string;
}

 export interface TComment {
    id:number;
    body:string;
    postId:number;
    user: Omit<TUser,'image'>
}

export interface TPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}