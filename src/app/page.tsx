import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaLaptopCode, FaTools, FaUser } from "react-icons/fa";
import { SocialLinks } from "@/components/social-links";
import { experiences, skills } from "@/constants";

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-4 py-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/avatar.png" alt="Profile picture" />
          <AvatarFallback>No Image</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Kensuuu
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Software Engineer at Asoview Inc.
        </p>
        <div className="flex gap-2">
          <SocialLinks />
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FaUser className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <Card>
          <CardContent>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={experience.year} className="grid grid-cols-1 md:grid-cols-8 gap-2">
                  <div className="md:col-span-1 text-muted-foreground font-medium">
                    {experience.year}
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-muted-foreground">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FaTools className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle>{skill.name}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FaLaptopCode className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>TBD</CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
