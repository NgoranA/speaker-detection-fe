import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
              Analyze the speaker's voice and get details about them.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center justify-center gap-6">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-500 transition-colors">
              <MicIcon className="w-6 h-6 mr-2" />
              Record
            </Button>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold">John Doe</div>
                <div className="text-gray-500 dark:text-gray-400">Age: 35 | Gender: Male</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold">Confidence: 92%</div>
                <div className="text-gray-500 dark:text-gray-400">
                  The system is highly confident about the speaker's identity.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}
