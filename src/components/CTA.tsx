import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-glow to-accent p-12 md:p-20 text-center shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of learners and teachers sharing skills every day
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button 
                  size="xl" 
                  variant="secondary"
                  className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
                >
                  Get Started Free
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
