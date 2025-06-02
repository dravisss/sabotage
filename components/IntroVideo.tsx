"use client";
import React, { useEffect, useState } from "react";

export default function IntroVideo({ onFinish }: { onFinish: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Só mostra se não viu ainda
    const alreadySeen = localStorage.getItem("introVideoSeen");
    if (!alreadySeen) {
      setShow(true);
    } else {
      setShow(false);
      onFinish();
    }
    // Fallback: força sumir loader após 0.2s
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, [mounted, onFinish]);

  const handleEnded = () => {
    localStorage.setItem("introVideoSeen", "true");
    setShow(false);
    onFinish();
  };

  const handleCanPlay = () => {
    setLoading(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/Sabotagem-Video.mp4"
        autoPlay
        playsInline
        muted
        preload="auto"
        className="max-w-full max-h-full rounded shadow-2xl"
        onEnded={handleEnded}
        onClick={handleEnded}
        onCanPlay={handleCanPlay}
        style={{ zIndex: 10 }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white opacity-80"></div>
        </div>
      )}
      <button
        onClick={handleEnded}
        className="absolute top-6 right-6 bg-white/80 hover:bg-white text-zinc-800 px-4 py-2 rounded shadow font-bold text-lg z-30"
      >Pular intro</button>
    </div>
  );
}
