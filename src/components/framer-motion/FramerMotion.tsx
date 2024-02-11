"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "../../app/page.module.scss";
import Picture1 from "../../../public/medias/4.jpg";
import Picture2 from "../../../public/medias/5.jpg";
import Picture3 from "../../../public/medias/6.jpg";
import { StaticImageData } from "next/image";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
const word = "with framer-motion";
type imageItem = {
  src: StaticImageData;
  y?: MotionValue<number> | number;
};
const FramerMotion = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const images: imageItem[] = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <h1 className="">parallex</h1>
        <h1>Scroll</h1>
        <div>
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span style={{ top: y }} key={`L_${i}`} className="">
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => {
            return (
              <motion.div
                style={{ y }}
                key={`l_${i}`}
                className={styles.imageContainer}
              >
                <Image src={src} placeholder="blur" alt="image" fill />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FramerMotion;
