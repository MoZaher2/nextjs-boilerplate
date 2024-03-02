import React from 'react'
import Link from "next/link";
import styles from "./page.module.css"

export default function page() {
  return (
    <>
    <p>We have manny product else</p>
    <Link href="/" className={styles.link}>Back to Home</Link>
    </>
  )
}

