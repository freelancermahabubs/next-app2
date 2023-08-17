"use client";
// import Menu from "@/components/Menu";
import {useRouter} from "next/navigation";
const Page = () => {
  const router = useRouter();
  const GoTo = () => {
    router.push("/product?name=Mobile&price=2000Taka");
  };
  return (
    <div>
      <h1> This is Home</h1>
      <button onClick={GoTo}>Click</button>
    </div>
  );
};

export default Page;
