import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface FormwrapperProps {
    children: React.ReactNode;
    title: string;
    description?: string;
}

export const Formwrapper = ({ children, title, description }: FormwrapperProps) => {
    return (
        <Card className="flex flex-col  items-center w-[800px] ">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>

    )
}
