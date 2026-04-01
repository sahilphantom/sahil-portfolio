"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { uid, matchAiResponse } from "@/lib/utils";
import { AI_RESPONSES } from "@/data";
import type { ChatMessage } from "@/types";

interface HeroAiChatProps {
  onBioChange: (html: string) => void;
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center p-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot w-1.5 h-1.5 bg-lime rounded-full opacity-40"
          style={{
            animation: `typingDot 1.4s ease-in-out infinite`,
            animationDelay: `${i * 200}ms`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Chat Bubble ──────────────────────────────────────────────────────────────

function ChatBubble({ message }: { message: ChatMessage }) {
  const isAi = message.type === "ai";
  return (
    <div
      className={`flex ${isAi ? "justify-start" : "justify-end"} relative mt-3`}
    >
      {isAi && (
        <span className="absolute -top-4 left-0 w-6 h-6 rounded-full bg-gradient-to-br from-lime to-sky flex items-center justify-center text-[10px] font-bold text-black">
          *
        </span>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
          isAi
            ? "bg-lime/7 border border-lime/12 text-text rounded-bl-sm"
            : "bg-surface-2 border border-white/7 text-text-muted rounded-br-sm"
        }`}
        dangerouslySetInnerHTML={{ __html: message.text }}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroAiChat({ onBioChange }: HeroAiChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      type: "ai",
      text: "Hey! I'm Alex's AI twin. Tell me what you're looking for — I'll tailor this portfolio just for you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = useCallback(() => {
    const val = input.trim();
    if (!val || isTyping) return;
    setInput("");

    const userMsg: ChatMessage = { id: uid(), type: "user", text: val };
    setMessages((prev) => [...prev, userMsg]);

    const response = matchAiResponse(val, AI_RESPONSES);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: ChatMessage = { id: uid(), type: "ai", text: response.msg };
      setMessages((prev) => [...prev, aiMsg]);
      onBioChange(response.bio);
    }, 1300);
  }, [input, isTyping, onBioChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="relative z-10 bg-surface border border-white/7 rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] animate-fade-up [animation-delay:200ms]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-surface-2 border-b border-white/7">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <p className="flex-1 text-center text-[12px] text-text-muted font-dm tracking-wide">
          AI Personalization Demo
        </p>
        <span className="bg-sky/15 text-sky border border-sky/20 text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
          Live
        </span>
      </div>

      {/* Messages */}
      <div
        ref={bodyRef}
        className="flex flex-col gap-2 px-5 py-5 min-h-[280px] max-h-[320px] overflow-y-auto scroll-smooth"
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex justify-start mt-2">
            <div className="bg-lime/7 border border-lime/12 px-4 py-3 rounded-2xl rounded-bl-sm">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 px-5 py-4 border-t border-white/7 bg-surface-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. 'I need a startup landing page'…"
          className={[
            "flex-1 bg-surface border border-white/7 rounded-full",
            "px-4 py-2.5 text-[13px] text-text font-dm",
            "outline-none placeholder:text-text-muted",
            "focus:border-lime/30 transition-colors duration-200",
          ].join(" ")}
        />
        <button
          onClick={sendMessage}
          aria-label="Send message"
          className={[
            "w-10 h-10 rounded-full bg-lime text-black flex-shrink-0",
            "flex items-center justify-center text-base font-bold",
            "hover:scale-110 active:scale-95 transition-transform duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/50",
          ].join(" ")}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
