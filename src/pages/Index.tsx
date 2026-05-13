import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import heroMockup from "@/assets/visily-taskhub-map-dashboard.jpg";
import matchImg from "@/assets/visily-warehouse-helper-job-details.jpg";
import verifyImg from "@/assets/visily-mid-shift-dashboard.jpg";
import withdrawImg from "@/assets/visily-walletflow-transaction-dashboard.jpg";
import ownerImg from "@/assets/visily-acme-corp.-user-list.jpg";
import { Check } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";
import {
  Shield,
  Zap,
  HandshakeIcon,
  KeyRound,
  MapPin,
  LayoutDashboard,
  Star,
  Wallet,
  ShieldAlert,
  MessageCircle,
  BellRing,
} from "lucide-react";

// Replace with your real Google Form formResponse URL
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSc7C91XTEzNCPFVyqs7gQwrghgnVlGIvuwA2HmDT1xAJuktnw/formResponse";

const steps = [
  {
    n: "01",
    title: "Match",
    img: matchImg,
    text: "Find verified local work or workers on our real-time map.",
  },
  {
    n: "02",
    title: "Verify",
    img: verifyImg,
    text: "Start and Finish jobs with GPS-locked security codes. No work, no pay. No pay, no work.",
  },
  {
    n: "03",
    title: "Withdraw",
    img: withdrawImg,
    text: "Funds are held in Escrow and released instantly to your UPI the moment the job ends.",
  },
];

