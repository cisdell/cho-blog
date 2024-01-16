interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="card">
      <h2>HELLO{post.title}</h2>
      <p> {post.body}</p>
    </div>
  );
}
