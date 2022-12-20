// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "text-[#4B4DFF] "
      : "text-gray-800"
  return (
    <Html lang="en">
      <Head>
        <Title>SEPAKAT - Modul Integrasi</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class=" scrollbar-thin scrollbar-thumb-gray-300 ">
        <Suspense>
          <ErrorBoundary>
            {/* <nav class="bg-sky-800">
              <ul class="container flex items-center p-3 text-gray-200">
                <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                  <A href="/">Home</A>
                </li>
                <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                  <A href="/about">About</A>
                </li>
              </ul>
            </nav> */}

            <div
              class="sticky top-0 pt-6 z-40 w-full backdrop-blur-sm flex-none transition-colors lg:z-50 lg:border-b lg:border-slate-900/10 
                      dark:border-slate-50/[0.06] bg-transparent supports-backdrop-blur:bg-[#11151c]/60 dark:bg-transparent
                      "
            >
              <div class="max-w-8xl mx-auto">
                <div class="py-4 border-b border-slate-900/10 px-4 -mt-6">
                  <div class="relative flex items-center ">  
                    <A
                      class="flex flex-inline overflow-hidden"
                      href="/"
                    >
                      <img
                        class="h-14 p-1"
                        // src="https://img.icons8.com/external-outline-lafs/64/null/external-ic_integration-crosschain-outline-lafs.png"
                        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/null/external-handshake-support-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                      />
                      <div class="flex items-center font-medium text-xl">&nbsp;&nbsp;|&nbsp;&nbsp;SERASI</div>
                    </A>
                    <div class="relative hidden lg:flex items-center mr-auto">
                      <nav class="text-sm leading-6 font-semibold ml-10 text-gray-500">
                        <ul class="flex space-x-8">
                          <li>
                            <A
                              class={`${active("/")} hover:text-[#4B4DFF] dark:hover:text-sky-400`}
                              href="/"
                            >
                              Dashboard
                            </A>
                          </li>
                          <li>
                            <A
                              class={`${active("/deduplikasi")} hover:text-[#4B4DFF] dark:hover:text-sky-400`}
                              href="/deduplikasi"
                            >
                              Deduplikasi
                            </A>
                          </li>
                          <li>
                            <A
                              class={`${active("/singleid")} hover:text-[#4B4DFF] dark:hover:text-sky-400`}
                              href="/singleid"
                            >
                              Penjaminan Single ID
                            </A>
                          </li>
                          <li>
                            <A
                              class={`${active("/linkage")} hover:text-[#4B4DFF] dark:hover:text-sky-400`}
                              href="/linkage"
                            >
                              Linkage
                            </A>
                          </li>
                          <li>
                            <A
                              class={`${active("/individu")} hover:text-[#4B4DFF] dark:hover:text-sky-400`}
                              href="/individu"
                            >
                              Pencarian Individu
                            </A>
                          </li>
                        </ul>
                      </nav>
                      
                      <div class="flex items-center border-l border-slate-400 ml-6 pl-6 dark:border-slate-800">
                          <a href="https://github.com/AdityaSetyadi/sepakat-integrasi" class="block text-slate-700 hover:text-slate-500 dark:hover:text-sky-400" target="_blank">
                              <span class="sr-only">GitHub Repository</span>
                              <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                              </svg>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
