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
        <Title>SolidStart - With TailwindCSS</Title>
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
                      class="flex-none overflow-hidden"
                      href="/"
                    >
                      <img
                        class="h-14"
                        src="https://img.icons8.com/external-outline-lafs/64/null/external-ic_integration-crosschain-outline-lafs.png"
                      />
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
