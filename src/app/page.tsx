import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaLaptopCode, FaTools, FaUser } from "react-icons/fa";
import { SocialLinks } from "@/components/social-links";

const career = [
  {
    year: "2019",
    title: "Graduated from Ritsumeikan University",
    description: "Earned a Bachelor's degree in Computer Science."
  },
  {
    year: "2020",
    title: "Software Engineer at Axross Co., Ltd.",
    description: "Worked on various software development projects."
  },
  {
    year: "2022",
    title: "Software Engineer at Asoview Inc.",
    description: "Developed and maintained both web and mobile applications."
  }
];

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
              {career.map((item) => (
                <div key={item.year} className="grid grid-cols-1 md:grid-cols-8 gap-2">
                  <div className="md:col-span-1 text-muted-foreground font-medium">
                    {item.year}
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>Web technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>Server-side technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Spring Boot / Spring Webflux</li>
                <li>Java</li>
                <li>gRPC</li>
                <li>MySQL / PostgreSQL</li>
                <li>Elasticsearch</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mobile Development</CardTitle>
              <CardDescription>Android development stack</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Android</li>
                <li>Jetpack Compose</li>
                <li>Kotlin</li>
                <li>Firebase</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools & Infrastructure</CardTitle>
              <CardDescription>Development and monitoring tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Git</li>
                <li>CircleCI</li>
                <li>DataDog</li>
                <li>Google Analytics</li>
                <li>Figma</li>
                <li>IntelliJ IDEA / Android Studio</li>
              </ul>
            </CardContent>
          </Card>
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
