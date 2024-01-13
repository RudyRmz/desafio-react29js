export default function EnterLogin() {
  return (
    <main className=" flex flex-col items-center h-screen m-0 justify-center">
      <div>
        <section className=" flex flex-col items-center gap-3">
          <a id="icon-index">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
              className=" w-[50px] h-[40px] cursor-pointer"
            />
          </a>
          <h2 className=" font-bold text-3xl">Join the DEV Community</h2>
          <p>DEV Community is a community of 1,187,414 amazing developers</p>
          <button
            className=" border border-[#d4d4d4] w-full p-3 rounded-md"
            type="button"
          >
            <img src="/src/apple.svg" alt="" /> Continue with Apple{" "}
          </button>
          <button
            className=" border border-[#d4d4d4] w-full p-3 rounded-md"
            type="button"
          >
            <img src="/src/forem.svg" alt="" /> Continue with Forem{" "}
          </button>
          <button
            className=" border border-[#d4d4d4] w-full p-3 rounded-md"
            type="button"
          >
            <img src="/src/github2.svg" alt="" /> Continue with GitHub{" "}
          </button>
          <button
            className=" border border-[#d4d4d4] w-full p-3 rounded-md"
            type="button"
          >
            <img src="/src/twitter.svg" alt="" /> Continue with Twitter{" "}
          </button>
          <div className="d-flex justify-content-center mt-2">
            <p>OR</p>
          </div>
          <form className=" flex flex-col w-full gap-1">
            <span className=" font-semibold">Email</span>
            <input
              type="text"
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
              required
            />
            <span className=" font-semibold">Password</span>
            <input
              type="password"
              className=" border border-[#d4d4d4] w-full p-2 rounded-md outline-[#3b49df]"
            />

            <div className=" flex justify-between">
              <div className=" flex gap-2">
                <input type="checkbox" defaultValue="" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <a
                className="link-offset-2 link-underline link-underline-opacity-0"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                className=" bg-[#3b49df] w-full text-white font-semibold p-3 rounded-md"
                type="submit"
                id="login_button"
              >
                Log in
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
          <p>
            New to DEV Community?{" "}
            <a
              className="link-offset-2 link-underline link-underline-opacity-0"
              href="../new_user/new_user.html"
            >
              Create account
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
