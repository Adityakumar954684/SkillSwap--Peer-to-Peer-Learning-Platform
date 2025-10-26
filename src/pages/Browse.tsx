import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const skillsData = [
  {
    id: 1,
    teacher: "Sarah Johnson",
    skill: "Web Development",
    category: "Technology",
    rating: 4.9,
    sessions: 45,
    description: "Full-stack development with React and Node.js",
  },
  {
    id: 2,
    teacher: "Mike Chen",
    skill: "Graphic Design",
    category: "Design",
    rating: 4.8,
    sessions: 32,
    description: "Adobe Creative Suite, UI/UX design principles",
  },
  {
    id: 3,
    teacher: "Emily Rodriguez",
    skill: "Spanish Language",
    category: "Languages",
    rating: 5.0,
    sessions: 67,
    description: "Conversational Spanish and grammar basics",
  },
  {
    id: 4,
    teacher: "David Kim",
    skill: "Data Science",
    category: "Technology",
    rating: 4.7,
    sessions: 28,
    description: "Python, Machine Learning, Data Analysis",
  },
  {
    id: 5,
    teacher: "Lisa Anderson",
    skill: "Photography",
    category: "Creative",
    rating: 4.9,
    sessions: 41,
    description: "Portrait and landscape photography techniques",
  },
  {
    id: 6,
    teacher: "James Wilson",
    skill: "Guitar Lessons",
    category: "Music",
    rating: 4.8,
    sessions: 53,
    description: "Acoustic and electric guitar for beginners",
  },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsData.filter(
    (skill) =>
      skill.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Available Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover talented teachers and exciting skills to learn
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search skills, teachers, or categories..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                          {skill.teacher
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{skill.teacher}</p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-medium">{skill.rating}</span>
                          <span className="text-muted-foreground">({skill.sessions} sessions)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{skill.skill}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{skill.category}</Badge>
                    <Button variant="default" size="sm">Connect</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No skills found matching your search</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
