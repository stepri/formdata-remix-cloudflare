import { ActionFunction } from "remix";

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
};

export default function Index() {
  return (
    <form method="POST" action="/test">
      <input type="hidden" name="myData" value="myValue" />
      <button type="submit">Submit</button>
    </form>
  );
}
