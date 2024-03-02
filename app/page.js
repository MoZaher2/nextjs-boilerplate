import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomePage from "./Home/page";


export default function Home() {
  return (
    <>
    <HomePage />
    {/* <NavBar/> */}
    {/* <Link href="/about" className={styles.link}>About</Link>  */}
    </>
  );
}
