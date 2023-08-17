async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

const Page = async () => {
  const data = await getData();
  return (
    <div>
      <h1>This is Profile Page</h1>
      <>{props.name.stringify}</>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Page;
