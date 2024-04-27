"use client"

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { RosterTypes } from "@/hooks/useRosterStore"
import { renderPositionImg } from "@/lib/function"
import { PlayerTypes } from "@/types/player-types"
import { Player } from "@prisma/client"
import { Trophy, User } from "lucide-react"

import Image from "next/image"
import React from "react"

interface ProfileCarouselProps {
  setApi: (api: CarouselApi) => void
  players?: Player[]
}

export const ProfileCarousel = ({ setApi, players }: ProfileCarouselProps) => {
  return (
    <Carousel
      setApi={setApi}
      className="w-[50.3%] h-fit  border-2 border-[#1e1e1e] drop-shadow-lg "
    >
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        {players?.map((player) => (
          <CarouselItem
            key={player.id}
            className="flex h-full bg-[#1e1e1e] relative"
          >
            <div className="flex bg-[#191919]">
              <Image src={player.img} width={350} height={350} alt="" />
            </div>
            <div className="px-[23px] py-[12px] space-y-1 relative">
              <h4 className="font-bold text-[48px] text-[#eeeeee]">
                {player.nickname}
              </h4>
              <div className="flex  items-center space-x-2 ">
                <User color="#c4c4c4" className="w-6 h-6 font-bold" />
                <p className="text-[#c4c4c4] text-lg">{player.name}</p>
              </div>
              <div className="flex items-center space-x-[11px] pl-[3px]">
                <Image
                  src="/images/empty_esport_icon.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <p className="text-[#c4c4c4] text-md ">
                  {player.position.toUpperCase()}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 ">
                  <Trophy color="#c4c4c4" className="w-6 h-6 font-bold" />
                  <p className="text-[#c4c4c4] text-md">경력</p>
                </div>
                <div className="pl-[32px] max-h-[240px] overflow-y-auto min-w-[300px]">
                  {player.career.map((career) => (
                    <p className="text-[#555555] text-sm" key={career}>
                      {`●  ${career}`}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5">
              <Image
                src={renderPositionImg(player.position)}
                alt=""
                height={48}
                width={48}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}