'use client';
import { useState } from "react";


export default function Chat() {
  const [isLoading, setIsloading] = useState(false);
  const [isBgLoading, setIsBgloading] = useState(false);
  // const { messages, sendMessage } = useChat();

  const handleBlocking = async() => {
        setIsloading(true)
        await fetch("/api/chat", {method: "POST"})
        setIsloading(false)
      }

  const handleBackground = async() => {
        setIsBgloading(true)
        await fetch("/api/generate-text", {method: "POST"})
        setIsBgloading(false)
      }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      <button 
        onClick={handleBlocking}
        className="w-[90px] py-2 rounded-md cursor-pointer bg-gray-100 text-black disabled:text-amber-400"
        disabled={isLoading}>
        {isLoading? "Loading..." : "Blocking"}
      </button>
      <br/>
      <button 
        onClick={handleBackground}
        className="w-[98px] py-2 rounded-md cursor-pointer bg-gray-100 text-black disabled:text-amber-400"
        disabled={isBgLoading}>
        {isBgLoading? "Loading..." : "Background"}
      </button>
    </div>
  );
}