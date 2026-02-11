import { Button } from "@/components/ui/button";
import Link from "next/link";

export const StripeVerify = () => {
  return (
    <Link href="/stripe-verify">
      <Button>Verify Stripe Account</Button>
    </Link>
  );
};
