"use client";

import { useState } from "react";

// Button component
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0052FF] disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses = {
    primary:
      "bg-[var(--app-accent)] hover:bg-[var(--app-accent-hover)] text-[var(--app-background)]",
    secondary:
      "bg-[var(--app-gray)] hover:bg-[var(--app-gray-dark)] text-[var(--app-foreground)]",
    outline:
      "border border-[var(--app-accent)] hover:bg-[var(--app-accent-light)] text-[var(--app-accent)]",
    ghost:
      "hover:bg-[var(--app-accent-light)] text-[var(--app-foreground-muted)]",
  };
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1.5 rounded-md",
    md: "text-sm px-4 py-2 rounded-lg",
    lg: "text-base px-6 py-3 rounded-lg",
  };
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="flex items-center mr-2">{icon}</span>}
      {children}
    </button>
  );
}

// Icon component
export function Icon({ name, size = "md", className = "" }: { name: "heart" | "star" | "check" | "plus" | "arrow-right"; size?: "sm" | "md" | "lg"; className?: string; }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  const icons = {
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><title>Heart</title><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><title>Star</title><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><title>Check</title><polyline points="20 6 9 17 4 12" /></svg>
    ),
    plus: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><title>Plus</title><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
    ),
    "arrow-right": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><title>Arrow Right</title><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
    ),
  };
  return <span className={`inline-block ${sizeClasses[size]} ${className}`}>{icons[name]}</span>;
}

// Features component
export function Features({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-medium mb-4">Key Features</h3>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start"><Icon name="check" className="text-blue-500 mt-1 mr-2" /><span>Minimalistic and beautiful UI design</span></li>
          <li className="flex items-start"><Icon name="check" className="text-blue-500 mt-1 mr-2" /><span>Responsive layout for all devices</span></li>
          <li className="flex items-start"><Icon name="check" className="text-blue-500 mt-1 mr-2" /><span>Dark mode support</span></li>
          <li className="flex items-start"><Icon name="check" className="text-blue-500 mt-1 mr-2" /><span>OnchainKit integration</span></li>
        </ul>
        <Button variant="outline" onClick={() => setActiveTab("home")}>Back to Home</Button>
      </div>
    </div>
  );
}

// Home component
export function Home({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [ordered, setOrdered] = useState<string | null>(null);
  const menuItems = [
    {
      name: "Pizza Margherita",
      description: "Classic pizza with tomato, mozzarella, and basil.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      details: "A timeless Italian favorite, baked fresh with premium ingredients. Served with a side of garlic bread.",
      price: "$12.99",
      eta: "20 min"
    },
    {
      name: "Sushi Platter",
      description: "Assorted sushi rolls and sashimi.",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80&ixid=M3w5MTc2fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&ixlib=rb-4.0.3",
      details: "Includes salmon, tuna, and veggie rolls, plus chef&apos;s choice sashimi. Soy sauce and wasabi included.",
      price: "$18.50",
      eta: "35 min"
    },
    {
      name: "Burger Combo",
      description: "Juicy beef burger with fries and a drink.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
      details: "Grilled beef patty, cheddar cheese, lettuce, tomato, and house sauce. Served with crispy fries and a soft drink.",
      price: "$14.00",
      eta: "25 min"
    }
  ];
  const handleOrder = (item: string) => {
    setOrdered(item);
    setTimeout(() => setOrdered(null), 2000);
  };
  return (
    <main className="mt-8">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow">🍽️ Today&apos;s Menu</h2>
      {ordered && (
        <div className="mb-6 text-center">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full shadow animate-bounce">
            Order placed for <b>{ordered}</b>!
            {(() => {
              const item = menuItems.find(i => i.name === ordered);
              return item ? ` (ETA: ${item.eta})` : '';
            })()}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((item, idx) => (
          <div key={item.name} className={`bg-gradient-to-br ${idx === 0 ? 'from-blue-50 to-blue-100' : idx === 1 ? 'from-pink-50 to-pink-100' : 'from-yellow-50 to-yellow-100'} rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
            <h3 className={`text-xl font-semibold mb-2 ${idx === 0 ? 'text-blue-900' : idx === 1 ? 'text-pink-900' : 'text-yellow-900'}`}>{item.name}</h3>
            <p className="text-gray-600 mb-2 text-center font-medium">{item.description}</p>
            <p className="text-gray-500 mb-4 text-center text-sm italic">{item.details}</p>
            <span className="mb-4 text-lg font-bold text-gray-800">{item.price}</span>
            <button className={`px-6 py-2 rounded-full font-bold shadow transition text-white ${idx === 0 ? 'bg-blue-600 hover:bg-blue-700' : idx === 1 ? 'bg-pink-600 hover:bg-pink-700' : 'bg-yellow-500 hover:bg-yellow-600'}`} onClick={() => handleOrder(item.name)}>
              Order
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" onClick={() => setActiveTab("features")}>Explore Features</Button>
      </div>
    </main>
  );
}