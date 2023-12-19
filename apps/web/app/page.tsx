"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Switch,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemShortcut,
} from "@sihaxito/deluxe-ui";
import { useSidebarContext } from "../components/sidebar-context";
import {
  ArrowArcLeft,
  Command,
  Confetti,
  Copy,
  PencilSimple,
  PushPin,
  Trash,
} from "@phosphor-icons/react";

export default function Home() {
  const { context } = useSidebarContext();
  return (
    <main className="relative text-neutral-400 p-6  lg:p-8">
      <div className="py-2 flex flex-wrap items-center gap-2">
        <button
          onClick={() => context.setOverlay(!context.overlay)}
          className="flex items-center gap-2 justify-center px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
        >
          Toggle overlay
        </button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => context.setCollapsed(!context.collapsed)}
                className="flex items-center gap-2 justify-center px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
              >
                Toggle Collapse
              </button>
            </TooltipTrigger>
            <TooltipContent>Collapse sidebar :0</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <section className="space-y-1">
        <div className="relative w-max">
          <input
            className="text-sm h-10 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800"
            placeholder="Input example"
          />
        </div>
        <div className="relative w-max">
          <input
            type="password"
            className="text-sm h-10 pr-7 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800"
            placeholder="Input example"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="absolute inset-y-0 right-0 justify-center flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                  </svg>
                </button>
              </TooltipTrigger>
              <TooltipContent>Show password</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Switch />
      </section>
      <section className="space-y-1">
        <DropdownMenu>
          <DropdownMenuTrigger className="transition-all duration-300 text-sm px-3 py-1 active:scale-[.97] bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:bg-neutral-900 rounded-md">
            Open menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side="bottom" align="start">
            <div className="py-1.5 flex items-center justify-center gap-2">
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                😂
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                😍
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                👀
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                ⚽️
              </div>
            </div>
            <DropdownMenuItem>
              <Confetti size={16} weight="fill" />
              Agregar reaccion
            </DropdownMenuItem>
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
            <hr className="my-1 border-0 bg-neutral-200 h-px dark:bg-neutral-800" />
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
      </section>
    </main>
  );
}
