"use client";
import Link from "next/link";
import React from "react";
// import {usePathname} from "next/navigation";

const Menu = () => {
  // let currentPhath = usePathname();
  return (
    <div>
      {/* <h1>{currentPhath}</h1> */}
      <Link
        // className={currentPhath === "/" ? "active-link" : "pending-link"}
        href={"/"}
        // prefetch={false}
      >
        Home
      </Link>
      <br />
      <Link
        // className={currentPhath === "/product" ? "active-link" : "pending-link"}
        href={"/product"}
        // href={{pathname: "/product", query: {name: "book", price: "200Taka"}}}
        // prefetch={false}
      >
        Product
      </Link>
      <br />
      <Link
        // className={currentPhath === "/product" ? "active-link" : "pending-link"}
        href={"/product/men"}
        // href={{pathname: "/product", query: {name: "book", price: "200Taka"}}}
        // prefetch={false}
      >
        Product Men
      </Link>
      <br />
      <Link
        // className={currentPhath === "/product" ? "active-link" : "pending-link"}
        href={"/product/women"}
        // href={{pathname: "/product", query: {name: "book", price: "200Taka"}}}
        // prefetch={false}
      >
        Product Women
      </Link>
      <br />
      <Link
        // className={currentPhath === "/profile" ? "active-link" : "pending-link"}
        href={"/profile"}
        // prefetch={false}
      >
        Profile
      </Link>
      <br />
    </div>
  );
};

export default Menu;
