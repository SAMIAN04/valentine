import { useEffect, useState } from "react";

const images = [
  "/you1.jpg",
  "/you2.jpg",
  "/you3.jpg",
  "/you4.jpg",
];

const You = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * images.length);
      setCurrentImage(images[random]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[90%] max-w-md h-[80vh] rounded-xl overflow-hidden shadow-2xl">

        {/* Background Image */}
        <img
          src={currentImage}
          alt="memories"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Scrolling Text */}
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
 <p>And you will be always my crazy little babygirl</p>
            <p className="text-lg">💖 This story never ends 💖</p>

            {/* duplicate for seamless infinite scroll */}
            <p className="opacity-80 pt-10">On this Valentine’s Day,</p>
            <p className="opacity-80">our fairytale continues,</p>
            <p className="opacity-80">softly,</p>
            <p className="opacity-80">endlessly,</p>
            <p className="opacity-80">with no ending.</p>
           
            <p>      </p>
          </div>
        </div>

        {/* Background Music */}
        <audio autoPlay loop>
          <source src="/princess.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default You;
