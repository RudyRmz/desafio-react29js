import ButtonGroup from "./sectionposts-components/ButtonGroup";
import PostHome from "./sectionposts-components/PostHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionPostRelevant() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/post-detail/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:3002/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);
  //console.log(posts);

  let postToLatest = [
    ...posts.sort(function (a, b) {
      return b.dateMiliseconds - a.dateMiliseconds;
    }),
  ];

  return (
    <section className="">
      <ButtonGroup route={"latest"} />
      {postToLatest.map((post) => {
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
