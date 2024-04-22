import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex items-center flex-col justify-center space-y-3">
      <h2 className="text-3xl">Sorry, we could not find that page.</h2>
      <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/">
        {" "}
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
