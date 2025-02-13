import { motion } from "framer-motion";
import { useState } from "react";

const Envelope = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div className="relative rotate-180" onClick={handleClick}>
      <motion.div
        className="w-[90vw] max-w-96 h-[60vw] max-h-64 relative cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main Envelope */}
        <div className="absolute inset-0 bg-pink-300 rounded-lg shadow-lg">
          {/* Lines in top right */}
          <div className="absolute right-4 sm:right-6 top-4 sm:top-6 rotate-180">
            <div className="w-8 sm:w-12 h-[2px] bg-pink-400 mb-2" />
            <div className="w-6 sm:w-8 h-[2px] bg-pink-400" />
          </div>

          {/* Love Text */}
          <div className="absolute left-4 sm:left-6 top-4 sm:top-6 rotate-180">
            <div className="text-pink-500 text-[10px] sm:text-xs border-2 border-pink-500 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
              LOVE
            </div>
          </div>
        </div>

        {/* Bottom Flap */}
        <motion.div
          className="absolute inset-0 bg-pink-200 origin-bottom"
          style={{
            clipPath: "polygon(0 100%, 50% 50%, 100% 100%, 100% 100%, 0 100%)",
          }}
          animate={isOpening ? { rotateX: -180 } : {}}
          transition={{ duration: 1.5 }}
        />

        {/* Message Preview */}
        <motion.div
          className="absolute top-[35%] left-1/2 -translate-x-1/2 text-pink-500 text-sm sm:text-lg z-10 rotate-180"
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
        >
          {`над дээр дар <3`}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Envelope;
