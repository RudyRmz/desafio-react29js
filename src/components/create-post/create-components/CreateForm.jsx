import FormTop from "./FormTop";
import FormMiddle from "./FormMiddle";
import FormBottom from "./FormBottom";

export default function CreateForm() {
  return (
    <form className=" border border-black">
      <FormTop />
      <FormMiddle />
      <FormBottom />
    </form>
  );
}
