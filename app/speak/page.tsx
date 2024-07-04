import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import AudioRecorder from "@/components/AudioRecorder"

export default function Component() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full px-4 md:px-6 flex flex-col gap-5">
        <Link className={cn(buttonVariants({ variant: "outline", }), "flex items-center gap-5 w-fit")} href={"/"}>
          <Home size={14} /> Home
        </Link>
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-gray-900 dark:bg-gray-700 px-6 py-4">
            <CardTitle className="text-white">Speaker Detection</CardTitle>
            <CardDescription className="text-gray-300">
              Analyze the speaker&apos;s voice and get details about them.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center justify-center gap-6">
            <AudioRecorder />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

