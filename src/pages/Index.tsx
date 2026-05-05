import { Button } from "@/components/ui/button";
import { Shield, Zap, HandshakeIcon } from "lucide-react";
import heroMockup from "@/assets/visily-taskhub-map-dashboard.jpg";
import matchImg from "@/assets/visily-warehouse-helper-job-details.jpg";
import verifyImg from "@/assets/visily-mid-shift-dashboard.jpg";
import withdrawImg from "@/assets/visily-walletflow-transaction-dashboard.jpg";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black">A</div>
          <span className="font-bold text-xl tracking-tight">Ant App</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#" className="hover:text-foreground">Sign in</a>
        </nav>
      </header>

      <section className="container grid lg:grid-cols-2 gap-12 items-center pt-10 pb-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold">
            <Zap className="h-3.5 w-3.5" /> Trusted by 5,000+ local shops
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Hyperlocal Labor.<br />
            <span className="text-primary">Guaranteed Pay.</span><br />
            Instant Handshakes.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            The secure marketplace connecting local shops with verified help. No no-shows, no payment chasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              I want to Hire
            </Button>
            <Button size="lg" className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
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
          <img
            src={heroMockup}
            alt="Ant App task hub map dashboard on iPhone"
            width={1024}
            height={1280}
            className="relative max-h-[640px] w-auto object-contain drop-shadow-2xl"
          />
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
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-background/5 mb-6 flex items-center justify-center">
                  <img
                    src={s.img}
                    alt={`${s.title} step`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base text-background/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
