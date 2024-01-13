import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3002/users/", {
      method: "POST",
      body: JSON.stringify({
        avatar: data.avatar,
        name: data.name,
        user_name: data.user_name,
        email: data.email,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    console.log(responseData);

    if (responseData) {
      navigate("/login");
    }
  }

  return (
    <main className=" flex flex-col items-center h-screen m-0 justify-center">
      <div>
        <section className=" flex flex-col items-center gap-3">
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
              className=" w-[50px] h-[40px] cursor-pointer"
            />
          </a>
          <h2 className=" font-bold text-3xl">Create Account</h2>
          <p>DEV Community is a community of 1,187,414 amazing developers</p>

          <form
            className=" flex flex-col w-full gap-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className=" font-semibold">
              Profile image (add URL image)
            </span>
            <input
              type="text"
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
              required
              {...register("avatar", { required: true })}
            />
            <span className=" font-semibold">Name</span>
            <input
              type="text"
              {...register("name", { required: true })}
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />
            <span className=" font-semibold">Username</span>
            <input
              type="text"
              {...register("user_name", { required: true })}
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />
            <span className=" font-semibold">Email</span>
            <input
              type="email"
              {...register("email", { required: true })}
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />
            <span className=" font-semibold">Password</span>
            <input
              type="password"
              {...register("password", { required: true })}
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />
            <span className=" font-semibold">Password confirmation</span>
            <input
              type="password"
              required
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />

            <div className=" pt-7">
              <button
                className=" bg-[#3b49df] w-full text-white font-semibold p-3 rounded-md"
                type="submit"
                id="login_button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
        <div className=" flex flex-col items-center gap-2 pt-5">
          <span className=" italic">
            By signing in, you are agreeing to our{" "}
            <a
              className="link-offset-2 link-underline link-underline-opacity-0"
              href="https://dev.to/privacy"
            >
              privacy policy
            </a>
            ,
            <a
              className="link-offset-2 link-underline link-underline-opacity-0"
              href="https://dev.to/terms"
            >
              terms of use
            </a>{" "}
            and{" "}
            <a
              className="link-offset-2 link-underline link-underline-opacity-0"
              href="https://dev.to/code-of-conduct"
            >
              code of conduct
            </a>
            .
          </span>
        </div>
      </div>
    </main>
  );
}
