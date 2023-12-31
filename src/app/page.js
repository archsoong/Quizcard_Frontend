import Image from 'next/image'

export default function Home() {
  return (
    <section class="relative flex items-center w-full border-b-2 border-black">
      <div class="relative items-center w-full mx-auto 2xl:max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 divide-y-2 divide-black md:divide-y-0 md:divide-x-2 2xl:border-x-2 border-black">
          <div class="relative p-8 lg:px-20 items-center gap-12 h-full lg:inline-flex">
            <div class="max-w-xl text-left md:text-center lg:text-left mx-auto">
              <div>
                <p class="text-5xl text-black font-display">
                  We will leave you flabbergasted
                </p>
                <p class="max-w-xl mt-4 xl:text-2xl tracking-tight text-black">
                  We all make mistakes, have struggles, and even regret things in
                  our past.
                </p>
                <ol class="lg:text-center gap-6 grid grid-cols-1 lg:gap-12 lg:grid-cols-3 list-none max-w-xl mt-12 sm:grid-cols-2" role="list">
                  <li>
                    <h3 class="xl:text-xl tracking-tight text-black">
                      27 Demo pages
                    </h3>
                  </li><li>
                    <h3 class="xl:text-xl tracking-tight text-black">
                      60+ Sections
                    </h3>
                  </li><li>
                    <h3 class="xl:text-xl tracking-tight text-black">
                      100+ Components
                    </h3>
                  </li>
                </ol>
              </div>
              <div class="flex-col flex gap-3 mt-10 sm:flex-row">
                <a class="text-black items-center shadow-[5px_5px_black] inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out hover:text-white transform transition hover:shadow-none border-2 duration-200 hover:bg-black lg:w-auto py-3 rounded-xl w-full" href="/overview">Explore all pages <span class="ml-3">&rarr;</span></a>
              </div>
            </div>
          </div>
          <div class="block w-full aspect-square lg:mt-0 bg-lila-500 h-full">
            <img class="object-cover" src="/images/buttons.png" alt="#" />
          </div>
        </div>
      </div>
    </section>
  )
}