import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";

export const XCloseIcon = ({ size }: { size: "md" | "lg" }) => {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start({ rotate: 0 });
  };

  return (
    <motion.svg
      onHoverStart={() => controls.start({ rotate: 95 })}
      onHoverEnd={() => controls.start({ rotate: 0 })}
      onClick={handleClick}
      initial={{ rotate: 0 }}
      animate={controls}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(`cursor-pointer size-${size} hover:stroke-accent`)}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </motion.svg>
  );
};