const Index = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pincode: "",
    role: "Shopowner",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formBody = new FormData();

    formBody.append("entry.1343791499", formData.name);
    formBody.append("entry.1776311289", formData.email);
    formBody.append("entry.955112658", formData.pincode);
    formBody.append("entry.997473331", formData.role);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      alert("Successfully joined the waitlist!");

      setFormData({
        name: "",
        email: "",
        pincode: "",
        role: "Shopowner",
      });
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  const [role, setRole] = useState<"shopowner" | "worker">("worker");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get("role");
    if (r === "shopowner" || r === "worker") setRole(r);
  }, []);

  const scrollToForm = (selectedRole: "shopowner" | "worker") => {
    setRole(selectedRole);
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black">A</div>
            <span className="font-bold text-xl tracking-tight">Ant</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#owners" className="hover:text-foreground transition">For Business</a>
            <a href="#waitlist" className="hover:text-foreground transition">Waitlist</a>
          </nav>
          <Button
            onClick={() => scrollToForm("shopowner")}
            className="h-10 px-5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
          >
            Get Early Access
          </Button>
        </div>
      </header>

      <section className="container grid lg:grid-cols-2 gap-12 items-center pt-10 pb-24">
        <div className="space-y-8">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold">
            <Zap className="h-3.5 w-3.5" /> Trusted by 5,000+ local shops
          </div> */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Hyperlocal Labor.<br />
            <span className="text-primary">Guaranteed Pay.</span><br />
            Instant Handshakes.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            The secure marketplace connecting local shops with verified help. No no-shows, no payment chasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button onClick={() => scrollToForm("shopowner")} variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              I want to Hire
            </Button>
            <Button onClick={() => scrollToForm("worker")} size="lg" className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              I want to Earn
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Verified workers</div>
            <div className="flex items-center gap-2"><HandshakeIcon className="h-4 w-4 text-primary" /> Escrow payments</div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <PhoneFrame className="relative">
            <img
              src={heroMockup}
              alt="Ant App task hub map dashboard"
              width={1024}
              height={1280}
              className="h-full w-full object-contain"
            />
          </PhoneFrame>
        </div>
      </section>

      <section id="how" className="bg-foreground text-background py-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary px-4 py-1.5 text-xs font-semibold mb-6">
              <Shield className="h-3.5 w-3.5" /> Built on trust
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              The Only Platform with <span className="text-primary">Hard-Coded Trust.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="group relative rounded-3xl bg-background/5 border border-background/10 p-8 hover:border-primary/50 transition">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-primary font-bold">{s.n}</span>
                  <span className="h-px flex-1 mx-4 bg-background/10" />
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <div className="mb-6 py-4">
                  <PhoneFrame>
                    <img
                      src={s.img}
                      alt={`${s.title} step`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </PhoneFrame>
                </div>
                <p className="text-base text-background/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="container py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold mb-6">
            <Zap className="h-3.5 w-3.5" /> Platform features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Everything you need to <span className="text-primary">trade labor with trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(220px,auto)] gap-4">
          {/* Tile 1 — Core USP, 2x2 */}
          <div className="md:col-span-2 lg:row-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <KeyRound className="h-5 w-5" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              The Escrow-and-Code Architecture
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Funds are secured in escrow before you start. Payments are released instantly with a 4-digit digital handshake.
            </p>
            <div className="mt-auto rounded-xl bg-primary/5 border border-primary/20 p-6 flex flex-col items-center justify-center gap-4">
              <span className="text-xs font-semibold tracking-widest text-primary">FINISH CODE</span>
              <div className="flex gap-3">
                {["7", "2", "9", "4"].map((d, i) => (
                  <div
                    key={i}
                    className="h-14 w-12 md:h-16 md:w-14 rounded-xl bg-background border-2 border-primary/40 flex items-center justify-center text-2xl md:text-3xl font-black text-primary shadow-sm"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-primary" /> Escrow secured · Released instantly
              </div>
            </div>
          </div>

          {/* Tile 2 — Map Discovery, 2x1 */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Real-Time Map Discovery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Find Gigs (Orange Pins) or Shifts (Blue Pins) filtered by your expertise like Sales, Cleaning, or Delivery.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">● Gigs</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600">● Shifts</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">Sales</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">Cleaning</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">Delivery</span>
            </div>
          </div>

          {/* Tile 3 — Command Center, 2x1 */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Hiring Command Center</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage multiple workers from one dashboard. Track attendance, timers, and release payments for your entire team simultaneously.
              </p>
            </div>
          </div>

          {/* Tile 4 — Reputation, 1x1 */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Star className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-2">Ant Reputation Algorithm</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A 0.0–5.0 scoring system based on punctuality and completion to ensure you only work with the best.
            </p>
            <div className="mt-4 flex items-center gap-1 text-primary">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4" />
              <span className="ml-2 text-sm font-bold text-foreground">4.0</span>
            </div>
          </div>

          {/* Tile 5 — Live Earnings, 1x1 */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Wallet className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-2">Live Earnings</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Watch your earnings grow in real-time with our Live Earnings Dashboard and instant UPI withdrawals.
            </p>
            <div className="mt-4 text-2xl font-black text-primary">
              ₹2,480<span className="text-xs text-muted-foreground font-medium ml-2">today</span>
            </div>
          </div>

          {/* Tile 6 — Safety, 2x1 */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Built-in Safety Guardrails</h3>
            <p className="text-muted-foreground leading-relaxed">
              GPS drift or dead phones? Our Evidence Portal and Manual Overrides keep the platform fair even when tech fails.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Evidence Portal</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Manual Override</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Prorated Payout</span>
            </div>
          </div>

          {/* Tile 7 — Chat, 1x1 */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-2">Ephemeral Chat</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Secure messaging that unlocks only when a match is made, keeping your privacy protected.
            </p>
          </div>

          {/* Tile 8 — Alerts, 1x1 */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <BellRing className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-2">Automated Alerts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proximity alerts, escrow reminders, and punctuality warnings to keep the handshake success rate at 90%.
            </p>
            <div className="mt-4 text-xs font-bold text-primary">90% success rate</div>
          </div>
        </div>
      </section>

      <section id="owners" className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold">
              For Business Owners
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Staff Your Shop in <span className="text-primary">60 Seconds.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Manage 1 or 50 workers from a single dashboard. Track live attendance, active timers, and release payments with a single click. Stop managing WhatsApp groups and start managing your business.
            </p>
            <ul className="space-y-3">
              {[
                "Live attendance & GPS check-ins",
                "One-click payment release",
                "Verified worker pool, no more no-shows",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-medium">
                  <span className="h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollToForm("shopowner")} size="lg" className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              Start Hiring Now
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* glow effect */}
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />

            {/* phone frame */}
            <PhoneFrame className="relative z-10">
              <img
                src={ownerImg}
                alt="Business owner dashboard with worker list and live timers"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section id="waitlist" className="container py-24">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold mb-6">
              <Zap className="h-3.5 w-3.5" /> Early access
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Join the <span className="text-primary">Waitlist.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Be the first to access Ant App in your neighbourhood.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="entry.1343791499"
                required
                maxLength={100}
                placeholder="Your full name"
                className="h-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="entry.1776311289"
                type="email"
                required
                maxLength={255}
                placeholder="you@example.com"
                className="h-12"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode <span className="text-muted-foreground font-normal">(for demand tracking)</span></Label>
              <Input
                id="pincode"
                name="entry.955112658"
                required
                pattern="[0-9]{6}"
                maxLength={6}
                inputMode="numeric"
                placeholder="560001"
                className="h-12"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
            <div className="space-y-3">
              <Label>I am a:</Label>
              <RadioGroup
                name="entry.997473331"
                value={formData.role}
                onValueChange={(v) => setFormData({ ...formData, role: v})}
                className="grid grid-cols-2 gap-3"
              >
                <Label
                  htmlFor="role-shopowner"
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 cursor-pointer transition ${
                    formData.role === "Shopowner" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                  }`}
                >
                  <RadioGroupItem value="Shopowner" id="role-shopowner" />
                  <span className="font-semibold">Shopowner</span>
                </Label>
                <Label
                  htmlFor="role-worker"
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 cursor-pointer transition ${
                    formData.role === "Worker" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                  }`}
                >
                  <RadioGroupItem value="Worker" id="role-worker" />
                  <span className="font-semibold">Worker</span>
                </Label>
              </RadioGroup>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
              Join the Waitlist
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By joining you agree to receive updates about Ant App.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-background mt-12">
        <div className="container py-12 grid gap-8 md:grid-cols-3 items-center">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black">A</div>
            <span className="font-bold text-xl tracking-tight">Ant</span>
          </div>
          <p className="text-center text-sm text-background/70">
            🚀 Launching soon in local market clusters
          </p>
          <nav className="flex md:justify-end gap-6 text-sm text-background/70">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </nav>
        </div>
        <div className="border-t border-background/10">
          <div className="container py-4 text-xs text-background/50 text-center">
            © {new Date().getFullYear()} Ant App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
