import { useState, useEffect } from "react";
import "./App.css";

import Card from "./components/Card";
import Button from "./components/Button";
import Question from "./components/Question";
import You from "./components/You";

function App() {
  // ✅ images must be in /public
  const images = {
    qugif: "/heyy.gif",
    okaygif: "/oky.gif",
    flowersgif: "/cat.gif",
    askinggif: "/asking.gif",
    describegif: "/desc.gif",
    loading: "/loading.gif",
    surprise:"/surprise.gif"
  };

  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState("main");

  const w = `https://wa.me/+8801329483669?text=${encodeURIComponent("")}`;
  const notsure = `https://wa.me/+8801329483669?text=${encodeURIComponent(
    "I am not sure i am your valentine or not . i am still thinking"
  )}`;
  const hateyou = `https://wa.me/+8801329483669?text=${encodeURIComponent(
    "i hate your charecter. you are not my type "
  )}`;

  // preload images
  useEffect(() => {
    Promise.all(
      Object.values(images).map(
        (src) =>
          new Promise((res) => {
            const img = new Image();
            img.src = src;
            img.onload = res;
            img.onerror = res;
          })
      )
    ).then(() => setLoading(false));
  }, [images]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white text-xl font-bold">
  <img src={images.loading} alt="gif" className="max-h-40 rounded" />
        Loading everything for you, Beautiful... 💖
      </div>
    );
  }

  return (
    <div className="w-[90vw] h-[90vh] mt-[2vh] flex justify-center items-center">
      {step === "main" && (
        <Card
          gif={images.qugif}
          text={<Question text="Heyy cutieee I have a question for you" speed={80} />}
          actions={
            <>
              <Button  text="okay" onClick={() => setStep("okay")} />
              <Button text="yess what is it????" onClick={() => setStep("yes")} />
            </>
          }
        />
      )}

      {step === "okay" && (
        <Card
          gif={images.okaygif}
          text={<Question text="So you are not interested" speed={80} />}
          actions={<Button text="explain" onClick={() => window.open(w, "_blank")} />}
        />
      )}

      {step === "yes" && (
        <Card
          gif={images.flowersgif}
          text={<Question className="text-red-700 font-extrabold" text="WILL YOU" speed={80}  />}
          textColor={"red"}
          actions={
            <>
              <Button text="yes" onClick={() => setStep("agree")} />
              <Button text="maybe i am not sure" onClick={() => window.open(notsure, "_blank")} />
            </>
          }
        />
      )}

      {step === "agree" && (
        <Card
          gif={images.describegif}
          text={
            <Question
              text="but i am so jealous, possessive, dramatic..."
              speed={80}
            />
          }
          actions={
            <>
              <Button text="still mine" onClick={() => setStep("mine")} />
              <Button text="yeah i don't like it" onClick={() => window.open(hateyou, "_blank")} />
            </>
          }
        />
      )}

      {step === "mine" && (
        <Card
          gif={images.askinggif}
          text={<Question text="Are you sure sweetie?" speed={80} />}
          actions={
            <>
              <Button text="yesss i love you" onClick={() => setStep("final")} />
              <Button text="not so sure" onClick={() => window.open(notsure, "_blank")} />
            </>
          }
        />
      )}

      {step === "final" &&   <Card
          gif={images.surprise}
          text={<Question text="you choosed me after all that other options.I want you to know what is going on my mind right now.......      OPEN THE SURPRISE DEAR" speed={80} />}
          actions={
            <>
              <Button text="🎁" classname=" text-4xl  diagonal-shake" onClick={() => setStep("you")} />
             
            </>
          }
      />}
      {step === "you" && <You/>}
    </div>
     
  );
}

export default App;
