"use client";
import { Badge } from "@/components/badge";
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
} from "@deluxe/ui";
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
            <div className="dark:bg-black bg-white px-2 py-0.5 rounded-lg text-xs text-black dark:text-white">
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
            <div className="dark:bg-black bg-white px-2 py-0.5 rounded-lg text-xs text-black dark:text-white">
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
      <div className="w-52 rounded-lg overflow-hidden">
        <div className="h-1.5 w-full bg-deluxe-200 dark:bg-deluxe-800 group overflow-hidden">
          <div className="animate-indeterminated-progress duration-1000 origin-[0%_50%] w-full h-full bg-blue-500"></div>
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
            <DialogClose className="absolute top-4 right-4" />
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
              className="text-neutral-500 dark:text-neutral-300 w-full border focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700 bg-transparent transition-[border] duration-300 px-3 py-1 text-sm border-deluxe-200 dark:border-deluxe-900 rounded-deluxe"
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
      <Button className="animate-in zoom-in-0 duration-500 fixed bottom-6 right-6 h-10 w-10" size="icon">
        <Plus className="h-6 w-6" />
      </Button>
    </main>
  );
}
