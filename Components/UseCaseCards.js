import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
const UseCaseCards = ({ imgLink, imgWidth, imgHeight, title, description }) => {
    return (
        <Card className="w-64 h-72">
            <CardHeader className="p-0">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    width={imgWidth}
                    height={imgHeight}
                    src={imgLink}
                />
            </CardHeader>
            <CardBody className=" bg-white">
                <div className="text-center text-zinc-700 text-base font-semibold leading-snug">
                    {title}
                </div>
                <div className="text-center text-zinc-700 text-base font-normal font-['Source Sans 3'] leading-normal">
                    {description}
                </div>
            </CardBody>
        </Card>
    );
};

export default UseCaseCards;
