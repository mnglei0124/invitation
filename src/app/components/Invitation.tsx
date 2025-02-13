import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hearts from "./Hearts";

declare global {
  interface Window {
    backgroundMusic: HTMLAudioElement;
  }
}

const Invitation = () => {
  const [response, setResponse] = useState<null | boolean>(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [yesButtonRef, setYesButtonRef] = useState<HTMLButtonElement | null>(
    null
  );

  // Calculate time until Valentine's Day
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const valentine = new Date("2025-02-14T20:30:00");
      const diff = valentine.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNoClick = () => {
    setResponse(false);

    // Stop background music
    if (window.backgroundMusic) {
      window.backgroundMusic.pause();
      window.backgroundMusic.currentTime = 0;
    }

    // Play no.mp3
    const noAudio = new Audio("/no.mp3");
    noAudio.volume = 0.2;
    noAudio.play();

    // Stop no.mp3 after 10 seconds
    setTimeout(() => {
      noAudio.pause();
      noAudio.currentTime = 0;
    }, 10000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[90vw] max-w-md mx-auto relative"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl relative min-h-[200px]">
        {/* Decorative lined paper effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,#e5e7eb_24px)] bg-[size:100%_24px] opacity-10" />

        {/* Decorative Hearts */}
        <div className="absolute -top-3 -right-3 text-2xl rotate-15">
          <span className="text-pink-400">❤️</span>
        </div>
        <div className="absolute -bottom-3 -left-3 text-2xl -rotate-15">
          <span className="text-yellow-400">❤️</span>
        </div>
        <div className="absolute -bottom-3 -right-3 text-2xl rotate-15">
          <span className="text-teal-400">❤️</span>
        </div>
        <div className="absolute top-1/3 -left-3 text-2xl rotate-15">
          <span className="text-pink-400">❤️</span>
        </div>

        {/* Content */}
        {response === null ? (
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl text-pink-600 mb-6 font-handwriting">
              Хүндэт Ena-д
            </h1>
            <p className="text-base sm:text-lg mb-8 text-gray-700 leading-relaxed">
              Хэдийгээр бид хуучин шигээ биш болсон л доо. Гэхдээ энэ үдшийг би
              чамтай хамт кино үзэж, зугаатайгаар өнгөрүүлэхийг хүссэн юм аа.
              Тиймээс би чамайг &apos;movie night&apos; хамт үзэхэд урьж байна.
              <br /> <br />
              <i>
                Жич: Ямар нэгэн хүчилсэн зүйл байхгүй шүү. Зүгээр л асууж байгаа
                шүү.
              </i>
            </p>

            <div className="space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center relative">
              <button
                ref={setYesButtonRef}
                onClick={() => setResponse(true)}
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all shadow-md"
              >
                Yes ❤️
              </button>
              <button
                onClick={handleNoClick}
                className="bg-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-400 transform hover:scale-105 transition-all shadow-md"
              >
                No
              </button>
            </div>
          </div>
        ) : response === true ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center relative"
          >
            {/* Additional decorative hearts for Yes response */}
            <div className="absolute -top-4 -right-4 text-2xl text-pink-500">
              ❤️
            </div>
            <div className="absolute -top-4 -left-4 text-2xl text-pink-500">
              ❤️
            </div>

            {/* Movie details remain the same */}
            <h2 className="text-xl sm:text-2xl text-pink-600 mb-4 font-semibold">
              Киноны мэдээлэл
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center justify-center gap-2">
                <span className="font-medium">Хэдэн цагт:</span> 8:30 PM
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="font-medium">Киноны нэр:</span> The
                Notebook(2004)
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="font-medium">Хаана:</span> Багшийн дээд
              </p>
            </div>
            <div className="mt-6 text-lg sm:text-xl font-bold text-pink-500 bg-pink-100/50 py-3 px-4 rounded-lg">
              Үлдсэн цаг: {timeLeft}
            </div>
            <Hearts
              buttonRect={yesButtonRef?.getBoundingClientRect() ?? null}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Only two hearts for No response */}
            <div className="absolute top-2 right-2 text-2xl text-red-500">
              ❤️
            </div>
            <div className="absolute bottom-2 left-2 text-2xl text-red-500">
              ❤️
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-xl"
              >
                Үдшийг сайхан өдрийг өнгөрүүлээрэй ❤️
              </motion.p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Invitation;
