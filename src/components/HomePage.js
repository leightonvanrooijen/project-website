import React from "react";
import HeaderPhoto from "./appbar/HeaderPhoto";
import HomeDisplay from "./HomeDisplay";

export default function HomePage() {
  return (
    <React.Fragment>
      <HeaderPhoto start={"I am a"} punch={["web whizz", "cracking coder", "programming pro", "digital genius"]}/>
      <HomeDisplay />
    </React.Fragment>
  );
}
