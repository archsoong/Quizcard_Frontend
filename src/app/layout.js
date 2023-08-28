import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Learn and inspire with Quizcard',
  description: 'Bitsize knowledge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="border-x-2 border-black bg-white">
        <nav class="flex-col bg-lila-400 border-t-2 border-b-2 border-black items-center flex-grow md:flex md:flex-row md:justify-start md:mt-0 lg:p-0 py-2 md:py-0 md:px-0 md:pb-0 px-5">
          <Link class="text-black duration-1000 text-lg ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition md:ml-8 lg:ml-16 2xl:ml-0" href="/">About</Link>
            <Link class="text-black duration-1000 text-lg ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition" href="/blog">Blog</Link>
            <Link class="text-black duration-1000 text-lg ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition" href="/discover">Discover & Learn</Link>
            <Link class="text-lila-500 md:ml-auto text-lg bg-black border-l-2 border-black duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-lila-900 hover:text-lila-500 inline-flex items-center justify-center px-6 text-center transform transition py-2 md:py-8" href="/singup"><span>Login / Sign up</span></Link>
          </nav>
        {children}
          <footer class="bg-white border-t-2 border-black">
          <div class="p-8 lg:p-20 2xl:px-0 2xl:max-w-7xl mx-auto">
            <div class="h-full space-y-12">
              <div>
                <div class="w-full justify-between lg:inline-flex lg:items-start h-full gap-3">
                  <div class="flex flex-col">
                    <h1 class="text-5xl font-extrabold">Quizcard</h1>
                    <svg viewBox="0 0 2487 209">
                      <text>Quizcard</text>
                    </svg>
                  <div>
                    <h3 class="text-sm text-black mt-12">
                      Subscribe to receive our latest update.
                    </h3>
                    <form class="border-black shadow bg-white border-2 justify-between mt-4 p-2 rounded-2xl sm:flex">
                      <label class="sr-only" for="email-address">Email address</label>
                      <input autocomplete="email" class="w-full px-5 border-transparent focus:ring-black py-3 bg-transparent focus:border-black placeholder-black rounded-xl sm:max-w-xs" id="email-address" name="email" placeholder="Enter your email" required="" type="email" /><div class="ml-auto mt-3 rounded-md sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                        <button class="items-center w-full border-black flex border-2 bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-medium hover:bg-lila-500 hover:text-black justify-center px-5 py-3 rounded-xl text-base text-white" type="submit"><svg class="h-6 mr-3 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" stroke-linecap="round" stroke-linejoin="round"></path></svg> Subscribe for free</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div class="md:gap-8 grid mt-12 lg:mt-0">
                    <div>
                      <ul class="space-y-2" role="list">
                        <li>
                          <Link class="text-lg text-black hover:text-lila-400" href="/">About</Link>
                        </li><li>
                          <Link class="text-lg text-black hover:text-lila-400" href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link class="text-lg text-black hover:text-lila-400" href="/license">License</Link>
                        </li>
                        <li>
                          <Link class="text-lg text-black hover:text-lila-400" href="https://x.com/lexingtonthemes">@lexingtonthemes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="w-full justify-between lg:inline-flex lg:items-center lg:space-y-0 space-y-3">
                <div>
                  <p class="text-black text-sm">
                    Quizcard - <span class="text-grayer"> Build by Assign Arch & Eric Invisible.</span>
                  </p>
                </div>
                <div>
                  <div class="flex space-x-6 md:order-2">
                    <Link href="#" class="text-black hover:text-lila-900">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                      </svg>
                    </Link>

                    <Link href="#" class="text-black hover:text-lila-900">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </Link>

                    <Link href="#" class="text-black hover:text-lila-900">
                      <span class="sr-only">Dribbble</span>
                      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  )
}