import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <Image
        className="size-32 rounded-full object-cover ring-4 ring-foreground/10"
        src="/profile.jpg"
        alt="Omar Antar"
        width={128}
        height={128}
        priority
      />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Omar Antar
      </h1>
      <p className="max-w-md text-lg text-foreground/70">
        Portfolio v2 is under construction — built with Next.js and Tailwind
        CSS.
      </p>
    </main>
  );
}
