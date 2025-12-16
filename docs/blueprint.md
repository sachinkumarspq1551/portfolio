# **App Name**: AngularFolio

## Core Features:

- Profile Display: Fetch and display the developer's profile information from Firestore, including name, location, contact details, summary, and a link to download their resume.
- Animated Typing Headline: Dynamically generate a typing animation for the headline to engage visitors.
- Skills Showcase: Retrieve skills data from Firestore and display them as animated skill cards or progress bars, categorized by language, framework, tools, cloud services, and databases.
- Dynamic Project Portfolio: Fetch project data from Firestore and showcase projects in a dynamic list with details like project name, tech stack, description, role, status, and links to GitHub or live demos.
- Resume Integration: Embed a resume PDF viewer on the resume page, with a prominent button to download the resume directly from Firebase Storage.
- Contact Form Submission: Implement a contact form that stores submissions directly into a Firestore collection for easy management.
- Content Updater Tool: A tool to generate UI content for display. This will allow users to easily update content on Firestore without needing to redeploy the application, enhancing maintainability.

## Style Guidelines:

- Dark background (#121212) for a modern, tech-focused feel, switching to light mode automatically or via user selection.
- Primary color: Deep blue (#3F51B5) to evoke professionalism and reliability.
- Accent color: Electric purple (#D031EF) for highlighting interactive elements and CTAs.
- Body and headline font: 'Inter' sans-serif for a modern, neutral aesthetic.
- Note: currently only Google Fonts are supported.
- Mobile-first design approach to ensure responsiveness across all devices. Sticky navbar for easy navigation. Hero section with a prominent 'Hire Me' CTA.
- Subtle scroll animations to create a smooth and engaging user experience. Animated skill cards/progress bars on the skills page.
- Minimalist, professional icons for skills and projects to enhance visual appeal without overwhelming the user.