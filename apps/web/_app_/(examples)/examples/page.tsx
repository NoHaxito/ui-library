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
} from "@sihaxito/deluxe-ui";
import {
  CreditCard,
  Gear,
  GithubLogo,
  Keyboard,
  Plus,
  Question,
  SignOut,
  User,
  UserPlus,
  Users,
} from "@phosphor-icons/react";
import { DiscordDropdownMenu } from "@/components/discord-dropdown";

export default function Home() {
  return (
    <main className="relative space-y-4 p-6 text-neutral-400 lg:p-8">
      <section className="space-x-2 space-y-1">
        <DiscordDropdownMenu />
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md bg-neutral-100 px-3 py-1 text-sm transition-all duration-300 hover:bg-neutral-200 active:scale-[.97] dark:bg-neutral-900 dark:hover:bg-neutral-800">
            Open user menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start" side="top">
            <DropdownMenuItem>
              <User size={16} weight="fill" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard size={16} weight="fill" />
              Facturacion
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Gear size={16} weight="fill" />
              Ajustes
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard size={16} weight="fill" />
              Atajos de teclado
            </DropdownMenuItem>
            <hr className="my-1 h-px border-0 bg-neutral-200 dark:bg-neutral-800" />
            <DropdownMenuItem>
              <Users size={16} weight="fill" />
              Equipo
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus size={16} weight="fill" />
              Invitar usuarios
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus size={16} />
              Nuevo equipo
            </DropdownMenuItem>
            <hr className="my-1 h-px border-0 bg-neutral-200 dark:bg-neutral-800" />
            <DropdownMenuItem>
              <Question size={16} weight="fill" />
              Soporte
            </DropdownMenuItem>
            <DropdownMenuItem>
              <GithubLogo size={16} weight="fill" />
              Github
            </DropdownMenuItem>
            <hr className="my-1 h-px border-0 bg-neutral-200 dark:bg-neutral-800" />
            <DropdownMenuItem>
              <SignOut size={16} weight="fill" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className="space-y-1">
        <div className="relative w-max">
          <input
            className="h-10 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 text-sm text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800"
            placeholder="Input example"
          />
        </div>
        <div className="relative w-max">
          <input
            type="password"
            className="h-10 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 pr-7 text-sm text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800"
            placeholder="Input example"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="absolute inset-y-0 right-0 flex items-center justify-center pr-2">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        nostrum eos aliquam nulla doloribus unde facilis beatae pariatur,
        dolorem assumenda voluptatem eum corrupti iusto, ex tenetur quisquam
        totam excepturi magni. Obcaecati a iure, quasi beatae ex aspernatur
        corporis mollitia perspiciatis libero enim quidem iusto est modi
        eligendi at reprehenderit dolor provident officia minus maiores sint non
        tempore explicabo! Itaque, eveniet. Quod totam eaque, suscipit ullam
        illum animi commodi, alias rem vero iure sequi fuga! Atque, blanditiis
        incidunt. Odit eos atque error autem, officia pariatur inventore
        exercitationem cum, maxime placeat soluta. Itaque magni ducimus esse
        voluptate qui, blanditiis quos aperiam, veritatis iste sed alias, quis
        ipsa consequuntur totam ut dolore atque eum repellendus ad
        necessitatibus nam hic earum iusto impedit. Quibusdam. Dolorem sunt
        tenetur, dolore officia, numquam, recusandae ab autem dignissimos neque
        eaque corporis iure hic vero? Voluptatum quod necessitatibus, tempore
        doloremque neque obcaecati consectetur amet adipisci eum hic repellat
        perferendis? Dolorem dolore ullam quibusdam eius! Incidunt non doloribus
        harum maxime error sint temporibus labore eaque quam inventore qui,
        officiis cum. Earum asperiores dolorem alias, animi magni corrupti
        delectus sit voluptatum? Quia in quam aliquam doloribus vero commodi?
        Explicabo, nostrum distinctio ad tempore nulla deserunt sint facere
        exercitationem quidem. Cumque blanditiis nesciunt voluptates neque
        voluptatem ipsa dignissimos et perspiciatis ullam iste? Error nihil
        quidem dolorem eligendi earum harum libero totam quo doloribus ipsam,
        necessitatibus recusandae officia blanditiis voluptate, reiciendis
        soluta cumque excepturi, eveniet quae tempora autem quos quia
        distinctio? Neque, officia? Pariatur a laborum provident possimus
        deserunt. Exercitationem rerum expedita odit ea reprehenderit placeat,
        perspiciatis recusandae cupiditate eum reiciendis neque excepturi nobis
        sint nulla laborum tempore. Possimus asperiores officiis ad! Quisquam.
        Consequatur magni quos tenetur harum odio error accusantium laudantium
        facilis in enim cum rem nisi, itaque similique doloremque maiores
        reiciendis laboriosam repellat mollitia cupiditate est alias
        consequuntur! Velit, reprehenderit beatae.
      </section>
    </main>
  );
}
