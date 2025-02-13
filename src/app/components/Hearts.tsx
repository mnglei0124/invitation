import { motion } from "framer-motion";

const Hearts = ({ buttonRect }: { buttonRect: DOMRect | null }) => {
  const hearts = Array.from({ length: 8 }, (_, i) => i);

  if (!buttonRect) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((i) => {
        const startX = buttonRect.left + Math.random() * buttonRect.width;
        const startY = buttonRect.top;

        return (
          <motion.div
            key={i}
            initial={{
              scale: 0,
              x: startX,
              y: startY,
            }}
            animate={{
              scale: [1, 0.5],
              x: startX + (Math.random() - 0.5) * 100,
              y: [startY, startY - 200],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
            className="fixed text-2xl text-pink-500"
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
};

export default Hearts;
