import Form from "./components/Form";
import Items from "./components/Items";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] items-center mt-24">
      <Form />
      <Items />
    </div>
  );
}
