import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="max-w-xl">
        <h1 className="text-3xl font-extrabold tracking-tight">Page introuvable</h1>
        <p className="mt-3 text-muted-foreground">
          La page que vous cherchez n’existe pas. Retournez à l’accueil.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/fr">Retour à l’accueil</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
