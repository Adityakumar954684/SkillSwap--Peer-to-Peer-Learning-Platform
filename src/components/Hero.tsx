import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Users, BookOpen, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              🎓 Peer-to-Peer Learning Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn Skills,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Share Knowledge
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Connect with peers to teach and learn skills together. From coding to cooking, 
              find your next learning partner on SkillSwap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Learning
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              {/* <Link to="/browse">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Browse Skills
                </Button>
              </Link> */}
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="text-primary" />
                <div>
                  <p className="font-bold text-2xl">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Learners</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-accent" />
                <div>
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-sm text-muted-foreground">Skills</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-accent" />
                <div>
                  <p className="font-bold text-2xl">4.9</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="People learning and teaching skills together"
              className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
