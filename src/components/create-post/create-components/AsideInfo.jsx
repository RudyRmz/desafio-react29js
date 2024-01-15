export default function AsideInfo() {
  return (
    <ul className="  flex flex-col justify-between py-5">
      <li className="flex flex-col gap-2">
        <h2 className=" font-bold ">Writing a Great Post</h2>
        <p className=" font-light">
          Title Think of your post title as a super short (but compelling!)
          description — like an overview of the actual post in one short
          sentence.
        </p>
        <p className=" font-light">
          Use keywords where appropriate to help ensure people can find your
          post by search.
        </p>
      </li>
      <li className="flex flex-col gap-2">
        <h2 className=" font-bold ">Editor Basics</h2>
        <p className=" font-light">
          Use Markdown to write and format posts. Commonly used syntax
        </p>
        <p className=" font-light">
          Embed rich content such as Tweets, YouTube videos, etc. Use the
          complete URL: % embed https://... % . See a list of supported embeds.{" "}
        </p>
        <p className=" font-light">
          In addition to images for the post's content, you can also drag and
          drop a cover image.
        </p>
      </li>
      <li className="flex flex-col gap-2">
        <h2 className=" font-bold ">Publishing Tips</h2>
        <p className=" font-light">
          Ensure your post has a cover image set to make the most of the home
          feed and social media platforms.
        </p>
        <p className=" font-light">
          Share your post on social media platforms or with your co-workers or
          local communities.
        </p>
        <p className=" font-light">
          Ask people to leave questions for you in the comments. It's a great
          way to spark additional discussion describing personally why you wrote
          it or why people might find it helpful.
        </p>
      </li>
    </ul>
  );
}
