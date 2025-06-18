"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRules } from "@/store/ruleSlice";
import type { RootState, AppDispatch } from "@/store";
import { Loader } from "lucide-react";

const RiskTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.rule
  );

  const { data = [], message } = items;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchRules());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="h-10 w-10 animate-spin text-blue-500" />
        </div>
      ) : (
        <>
          <Table className="text-base">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold w-[40px] whitespace-nowrap md:whitespace-normal">
                  No
                </TableHead>
                <TableHead className="font-bold whitespace-nowrap md:whitespace-normal">
                  Kode KBLI
                </TableHead>
                <TableHead className="font-bold whitespace-nowrap md:whitespace-normal">
                  KBLI
                </TableHead>
                <TableHead className="font-bold text-left w-[800px] whitespace-nowrap md:whitespace-normal">
                  Deskripsi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium whitespace-nowrap md:whitespace-normal">
                    {item.no}
                  </TableCell>
                  <TableCell className="whitespace-nowrap md:whitespace-normal">
                    {item.ruleCode}
                  </TableCell>
                  <TableCell className="whitespace-nowrap md:whitespace-normal">
                    {item.rule}
                  </TableCell>
                  <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Pagination className="mt-10">
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  return (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  );
                })
                .reduce((acc: (number | "...")[], page, index, arr) => {
                  if (index === 0 || page === arr[index - 1] + 1) {
                    acc.push(page);
                  } else {
                    acc.push("...");
                    acc.push(page);
                  }
                  return acc;
                }, [])
                .map((page, index) => (
                  <PaginationItem key={index}>
                    {page === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href=""
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </>
  );
};

export default RiskTable;
