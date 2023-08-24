"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";
const Menu = dynamic(() => import("../components/Menu.jsx"));

// const Menu2 = dynamic(() => import("../components/Menu.jsx"),{ssr: false});
// const Menu3 = dynamic(() => import("../components/Menu.jsx"), {
//   loading: () => <p>Loading..</p>,
// });
const Page = () => {
  const router = useRouter();
  const GoTo = () => {
    router.push("/product?name=Mobile&price=2000Taka");
  };

  /**
   * image config by image componentes
   * 1. security
   * 2. layout Responsive
   * 3. Layout Fixed Position
   * 4. Priority Loading
   * 5. Image Lazy Loading
   * */

  return (
    <div>
      <Menu />
      <h1 className="my_text"> আমার সোনার বাংলা</h1>
      <button onClick={GoTo}>Click</button>
      {/* {process.env.API_KEY} */}
      <Image
        width={400}
        height={400}
        src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
        alt="pic"
        layout="responsive"
        priority
        // placeholder="blur"
        // blurDataURL=""
      />
      <img src="next.svg" alt="" />
    </div>
  );
};

export default Page;
