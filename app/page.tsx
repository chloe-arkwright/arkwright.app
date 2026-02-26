import {Card} from "@/components/ui/card";

export default function Page() {
    return (
        <div className="mx-auto grid w-full max-w-5xl min-w-0 content-center justify-center p-4 pt-2 sm:p-6 lg:p-12 2xl:max-w-6xl">
            <Card className="max-w-sm overflow-hidden pt-0">
                <div className="flex flex-col gap-1 m-1">
                    <div className="text-foreground px-1.5 py-2 text-xs">
                        <p className="text-2xl text-center">🚧 Welcome! 🚧</p>
                    </div>
                    <div className="text-foreground bg-background p-4">
                        <p>This site is under construction right now,<br />please check back later. ^_^</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}