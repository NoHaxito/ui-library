"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Switch,
} from "@sihaxito/deluxe-ui";

import { DiscordDropdownMenu } from "@/components/discord-dropdown";

export default function Home() {
  return (
    <main className="relative space-y-4 text-neutral-400 lg:p-8">
      <section className="space-x-2 space-y-1">
        <DiscordDropdownMenu />
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        sapiente, ut id placeat et est non quibusdam ipsam sunt maxime molestiae
        dolor ipsum aspernatur repudiandae dolorum blanditiis ab! Nisi, iste?
        Unde distinctio optio ipsam adipisci cumque sint soluta, labore ullam
        perferendis illum rerum natus eius ut debitis necessitatibus facere
        aliquid voluptas quas error esse explicabo sed suscipit? Dolor, delectus
        pariatur. Debitis saepe accusantium sequi alias quasi laboriosam fugiat
        quam repellendus dignissimos nulla autem rerum odio sunt blanditiis
        ipsam aliquam voluptates explicabo ad nam esse, animi aut iure voluptas.
        At, dolores. Quos neque esse culpa debitis velit dolores unde earum,
        possimus vel ea dolore ex quam sit laudantium fugiat eos ratione ut
        impedit eius! Ab quo aspernatur reiciendis accusantium obcaecati!
        Temporibus. Expedita dolore laborum pariatur? Sit ipsa optio cumque eos
        blanditiis corrupti quam libero distinctio id fuga eaque quia ducimus,
        aliquam rerum voluptates animi expedita molestiae. Odit culpa vero
        corporis eveniet! Nulla, voluptas obcaecati rerum ducimus dignissimos
        consequatur architecto minima magni, dolores sed iure! Voluptatum est
        numquam distinctio maxime corrupti consectetur earum eaque fuga
        cupiditate? Molestiae odio quis consectetur possimus libero. Fuga
        voluptas tempore tempora nisi quibusdam aut nobis ea ad. Iusto vero
        praesentium amet odio numquam fuga facilis reprehenderit pariatur
        veritatis, unde ut? Rem sit vero, perspiciatis debitis eligendi vitae.
        Atque eos hic voluptas quis, eum quas quae facere nesciunt molestiae
        laborum ullam. Fugit quis ut cupiditate reprehenderit voluptate,
        distinctio voluptas incidunt, explicabo repudiandae consequatur odit
        beatae voluptatem quae consectetur! Necessitatibus maxime et inventore
        explicabo quo doloribus cupiditate consequatur beatae libero eveniet,
        officia enim voluptas ab delectus recusandae fugit in corrupti atque,
        error assumenda nostrum neque perspiciatis? Rerum, qui ducimus! Sapiente
        corporis quibusdam molestiae cumque eveniet cupiditate, officiis ipsa
        temporibus dolores nihil? Repellat assumenda consectetur maiores non
        dolorum. Dolorum illo autem ea velit labore eaque assumenda qui neque
        earum expedita. Accusantium voluptatibus praesentium sapiente harum
        quas. Voluptatem ullam eligendi ipsum, temporibus consequuntur placeat
        expedita eius nostrum consectetur natus eum culpa cumque iste
        necessitatibus porro optio soluta modi reprehenderit accusamus dolor?
        Officia incidunt culpa fuga, amet quasi officiis nobis unde natus iure
        distinctio facere vero molestias sapiente hic, obcaecati alias
        voluptates temporibus explicabo at voluptas! Corporis maiores labore
        reprehenderit minima ea? Magni fuga, soluta totam harum iste corrupti
        esse ab nulla atque id fugiat beatae sit nisi nostrum laudantium
        molestias praesentium expedita dignissimos repellat obcaecati. Itaque
        eveniet placeat maxime nam magni. Reiciendis, sed dolorum! Totam,
        aperiam fugit! Qui, sit fugiat? In soluta ullam at eligendi architecto
        expedita. Cumque quos provident consequuntur unde facere nostrum vitae
        odit, vel tempora iure delectus non. Quas deleniti laudantium vero
        exercitationem quia ratione nulla ipsum mollitia accusantium ea fuga
        aspernatur doloribus eligendi, voluptatibus, nostrum quasi tempora,
        similique vel. Ad recusandae similique natus est aliquam laudantium
        quae? Animi nihil, aspernatur eos at eveniet rerum repellendus pariatur
        quos enim omnis velit quae ducimus expedita nulla quod dolore qui
        voluptates ea culpa vero sed voluptate! Ad fuga quibusdam ea. Blanditiis
        ullam enim rerum facilis id, obcaecati voluptas dolor officia. Natus
        esse, soluta adipisci officiis, nostrum totam error, architecto dicta
        quod eveniet officia aliquam ab. Minima delectus blanditiis vero in!
        Expedita explicabo harum assumenda sequi corrupti accusamus, ducimus
        modi voluptatibus deleniti iste ex veritatis illum deserunt odio soluta
        fugit voluptas eligendi similique earum. Voluptatem non pariatur
        voluptas perspiciatis similique aperiam. Magnam, incidunt similique quae
        excepturi repellat at! Minus voluptatem esse quisquam, modi odit ipsa
        officia vero ut vitae expedita consequatur unde, quod exercitationem
        dicta tempora corporis ipsam id quidem fugiat! Soluta dignissimos iusto,
        cum, placeat incidunt alias ducimus fugiat neque, ex ullam ipsum
        laboriosam optio veritatis voluptas consequuntur consequatur quidem
        praesentium repellat maiores facilis ipsa nesciunt veniam sapiente odit.
        Adipisci. Rem recusandae asperiores quisquam quod fugit earum laudantium
        nesciunt maxime voluptate impedit. Nihil iste amet, ab tempora a odit
        adipisci, quam fugiat culpa magnam, optio quod deleniti rem quia
        repellat. Sequi maxime, mollitia illum asperiores fugit similique quas
        numquam, cum omnis repudiandae distinctio ab nobis deleniti temporibus
        dolores officia aperiam quod, delectus nostrum? Repudiandae temporibus
        dolorem, cumque nesciunt officiis obcaecati? Voluptas nesciunt iste,
        nemo nulla mollitia quas id aliquid est optio laborum nam consectetur
        dolore officiis! Molestiae doloremque accusamus fugiat magni fuga dicta
        error, voluptatem temporibus praesentium eveniet ipsam illo. Quas
        numquam commodi vero culpa sed nemo asperiores nam quaerat pariatur quo
        repudiandae molestias, nobis velit labore ipsa at, ea eaque quis qui
        illo? Deleniti iure explicabo molestias vel ipsum. Inventore,
        distinctio, vero non ullam repellat similique eos maiores molestiae
        eligendi tempora tempore ipsa harum nam soluta deserunt cupiditate ab,
        saepe adipisci eum. Soluta sit consequatur aut quam, cupiditate sint?
        Veniam perferendis aut vitae impedit, sapiente rem tenetur voluptate
        molestiae voluptatem dolorum quia laboriosam dicta voluptates, suscipit
        explicabo nam, repellendus aspernatur. Obcaecati labore repudiandae
        numquam odio optio magni! Illum, accusamus? Similique sed, ullam nostrum
        veritatis iusto illum, quasi qui possimus suscipit laboriosam in. Sit
        fugit veritatis vero corrupti voluptatem laboriosam, autem quaerat quo
        odit labore excepturi atque vel delectus expedita. Esse ea quas quasi
        perspiciatis pariatur quaerat reprehenderit possimus, ipsa veniam quia.
        Provident officiis laborum accusamus! Omnis nulla ex placeat dicta
        veritatis laborum cum ut, provident, assumenda sed obcaecati fugiat!
        Animi dignissimos ratione expedita molestiae ullam. Atque culpa saepe
        tempora sunt dolor! Rerum unde repellendus explicabo error, excepturi
        illo odit et. Iste recusandae nobis natus voluptate obcaecati amet
        accusamus repudiandae? Tempora sunt similique veniam eveniet alias,
        fugiat molestiae amet, sint quis dolorem animi, doloremque cumque velit
        itaque libero a minus! Nobis aliquam placeat nostrum! Cum molestias
        temporibus dolorem adipisci impedit? Itaque repellat nisi repellendus
        unde, recusandae distinctio harum facilis eius inventore omnis facere ut
        tempora saepe voluptatum laudantium quisquam! Sequi, quod? Maiores, ad
        aut. Magni error architecto atque harum provident! Dolore eum rem minus
        earum incidunt cumque at sint maiores, aliquid unde accusantium
        recusandae? Asperiores neque vero quis, omnis itaque, animi optio
        commodi incidunt esse recusandae sequi possimus eius repudiandae. Rem
        praesentium, voluptatum aliquam atque soluta sint totam quibusdam
        pariatur. Minus magni necessitatibus delectus sed architecto id
        similique veritatis esse, non laudantium est. Libero possimus officiis
        iure! Consequatur, temporibus est! Dignissimos provident aliquam
        quibusdam eius incidunt possimus accusantium earum, veritatis, nesciunt
        aspernatur est aut non commodi corrupti quo impedit cum, consectetur
        laborum! Quasi veniam aliquid magnam quos, excepturi corrupti voluptate.
        Aliquam, fugit repudiandae aliquid nisi at atque odit provident sed
        excepturi cumque quia voluptatem, repellat qui. A ab atque est ratione
        non saepe, architecto facere tempora molestiae dolorem, ducimus
        reprehenderit? Sed laudantium omnis praesentium, odio dolore veniam
        similique quae labore provident, molestias debitis tenetur error eveniet
        cumque, quis neque suscipit doloribus dolorum in. Porro ea, expedita quo
        libero fugit quis. Eum quia dolor adipisci sed expedita quas animi,
        dicta autem magnam omnis deleniti fugit nam, nisi reiciendis aliquam
        tenetur quo veniam vel numquam aut rerum possimus. Veniam asperiores
        fuga alias. Iste quod unde pariatur amet, debitis harum veritatis eos
        consequuntur soluta eaque placeat praesentium ipsam libero eum id
        doloremque esse tenetur? Vel praesentium suscipit aliquid culpa, nobis
        explicabo quaerat? Vero. Repellendus itaque optio labore ipsa, cum
        blanditiis odio velit quia eius quo! Cum, unde iure quisquam atque
        beatae maiores nulla provident in! Fugiat, magni dicta! At expedita
        possimus deserunt laborum? Alias fugiat accusamus nihil sequi magnam
        suscipit esse aspernatur similique voluptas neque sit dolore repellendus
        error, quaerat quo ullam at ex! Nam omnis aut nihil nesciunt? Voluptates
        explicabo rem magni. Ratione maiores officia doloribus ullam amet
        consequatur deleniti quam ut eaque. Ipsum ipsa voluptates sequi tempora
        rerum architecto aliquid consectetur, maiores modi nemo at deserunt
        tenetur blanditiis. Unde, perspiciatis amet? Doloribus molestiae eos
        perferendis ipsa illum aspernatur nisi sunt corporis, odit quaerat,
        officiis praesentium nam pariatur, maiores consectetur ipsam delectus
        molestias animi iusto maxime unde. Adipisci inventore impedit repellat
        voluptatibus. Dolorem commodi, quo cumque hic deleniti maxime
        consequuntur asperiores nostrum laudantium, totam ipsa officia laborum
        ducimus possimus veniam labore ex exercitationem? Tempora, provident
        dicta odio iusto quasi ea necessitatibus incidunt. Distinctio deserunt
        eveniet animi delectus mollitia numquam accusamus facere ratione porro
        labore repudiandae doloremque vel nesciunt voluptates tenetur itaque
        fuga illum, earum, illo aut! Pariatur est laboriosam quis aliquid et.
        Dolor vel ex architecto voluptatem nihil deserunt itaque, eveniet
        explicabo mollitia quos pariatur, quia accusantium quas totam quae porro
        necessitatibus sint a autem magni perferendis? Sunt quibusdam officia
        cumque facere? Recusandae illo nulla cupiditate cum atque est ipsum
        deserunt laudantium velit, quo, fugiat eos adipisci magni unde! Error
        hic facere, perspiciatis reprehenderit quae, ipsum perferendis maiores
        quos fuga excepturi fugiat. Fuga saepe officia reiciendis vitae
        architecto velit facilis commodi ut voluptatum natus sunt qui accusamus,
        dolorem debitis impedit tempora maiores distinctio a? Deleniti, earum
        harum consectetur in libero quae velit! Magni harum vitae voluptatem
        quae nulla velit sint doloribus eaque, cumque autem nostrum modi aut
        commodi fuga maxime officiis ratione? Corrupti, numquam quo et rerum
        corporis perspiciatis possimus voluptate neque. Magnam facere,
        recusandae dolorum alias, accusamus rem quaerat sint ipsa ratione
        accusantium quod et earum perferendis libero cupiditate ab enim porro.
        Minus nesciunt perferendis nam ullam nostrum voluptates nihil molestiae.
        Reiciendis tempora mollitia ipsa culpa assumenda veritatis earum quia
        possimus ducimus officiis quos accusantium sapiente officia, nisi illum
        esse in accusamus voluptates. Laborum quisquam tenetur sint deserunt
        molestias explicabo mollitia.
      </section>
    </main>
  );
}
