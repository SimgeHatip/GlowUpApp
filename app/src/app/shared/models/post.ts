export interface Post {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: Date;
    updatedAt: Date;
}