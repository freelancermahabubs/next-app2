// "use client";
// import Menu from "@/components/Menu";

// import {useSearchParams} from "next/navigation";
async function getData() {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
  }
  const Page = async () => {
    // const params = useSearchParams();
    const data = await getData();
  
    return (
      <div>
        {JSON.stringify(data)}
        {/* {props.name.pam} */}
        <h1>Men Product Page</h1>
        {/* <h1>{params.get("name")}</h1>
        <h1>{params.get("price")}</h1> */}
      </div>
    );
  };
  
  export default Page;
  