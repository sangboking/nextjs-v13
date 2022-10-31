import Image from "next/image";
import kiling from "../public/giling.png";

export default function Home() {
  return (
    <div>
      안녕못해요afsasfdkssud안녕
      <Image src={kiling} alt="kiling img" width={300} height={300} />
    </div>
  );
}
