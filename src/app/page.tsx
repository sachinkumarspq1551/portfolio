import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
} from 'lucide-react';

import { profileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TypingAnimation from '@/components/typing-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
      >
        <div className="md:col-span-2 space-y-6">
          <Badge variant="secondary" className="text-sm">
            {profileData.experience} of Experience
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Hi, I&apos;m {profileData.name}
          </h1>
          <div className="h-10 md:h-16">
            <TypingAnimation keywords={profileData.typingKeywords} />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            {profileData.summary}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg">Hire Me</Button>
            </Link>
            <a href={profileData.resumeUrl} download target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Download className="mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt="Profile Picture"
              width={320}
              height={320}
              data-ai-hint={profileImage.imageHint}
              className="rounded-full object-cover shadow-lg border-4 border-primary/20"
              priority
            />
          )}
          <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
        </div>
      </section>

      <section id="contact-info" className="mt-24 md:mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-2">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <MapPin className="text-primary size-8" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground">{profileData.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary size-8" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href={`mailto:${profileData.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {profileData.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary size-8" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href={`tel:${profileData.phone.replace(/\s/g, '')}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {profileData.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                   className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github />
                </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
