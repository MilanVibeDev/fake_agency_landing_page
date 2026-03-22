import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    testimonial: "NovaForge didn't just deliver a website—they gave us a brand that finally felt like us. The results speak for themselves: best quarter in company history.",
    author: "Sarah Chen - Founder & CEO, TechNova AI"
  },
  {
    id: 2,
    testimonial: "Their creative team understands performance marketing better than most media buyers we've worked with. The ad creatives they produced converted 3× better than anything in-house.", 
    author: "Marcus Rivera - Head of Growth, VibeThread Apparel"
  },
  {
    id: 3,
    testimonial: "Working with NovaForge felt like having an extension of our team. Professional, responsive, and genuinely invested in our success.",
    author: "Lauren Brooks - Marketing Director, Pulse Fitness"
  },
  {
    id: 4,
    testimonial: "They turned our vague ideas into a cohesive, high-converting brand experience. Worth every penny.",
    author: "James Patel - Co-founder, EcoBloom Home"
  }
];

export function ShuffleCards() {
  const [positions, setPositions] = useState(["front", "middle", "back", "far-back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden w-full h-full py-20 bg-slate-950">
      <div className="text-center mb-12 relative z-10 w-full">
        <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 tracking-tight">What Clients Say</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Don't just take our word for it. Here's what our partners have to say about working with NovaForge Creative.</p>
      </div>

      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px] mx-auto z-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index] || "back"}
          />
        ))}
      </div>
    </div>
  );
}
