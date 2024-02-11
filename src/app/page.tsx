"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import FramerMotion from "@/components/framer-motion/FramerMotion";
import Lenis from "@studio-freight/lenis";
import GSAP from "@/components/gsap/GSAP";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <FramerMotion />
      <GSAP />
    </main>
  );
}
