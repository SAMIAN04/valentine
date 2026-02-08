import { useState, useEffect } from "react";

import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import Question from "./components/Question";
import You from "./components/You";

function App() {
  const qugif = "heyy.gif";
  const okaygif = "oky.gif";
  const flowersgif = 'cat.gif'
  const askinggif = 'asking.gif'
  const describegif = 'desc.gif'
  // Images to preload
  const images = {
    ques: qugif,
  };

  // State for loading and card steps
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState("main");

  // Step 1: Move to next card
  const OkayClick = () => {
    setStep("okay");
  };
  const yes = () => {
    setStep("yes");
  };
  const agree = () => {
    setStep("agree")
  }
  
  const mine = () => {
    setStep("mine")
  }
  
  const final = () => {
    setStep("final")
  }
  
  

  // WhatsApp URL with encoded message
  const w = `https://wa.me/+8801329483669?text=${encodeURIComponent("")}`;
  const notsure = `https://wa.me/+8801329483669?text=${encodeURIComponent("I am not sure i am your valentine or not . i am still thinking")}`;
  const hateyou = `https://wa.me/+8801329483669?text=${encodeURIComponent("i hate your chrecter")}`;
  // Preload images
  useEffect(() => {
    const preload = Object.values(images).map(
      (src) =>
        new Promise((res) => {
          const img = new Image();
          img.src = src;
          img.onload = res;
          img.onerror = res;
        })
    );

    Promise.all(preload).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen  text-white text-xl font-bold">
        Loading everything for you, my love... 💖
      </div>
    );
  }

  return (
    <div className="w-[90vw] h-[90vh] mt-[2vh] flex justify-center items-center">
      {step === "main" && (
        <Card
          text={
            <Question
              text="Heyy cutieee I have a question for you"
              speed={80}
              className="text-black"
            />
          }
          Button={
            <div className=" mt-4 flex justify-center gap-10">
              <Button text="okay" onClick={OkayClick} />
              <Button text="yess what is it????" onClick={yes} />
            </div>
          }
          gif={qugif}
        />
      )}

      {step === "okay" && (
        <Card
          text={
            <Question
              text="So you are not interested"
              speed={80}
              className="text-black"
            />
          }
          Button={
            <Button text="explain" onClick={() => window.open(w, "_blank")} />
          }
          
          gif={okaygif}
        />
      )}
      {step === "yes" && (
        <Card
          text={
            <Question
              text="Will you be my valentine "
              speed={80}
              className="text-black"
            />
          }
          Button={
            <div className=" mt-4 flex justify-center gap-10">
              <Button text="yes" onClick={agree} />{" "}
              <Button text="maybe i am not sure" onClick={() => window.open(notsure, "_blank")} />
            </div>
          }
          gif={flowersgif}
        />
      )}
      {step === "agree" && (
        <Card
          text={
            <Question
              text="but i am so jelous, possesive, dramatic , didnt give you flowers at street, i dont have long hairs "
              speed={80}
              className="text-black"
            />
          }
          Button={
            <div className=" mt-4 flex justify-center gap-10">
              <Button text="still mine" onClick={mine} />{" "}
              <Button text=" yeah i don't like it" onClick={() => window.open(hateyou, "_blank")}/>
            </div>
          }
          gif={describegif}
        />
      )}
      {step === "mine" && (
        <Card
          text={
            <Question
              text="Are you sure sweetie  "
              speed={80}
              className="text-black"
            />
          }
          Button={
            <div className=" mt-4 flex justify-center gap-10">
              <Button text="yesss i love you " onClick={final} />
              <Button text="not so sure" onClick={() => window.open(notsure, "_blank")} />
            </div>
          }
          gif={askinggif}
        />
      )}

 {step === "final" && (
       <You/>
      )}
    </div>
  );
}

export default App;
