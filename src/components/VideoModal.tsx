import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-black w-full max-w-md aspect-[9/16] max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dismiss trigger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-all border border-white/10"
          aria-label="Close Tour Video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Video frame */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-OP3jqyUoqE?autoplay=1"
          title="Diredawa Ras Hotel Virtual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full animate-fade-in"
        />
      </div>
    </div>
  );
}
