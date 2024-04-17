import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex items-center flex-col justify-center space-y-3">
      <h2 className="text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        {" "}
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
