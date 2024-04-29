import React from "react";
import { Link, Element } from "react-scroll";

export const App = () => {
  return (
    <section>
      <header>
        <Link to="Luna" smooth={true} duration={100}>
          <p>Luna</p>
        </Link>
        <Link to="Tierra" smooth={true} duration={100}>
          <p>Tierra</p>
        </Link>
        <Link to="Marte" smooth={true} duration={100}>
          <p>Marte</p>
        </Link>
        <Link to="Mercurio" smooth={true} duration={100}>
          <p>Mercurio</p>
        </Link>
        <Link to="Sol" smooth={true} duration={100}>
          <p>Sol</p>
        </Link>
        <Link to="Jupiter" smooth={true} duration={100}>
          <p>Jupiter</p>
        </Link>
        <Link to="Saturno" smooth={true} duration={100}>
          <p>Saturno</p>
        </Link>
        <Link to="Venus" smooth={true} duration={100}>
          <p>Venus</p>
        </Link>
      </header>

      <article className="a1 Luna"></article>
      <article className="a2 Tierra"></article>
      <article className="a3 Marte"></article>
      <article className="a4 Mercurio"></article>
      <article className="a5 Sol"></article>
      <article className="a6 Jupiter"></article>
      <article className="a7 Saturno"></article>
      <article className="a8 Venus"></article>
    </section>
  );
};
