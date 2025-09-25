"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Bell,
  Sparkles,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <header className="w-full p-6 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="max-w-7xl mx-auto">
            <Image
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1758815196/Screenshot_2025-08-09_at_10.17.00_PM-removebg-preview_hzizkf.png"
              alt="Logo"
              width={160}
              height={48}
              // className="h-12 w-auto"
              priority
            />
          </div>
        </header>

      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
          

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              The future of
              <span className="text-accent block mt-2">digital innovation</span>
              starts here
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              We're crafting an extraordinary platform that will revolutionize
              how teams collaborate, create, and scale their ideas.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 md:p-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Webmasterbee. Building the future, one innovation at a time.
        </p>
      </footer>
    </div>
  );
}
