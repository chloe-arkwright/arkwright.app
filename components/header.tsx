import Link from "next/link";
import {Button} from "@/components/ui/button";

export default (): Element => (
    <header className="bg-card sticky top-0 z-50 w-full">
        <nav className="items-center gap-2 lg:flex p-4">
            <Button variant="outline">
                <Link href="/">Home</Link>
            </Button>
            <Button variant="outline">
                <Link href="about">About Us</Link>
            </Button>
        </nav>
    </header>
)
