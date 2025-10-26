import { Users, MessageCircle, Calendar, Star, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Connect with Peers",
    description: "Find and connect with skilled individuals who share your learning interests.",
    color: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Communicate seamlessly with your learning partners through our chat system.",
    color: "text-accent",
  },
  {
    icon: Calendar,
    title: "Schedule Sessions",
    description: "Easily schedule and manage your learning sessions with integrated calendar.",
    color: "text-primary",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Build trust with ratings and reviews from the learning community.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data and interactions are protected with enterprise-grade security.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Quick Matching",
    description: "Our smart algorithm connects you with the perfect learning partners instantly.",
    color: "text-accent",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SkillSwap provides all the tools you need for effective peer-to-peer learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
