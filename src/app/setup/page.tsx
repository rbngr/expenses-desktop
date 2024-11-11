import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
            <h1 className="text-3xl font-bold">Welcome to Expenses</h1>

            <Carousel className="p-8 rounded-xl border shadow-lg w-1/2">
                <CarouselContent className="flex p-2">
                    <CarouselItem className="flex flex-col justify-center gap-4 p-4">
                        <h2 className="text-lg">How should I call you?</h2>
                        <Input type="text" placeholder="What is your name" />
                        <Button>Next</Button>
                    </CarouselItem>

                    <CarouselItem className="flex flex-col justify-center gap-4 p-4">
                        <h2 className="text-lg">How should I call you?</h2>
                        <Input type="number" placeholder="When do you get your wage" />
                        <Button>Start tracking</Button>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}
