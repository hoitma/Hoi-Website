import React, { useEffect, useState, useRef } from 'react';
import { XIcon, SendIcon, MessageCircleIcon } from 'lucide-react';
import { Button } from './ui/Button';
interface Message {
  id: number;
  text: string;
  isBot: boolean;
}
const botResponses: Record<string, string> = {
  experience:
  "I have experience across startups, e-commerce, and venture capital. Most recently, I've been working as a Founder's Associate at Scenarium AI (a pre-seed construction tech startup) and previously at Amazon, Idealo, and Revent Capital. Would you like to know more about a specific role?",
  projects:
  "I've been involved in several exciting projects! I manage PR for 2hearts Community (a tech community for immigrants), led the stage team at Deep Tech Momentum (Europe's #1 deep tech marketplace), and even created cultural Hong Kong stickers for FemRises. Which project interests you?",
  skills:
  "I'm multilingual (German, English, Mandarin, and Cantonese) and work with tools like Zapier, Figma, SQL, Tableau, and Google Analytics. I'm also AWS Certified in Machine Learning!",
  contact:
  "The best way to reach me is through LinkedIn! You can find my profile linked in the hero section. I'm always happy to connect with like-minded professionals.",
  ai: "I'm passionate about applying AI to real business problems! I recently earned my AWS Certified Machine Learning Engineer (Associate) certification and initiated an AI workshop and AI agent project during my time at Amazon.",
  default:
  "Thanks for reaching out! I'd be happy to tell you more about my experience, projects, skills, or how to contact me. What would you like to know?"
};
const getResponse = (input: string): string => {
  const lowered = input.toLowerCase();
  if (
  lowered.includes('experience') ||
  lowered.includes('work') ||
  lowered.includes('job'))
  {
    return botResponses.experience;
  }
  if (
  lowered.includes('project') ||
  lowered.includes('2hearts') ||
  lowered.includes('deep tech'))
  {
    return botResponses.projects;
  }
  if (
  lowered.includes('skill') ||
  lowered.includes('language') ||
  lowered.includes('tool'))
  {
    return botResponses.skills;
  }
  if (
  lowered.includes('contact') ||
  lowered.includes('reach') ||
  lowered.includes('email') ||
  lowered.includes('linkedin'))
  {
    return botResponses.contact;
  }
  if (
  lowered.includes('ai') ||
  lowered.includes('machine learning') ||
  lowered.includes('aws'))
  {
    return botResponses.ai;
  }
  return botResponses.default;
};
export function ChatSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: 1,
    text: "Hi! 👋 I'm Hoi's virtual assistant. Ask me about her experience, projects, skills, or how to get in touch!",
    isBot: true
  }]
  );
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        isBot: true
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <section id="chat">
      {/* Floating Chat Toggle */}
      {!isOpen &&
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Open chat">

          <MessageCircleIcon className="w-6 h-6" />
        </button>
      }

      {/* Chat Window */}
      {isOpen &&
      <div className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-md">
          <div className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Header */}
            <div className="bg-[#FFFF00] px-4 py-3 flex items-center justify-between border-b-2 border-black">
              <div className="flex items-center gap-2">
                <MessageCircleIcon className="w-5 h-5 text-black" />
                <span className="font-bold text-black font-raleway">
                  Chat with Me
                </span>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close chat">

                <XIcon className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) =>
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>

                  <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed font-raleway ${message.isBot ? 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm' : 'bg-black text-white rounded-br-sm'}`}>

                    {message.text}
                  </div>
                </div>
            )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-black bg-white">
              <div className="flex items-center gap-2">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-black font-raleway" />

                <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 rounded-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
                aria-label="Send message">

                  <SendIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

}