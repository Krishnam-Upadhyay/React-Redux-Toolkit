import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
const Posts = () => {
    const posts = useSelector(selectAllPosts);
    const renderedPosts = posts.map((post) => {
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>

        </article>
    })
    return (
        <section>
            <h1>POSTS</h1>
            {renderedPosts}
        </section>

    )
}
export default Posts;