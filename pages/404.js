import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooooooopppppssss....</h1>
      <h2>Page not Found</h2>
      <p>
        Go back to{""}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
