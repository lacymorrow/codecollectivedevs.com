import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - Code Collective',
  description: 'Explore our case studies to see how we help businesses achieve their goals with modern web technologies.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 