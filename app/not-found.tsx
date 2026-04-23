import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#f3eee7]">
      <Container className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl rounded-4xl border border-[#d9d0c5] bg-white p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7d7468]">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1f1b18] sm:text-5xl">
            This page could not be found
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#544c43]">
            The page you are looking for may have moved, been renamed, or no longer exists.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/en">
              <Button variant="dark">Back to Home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
