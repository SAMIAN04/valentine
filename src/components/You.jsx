import { useEffect, useState } from "react";

const images = [
  "/you1.jpg",
  "/you2.jpg",
  "/you3.jpg",
  "/you4.jpg",
];

const loadingMessages = [
  "✨ Preparing our fairytale…",
  "👑 Waking up the princess magic…",
  "💖 Gathering Valentine dreams…",
  "🎶 Tuning the princess melody…",
  "📸 Collecting our sweetest memories…",
];

const You = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);

  // preload images + audio
  useEffect(() => {
    const imagePromises = images.map(
      (src) =>
        new Promise((res) => {
          const img = new Image();
          img.src = src;
          img.onload = res;
          img.onerror = res;
        })
    );

    const audioPromise = new Promise((res) => {
      const audio = new Audio("/princess.mp3");
      audio.oncanplaythrough = res;
      audio.onerror = res;
    });

    Promise.all([...imagePromises, audioPromise]).then(() => {
      setLoading(false);
    });
  }, []);

  // loading text rotation
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      const random =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setLoadingText(random);
    }, 2000);

    return () => clearInterval(interval);
  }, [loading]);

  // image rotation (only after load)
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * images.length);
      setCurrentImage(images[random]);
    }, 2500);

    return () => clearInterval(interval);
  }, [loading]);

  // 🟣 LOADING SCREEN
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-black/70 text-pink-200 px-8 py-6 rounded-xl shadow-xl text-center space-y-4">
          <p className="text-xl font-semibold">💫 Just a moment…</p>
          <p className="animate-pulse">{loadingText}</p>
        </div>
      </div>
    );
  }

  // 🟢 YOUR ORIGINAL CONTENT (unchanged)
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[90%] max-w-md h-[80vh] rounded-xl overflow-hidden shadow-2xl">

        <img
          src={currentImage}
          alt="memories"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="absolute inset-0 z-20 flex justify-center">
          <div className="credits font-semibold text-pink-100 text-center px-6 space-y-4">

            <p className="text-xl">✨ Valentine’s Fairytale ✨</p>

            <p>On this Valentine’s Day,</p>
            <p>a princess said yes,</p>
            <p>and my world</p>
            <p>became a storybook.</p>

            <p>You chose me,</p>
            <p>not for perfection,</p>
            <p>but for my heart.</p>

            <p>Your smile feels like magic,</p>
            <p>your voice like a soft spell,</p>
            <p>your presence like home.</p>

            <p>I may not have castles,</p>
            <p>or crowns made of gold,</p>
            <p>but I promise loyalty,</p>
            <p>care,</p>
            <p>and love that stays.</p>

            <p>You are my Valentine,</p>
            <p>my princess,</p>
            <p>my favorite forever.</p>

            <p className="text-lg">💖 This story never ends 💖</p>

            <p className="opacity-80 pt-10">On this Valentine’s Day,</p>
            <p className="opacity-80">our fairytale continues,</p>
            <p className="opacity-80">softly, endlessly, with no ending.</p>

          </div>
        </div>

        <audio autoPlay loop>
          <source src="/princess.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default You;
