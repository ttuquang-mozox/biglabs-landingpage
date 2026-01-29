import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insight Stories",
};

export default function OurStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
