import { UserPlus, Search, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and list the skills you can teach and want to learn",
    step: 1,
  },
  {
    icon: Search,
    title: "Find Learning Partners",
    description: "Search for users with skills you want to learn or who want to learn from you",
    step: 2,
  },
  {
    icon: Calendar,
    title: "Schedule Sessions",
    description: "Connect via chat and schedule convenient learning sessions",
    step: 3,
  },
  {
    icon: Star,
    title: "Learn & Rate",
    description: "Complete sessions, share knowledge, and rate your experience",
    step: 4,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with SkillSwap in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent -translate-x-1/2 -z-10"></div>
              )}
              
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-[var(--shadow-glow)]">
                    <step.icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
