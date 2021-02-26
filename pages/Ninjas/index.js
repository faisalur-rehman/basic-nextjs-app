import React from "react";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const NinjasList = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`/Ninjas/${ninja.id}`}>
            <a className={styles.ninjaListing}>
              <h2>{ninja.name}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NinjasList;
