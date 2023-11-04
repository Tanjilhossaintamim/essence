import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center font-bold">
      <span className="text-4xl text-blue-500">404</span>
      <h1 className="text-3xl font-bold">NotFound</h1>
      <Link href={"/"} className="text-lg">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
