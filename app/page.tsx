import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Accurate Speaker Detection for Your Meetings
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our cutting-edge speaker detection app ensures your virtual meetings are seamless and productive.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="speak"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Try the App
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How it Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our speaker detection app uses advanced AI algorithms to accurately identify speakers in your virtual
                  meetings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automatic Speaker Detection</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our app uses advanced audio processing to detect when each participant is speaking, without any manual
                  setup.
                </p>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Automatic Speaker Detection"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time Speaker Identification</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our app can identify each speaker in real-time, allowing you to follow the conversation and know who
                  is talking.
                </p>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Real-time Speaker Identification"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our app integrates seamlessly with your existing video conferencing tools, making it easy to use in
                  your daily meetings.
                </p>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Seamless Integration"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Accurate and Reliable</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our speaker detection app has been tested and proven to be highly accurate and reliable, ensuring your
                meetings run smoothly.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">99.5%</h3>
                  <p className="text-gray-500 dark:text-gray-400">Speaker Detection Accuracy</p>
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">98%</h3>
                  <p className="text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">4.9/5</h3>
                  <p className="text-gray-500 dark:text-gray-400">Average User Rating</p>
                </div>
              </div>
              <blockquote className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg" width="48" height="48" alt="Avatar" className="rounded-full mr-4" />
                  <div>
                    <div className="text-lg font-bold">Jane Doe</div>
                    <div className="text-gray-500 dark:text-gray-400">CEO, Acme Inc.</div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "The speaker detection app has been a game-changer for our\n virtual meetings. It\'s accurate,
                  reliable, and has\n significantly improved our productivity."
                </p>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Experience the Difference</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our speaker detection app is designed to make your virtual meetings more efficient and productive.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Try the App
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}


