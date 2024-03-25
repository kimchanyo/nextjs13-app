import postStyle from "../../page.module.css";

async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    //가장 가까이에 있는 error.js 파일이 활성화됩니다.
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}
const PostDetailPage = async ({ params }: any) => {
  const post = await getPost(params.id);
  return (
    <div className={postStyle.container}>
      <h1>posts/{post.id}</h1>
      <div>
        <h3>{post.title}</h3>
        <p>{post.created}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
