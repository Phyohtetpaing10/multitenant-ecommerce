"use client";

import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";
import { Input } from "../../../../../components/ui/input";
import CategoriesSidebar from "./CategoriesSidebar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useProductFilters } from "@/modules/products/hooks/use-product.filters";

interface Props {
  disabled?: boolean;
}

const SearchInput = ({ disabled }: Props) => {
  const [filters, setFilters] = useProductFilters();
  const [searchValue, setSearchValue] = useState(filters.search);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters({ search: searchValue });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, setFilters]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {isMounted && session.data?.user && (
        <Button asChild variant="elevated">
          <Link prefetch href="/library">
            <BookmarkCheckIcon />
            Library
          </Link>
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
