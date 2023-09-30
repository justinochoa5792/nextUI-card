import NextLink from "next/link";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card shadow="lg">
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <Image
                className="justify-center rounded-lg border-large"
                src="/palmtrees.jpg"
                width={200}
                height={200}
                alt="palm-tree"
              />
            </div>
            <div className="flex justify-center p2">
              <h2 className="text-3xl font-bold">Justin Ochoa</h2>
            </div>
            <div className="flex justify-center m-4 gap-4">
              <Chip variant="shadow" color="primary" size="sm">
                Next.js 13
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                NextUI
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                Developer
              </Chip>
            </div>
            <div className="flex justify-center max-w-sm">
              <p className="text-lg text-center font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                vitae.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 pt-4">
              <a href="https://github.com/justinochoa5792" target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">GitHub</h3>
                  </CardBody>
                </Card>
              </a>
              <a href="https://justinochoa92.netlify.app/" target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">Portfolio</h3>
                  </CardBody>
                </Card>
              </a>
              <a
                href="https://www.linkedin.com/in/justinochoa5792/"
                target="_blank"
              >
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">LinkedIn</h3>
                  </CardBody>
                </Card>
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
