import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          My Resume
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          Here is my professional resume. Feel free to download a copy.
        </p>
        <div className="mt-6">
          <a
            href={profileData.resumeUrl}
            download="Sachin_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="relative h-0" style={{ paddingTop: '141.42%' /* A4 Aspect Ratio */ }}>
          <iframe
            src={profileData.resumeUrl}
            title="Sachin Kumar's Resume"
            className="absolute top-0 left-0 w-full h-full border-2 border-border rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
