import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-4 py-20">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/avatar.jpg" alt="Profile picture" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Your Name
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4">
          <Button>Contact Me</Button>
          <Button variant="outline">View Projects</Button>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Write your introduction here. Describe your background, interests, and what drives you as a developer.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>Technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>Technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Node.js</li>
                <li>Python</li>
                <li>Databases</li>
                <li>APIs</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>Development tools I use</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Git</li>
                <li>Docker</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>Brief description of the project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed description of the project, technologies used, and your role.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>Brief description of the project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed description of the project, technologies used, and your role.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
