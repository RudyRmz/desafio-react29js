import ButtonGroup from "./sectionposts-components/ButtonGroup";
import PostHome from "./sectionposts-components/PostHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionPostRelevant() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);

  const handleEventItemClick = (id) => {
    navigate(`/post-detail/${id}`);
  };

  let postToTop = [
    ...posts.sort(function (a, b) {
      return b.reactions - a.reactions;
    }),
  ];

  return (
    <section className="">
      <ButtonGroup route={"top"} />
      {postToTop.map((post) => {
        return (
          <PostHome
            key={post._id}
            img={post.url}
            date={post.date}
            reactions={post.reactions}
            title={post.title}
            tags={post.tags}
            onEventClick={handleEventItemClick}
            id={post._id}
          />
        );
      })}
    </section>
  );
}
