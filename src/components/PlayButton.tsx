import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PlayButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Play Button */}
      <div className="play-button-wrap">
        <button
          onClick={() => setIsOpen(true)}
          className="play-button block"
          aria-label="Play video"
        >
          <img
            src="/images/play-button.svg"
            alt="Play"
            className="w-full h-full"
          />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-4 aspect-video bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 rounded-full hover:bg-background/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Video Player</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlayButton;
