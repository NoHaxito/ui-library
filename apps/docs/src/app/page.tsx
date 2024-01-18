"use client";
import { Badge } from "@/components/badge";
import { cn } from "@/lib/utils";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@deluxe/ui";
import { Copy, Download, Printer, Share } from "@phosphor-icons/react";
import {
  Bell,
  CaretRight,
  Gear,
  House,
  List,
  Trash,
  User,
  Plus,
  Question,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="space-y-2 py-4">
      <div className="flex items-center gap-2">
        <Button left={<House />} size="sm">
          Home
        </Button>
        <Button variant="danger" left={<Trash />} size="sm">
          Danger button
        </Button>
        <Button
          left={<Bell />}
          right={
            <div className="rounded-lg bg-white px-2 py-0.5 text-xs text-black dark:bg-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" left={<House />} size="sm">
          Home
        </Button>
        <Button
          variant="outline"
          left={<Bell />}
          right={
            <div className="rounded-lg bg-white px-2 py-0.5 text-xs text-black dark:bg-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon">
          <House />
        </Button>
        <Button variant="outline" size="icon">
          <Bell />
        </Button>
      </div>
      <div className="w-52 overflow-hidden rounded-lg">
        <div className="bg-deluxe-200 dark:bg-deluxe-800 group h-1.5 w-full overflow-hidden">
          <div className="animate-indeterminated-progress h-full w-full origin-[0%_50%] bg-blue-500 duration-1000"></div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu modal>
          <DropdownMenuTrigger asChild>
            <Button left={<List />} size="sm">
              Open menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem icon={<User weight="fill" />}>
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              rightIcon={<Badge>New</Badge>}
              icon={<Gear weight="fill" />}
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem icon={<Question weight="fill" />} shortcut={"F1"}>
              Support
            </DropdownMenuItem>
            <DropdownMenuItem
              icon={<Trash weight="fill" />}
              shortcut={"⌘D"}
              variant="danger"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="dark:text-white">Hello, World!</p>
          </PopoverContent>
        </Popover>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open dialog</Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogClose className="absolute right-4 top-4" />
            <DialogHeader>
              <DialogTitle>Get Started</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                maxime, debitis officiis.
              </DialogDescription>
            </DialogHeader>
            <input
              defaultValue={"npm install @deluxe/ui"}
              readOnly
              className="focus:border-deluxe-300 dark:focus:border-deluxe-700 border-deluxe-200 dark:border-deluxe-900 rounded-deluxe w-full border bg-transparent px-3 py-1 text-sm text-neutral-500 transition-[border] duration-300 focus:outline-none dark:text-neutral-300"
            />
            <DialogFooter>
              <Button size="sm">See documentation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat
      qui vel quibusdam alias cumque, amet impedit consequatur repellat
      perferendis, voluptate doloribus. Optio numquam doloremque perspiciatis
      sapiente. Autem, quasi inventore. Praesentium, doloribus, accusantium nisi
      quia, velit porro laboriosam suscipit aspernatur eius recusandae magni
      placeat voluptas? Sit incidunt mollitia atque, facilis voluptas minus
      culpa doloremque, sunt aspernatur ad voluptates non eum. Nobis optio
      accusantium, cupiditate doloremque eos officia debitis nemo atque
      doloribus. Repellat, illum harum, soluta ipsam temporibus impedit laborum
      perspiciatis alias blanditiis neque iusto aliquam cumque reprehenderit nam
      officiis ut! Quia necessitatibus sunt ut quae atque autem, dignissimos,
      odit eius nobis corrupti pariatur a officiis, dolore aspernatur. Maiores
      vero excepturi vitae voluptate aliquam consectetur nam cum harum dolores
      a? Aut. Fuga tempore maiores sapiente! Impedit ab doloremque voluptatem
      deleniti error consequuntur in quis deserunt nostrum nisi perspiciatis
      ratione iure officia quaerat est sit quibusdam explicabo, iste dolores a
      tempora iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Natus consectetur, esse ipsa eveniet sint molestiae beatae ea ullam
      similique incidunt excepturi id exercitationem ut harum eaque ratione
      doloremque tenetur. Facilis. Ex explicabo, tenetur ab quod recusandae
      blanditiis corrupti quaerat sequi rem repellat et vero nulla similique
      error corporis voluptatem eum ipsa illum fugit a asperiores non neque, eos
      expedita? Magni. Placeat neque incidunt possimus asperiores assumenda
      omnis repellat suscipit consequatur, quia unde dolores earum mollitia
      nulla doloribus obcaecati aliquam in nisi a, velit nam. Eveniet neque
      optio architecto beatae reiciendis? Debitis accusamus praesentium aut iure
      iste voluptates ut veritatis in sequi. Inventore ducimus tempore quo quae,
      at ad tempora perspiciatis labore, nemo ipsum distinctio maxime iusto
      officia libero cumque nesciunt. Facere atque placeat perferendis illum
      cumque animi eos enim eveniet voluptas obcaecati saepe commodi iusto hic
      voluptatem, omnis ratione tempora unde. Pariatur perspiciatis illum
      explicabo repellendus eum modi commodi id.
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "animate-in fade-in-0 zoom-in-0 group fixed bottom-6 right-6 h-12 w-12",
            )}
            size="icon"
          >
            <Plus className="tranform h-6 w-6 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          side="top"
          align="center"
          className="group mb-2 flex min-w-[48px] max-w-[48px] flex-col items-center justify-center gap-y-2 !bg-transparent p-0"
        >
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in duration-1000 group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-11 w-11 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Share className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Share</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in duration-1000 group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-11 w-11 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Printer className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Print</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in duration-1000 group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-11 w-11 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Download</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in duration-1000 group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-11 w-11 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Copy</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverContent>
      </Popover>
    </main>
  );
}
