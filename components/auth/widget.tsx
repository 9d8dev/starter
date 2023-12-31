import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignOut from "./signout";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function AccountWidget() {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <div className="flex items-center justify-between py-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="inline-flex w-full items-center py-2 p-2">
            <span className="text-left text-xs">{session?.user?.email}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="w-fit text-xs">
            {session.user?.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <SignOut>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </SignOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
