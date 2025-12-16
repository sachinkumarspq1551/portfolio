'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // Here you would typically send this data to a database like Firestore,
  // or use a service like Resend to send an email.
  // For now, we'll just log it to the console.
  console.log('New contact form submission:');
  console.log(parsed.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Form submitted successfully!' };
}
