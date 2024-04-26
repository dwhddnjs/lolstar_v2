"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa"
import { LogOutIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { toast } from "sonner"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useMediaQuery } from "usehooks-ts"
import { cn } from "@/lib/utils"

export const UserButton = () => {
  const user = useUser()
  const { replace, push } = useRouter()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const onLogout = () => {
    signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={cn("", isMobile && "w-7 h-7")}>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-[#555555]">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 bg-[#27272a] border-[#272727]"
        align="end"
      >
        <DropdownMenuItem onClick={onLogout}>
          <LogOutIcon className="h-4 w-4 mr-2 text-[#eeeeee]" />
          <Link
            href="/roster"
            className="text-[#eeeeee] font-semibold cursor-pointer"
          >
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
