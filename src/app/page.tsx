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

export function ComingSoonPage() {
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

        <Badge
          variant="secondary"
          className="hidden md:flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span>Coming Soon</span>
        </Badge>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <Badge variant="outline" className="mb-4">
              <Bell className="w-4 h-4 mr-2" />
              Something amazing is brewing
            </Badge>

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

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base"
                  required
                />
                <Button type="submit" size="lg" className="h-12 px-8">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex items-center justify-center space-x-3 text-accent">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">
                    {"You're on the list! We'll be in touch soon."}
                  </span>
                </div>
              </Card>
            )}

            <p className="text-sm text-muted-foreground mt-3">
              Join 10,000+ innovators waiting for launch. No spam, ever.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Built for speed with cutting-edge technology that scales with
                your ambitions.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team-First</h3>
              <p className="text-muted-foreground text-sm">
                Designed for seamless collaboration across teams of any size,
                anywhere.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-ready infrastructure that grows with your success
                story.
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 md:p-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Nexus. Building the future, one innovation at a time.
        </p>
      </footer>
    </div>
  );
}
