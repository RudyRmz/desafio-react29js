import FormMiddle from "./form-components/FormMiddle";
import { useForm } from "react-hook-form";
import opciones from "./../../../assets/opciones.svg";
import { useNavigate } from "react-router-dom";

export default function FormCreatePost() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const tokenObjet = () => {
    if (token) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        token.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject;
    }
  };

  //console.log(tokenObjet());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  const dateNow = new Date();
  const dateNowString = dateNow.toDateString();
  const tiempoEnMilisegundos = dateNow.getTime();
  let randomNumber = Math.floor(Math.random() * 50);

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        url: data.url,
        description: data.description,
        date: dateNowString,
        dateMiliseconds: tiempoEnMilisegundos,
        reactions: randomNumber,
        user: tokenObjet()?.name,
        avatar: tokenObjet()?.avatar,
      }),
    });
    const result = await response.json();
    const idNewPost = result?.data?.post?._id;
    navigate(`/post-detail/${idNewPost}`);
    //console.log(result?.data?.post?._id);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="px-16 py-8 border border-[#d4d4d4] border-b-0 bg-white rounded-t-lg">
          <div className=" flex mb-5">
            <p className=" px-3 py-2 border bg-[#f5f5f5] border-[#d4d4d4] rounded-l-lg">
              Add a url image
            </p>
            <input
              className=" border border-[#d4d4d4] rounded-r-lg outline-none w-96"
              type="text"
              {...register("url", { required: true })}
              required
            />
          </div>
          <textarea
            type="text"
            placeholder="New post title here..."
            className=" text-5xl font-bold w-full h-16 resize-none outline-none"
            required
            {...register("title", { required: true })}
          />
          {/* <select name="tags" id="tags" required>
            <option value="" disabled selected hidden>
              Add up to 4 tags...
            </option>
            <option value="tag1">Tag 1</option>
            <option value="tag2">Tag 2</option>
            <option value="tag3">Tag 3</option>
            <option value="tag4">Tag 4</option>
            <option value="tag5">Tag 5</option>
          </select> */}
        </section>
        <FormMiddle />
        <section className="px-16 py-8 border bg-white border-[#d4d4d4] border-t-0 rounded-b-lg">
          <textarea
            type="text"
            placeholder="Write your post content here..."
            className=" w-full h-96 resize-none outline-none"
            required
            {...register("description", { required: true })}
          />
        </section>
        <section className=" flex gap-2 mt-4">
          <button
            type="submit"
            className=" px-4 py-2 bg-[#3b49df] text-white font-semibold rounded-md"
          >
            Publish
          </button>
          <button type="button">Save draft</button>
          <img src={opciones} alt="" />
          <button type="button" onClick={handleClearClick}>
            Revert new changues
          </button>
        </section>
      </form>
    </>
  );
}
