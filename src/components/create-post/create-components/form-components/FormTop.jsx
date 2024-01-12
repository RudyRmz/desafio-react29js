export default function FormTop() {
  return (
    <section className="px-16 py-8">
      <div className=" flex mb-5">
        <p className=" px-3 py-2 border bg-[#f5f5f5] border-[#d4d4d4] rounded-l-lg">
          Add a cover image
        </p>
        <input
          className=" border-[#d4d4d4] rounded-r-lg outline-[#3b49df] w-96"
          type="text"
        />
      </div>
      <textarea
        type="text"
        placeholder="New post title here..."
        className=" text-5xl font-bold w-full h-16 resize-none"
      />
      <select name="tags" id="tags" required>
        <option value="" disabled selected hidden>
          Add up to 4 tags...
        </option>
        <option value="tag1">Tag 1</option>
        <option value="tag2">Tag 2</option>
        <option value="tag3">Tag 3</option>
        <option value="tag4">Tag 4</option>
        <option value="tag5">Tag 5</option>
      </select>
    </section>
  );
}
