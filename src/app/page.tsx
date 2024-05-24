'use client';
import ICons from '@/components/Icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getUsers } from '@/utils/users';
import Link from 'next/link';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';

export default function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const sort = searchParams?.sort || 'id';
  const dir = searchParams?.dir || 'asc';
  const opositDir = dir == 'desc' ? 'asc' : 'desc';

  const records = getUsers(sort, dir);

  const getSortLink = (sort: string, dir: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    params.set('dir', dir);

    return `/?${params.toString()}`;
  };

  const iconList = <ICons id="list" />;

  const icon = dir === 'desc' ? <ICons id="listDown" /> : <ICons id="listUp" />;

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(7);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <main className="w-full max-w-4xl mx-auto space-y-4 py-10">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Link
                className="flex items-center gap-1"
                href={getSortLink('id', opositDir)}
              >
                ID
                {sort == 'id' ? icon : iconList}
              </Link>
            </TableHead>
            <TableHead>
              <Link
                className="flex items-center gap-1"
                href={getSortLink('name', opositDir)}
              >
                Name
                {sort == 'name' ? icon : iconList}
              </Link>
            </TableHead>
            <TableHead>
              <Link
                className="flex items-center gap-1"
                href={getSortLink('email', opositDir)}
              >
                Email
                {sort == 'email' ? icon : iconList}
              </Link>
            </TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.slice(first, first + rows).map((users, index) => (
            <TableRow>
              <TableCell className="font-medium truncate max-w-[150px]">{users.id}</TableCell>
              <TableCell>{users.name}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Paginator
        first={first}
        rows={rows}
        totalRecords={records.length}
        onPageChange={onPageChange}
      />
    </main>
  );
}
