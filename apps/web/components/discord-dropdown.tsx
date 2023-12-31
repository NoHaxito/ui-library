"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@sihaxito/deluxe-ui";
import {
  ArrowArcLeft,
  Command,
  Confetti,
  Copy,
  PencilSimple,
  PushPin,
  Smiley,
  Trash,
} from "@phosphor-icons/react";

export function DiscordDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md bg-neutral-100 px-3 py-1 text-sm transition-all duration-300 hover:bg-neutral-200 active:scale-[.97] dark:bg-neutral-900 dark:hover:bg-neutral-800">
        Open discord menu
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="grid-cols-subgrid grid w-56 grid-cols-1"
        side="bottom"
      >
        <div className="my-2 flex items-center justify-center gap-2">
          <TooltipProvider delayDuration={0.9}>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  😂
                </div>
              </TooltipTrigger>
              <TooltipContent>:joy:</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  😍
                </div>
              </TooltipTrigger>
              <TooltipContent>:heart_eyes:</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  👀
                </div>
              </TooltipTrigger>
              <TooltipContent>:eyes:</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                  ⚽️
                </div>
              </TooltipTrigger>
              <TooltipContent>:soccer:</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Confetti size={16} weight="fill" />
            Agregar reacción
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="ml-1">
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">😂</span>
              joy
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">😍</span>
              heart_eyes
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">👀</span>
              eyes
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">⚽️</span>
              soccer_ball
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">😎</span>
              sunglasses
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">🥵</span>
              hot_face
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">😈</span>
              smiling_imp
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-[16px] w-[16px]">🤡</span>
              clown
            </DropdownMenuItem>
            <hr className="my-1 h-px border-0 bg-neutral-200 dark:bg-neutral-800" />
            <DropdownMenuItem>
              <Smiley size={16} weight="fill" />
              Ver más
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <PencilSimple size={16} weight="fill" />
          Editar mensaje
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PushPin size={16} weight="fill" />
          Fijar mensaje
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowArcLeft size={16} weight="fill" />
          Responder
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy size={16} weight="fill" />
          Copiar texto
        </DropdownMenuItem>
        <hr className="my-1 h-px border-0 bg-neutral-200 dark:bg-neutral-800" />
        <DropdownMenuItem variant="danger">
          <Trash size={16} weight="fill" />
          Eliminar mensaje
          <DropdownMenuItemShortcut className="group-hover:text-neutral-300">
            <Command size={16} />
            Supr
          </DropdownMenuItemShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
