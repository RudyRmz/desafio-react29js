import ButtonGroup from "./sectionposts-components/ButtonGroup";
import PostHome from "./sectionposts-components/PostHome";
import { useEffect, useState } from "react";

export default function SectionPostRelevant() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);
  //console.log(posts);
  return (
    <section className="">
      <ButtonGroup route={"latest"} />
      {posts.map((post) => {
        return (
          <PostHome
            key={post._id}
            img={post.url}
            date={post.date}
            reactions={post.reactions}
            title={post.title}
            tags={post.tags}
          />
        );
      })}
    </section>
  );
}
