import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTenantUrl(tenantSlug: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}/tenants/${tenantSlug}`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
