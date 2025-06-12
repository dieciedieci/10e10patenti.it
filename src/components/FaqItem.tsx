import { IoChevronForward } from "react-icons/io5";
import type { FAQProps } from "../types/FAQ";
import { useState } from "react";

export default function FaqItem({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='grid gap-8 border-b border-gray-400 pb-8'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left text-lg md:text-2xl flex justify-between items-center w-full hover:text-gray-500 transition-colors cursor-pointer">
        {question}
        <IoChevronForward className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
      </button>
      {isOpen && (
        <p className="text-sm md:text-lg text-gray-300 transition-opacity duration-200">{answer}</p>
      )}
    </section>
  )
}
