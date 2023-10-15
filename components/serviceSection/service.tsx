import Image from "next/image";
import Container from "../ui/container";
import Link from "next/link";
import { services } from "@/lib/links-app";

const Service = () => {
  return (
    <Container className="my-10 sm:my-20 flex flex-col items-center justify-center gap-10">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className=" scroll-m-20 text-3xl lg:text-6xl font-extrabold tracking-tight">
          Our Services
        </h1>

        <p className="mt-4 sm:text-xl/relaxed  text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus nulla tenetur eius ducimus, rerum repellendus voluptates
          architecto eos? Corrupti libero, eaque corporis quam ad optio sequi
          eveniet nihil delectus?
        </p>
      </div>

      <div className="sm:flex sm:justify-center sm:items-center sm:gap-4 space-y-5 sm:space-y-0">
        {services.map((service) => (
          <article
            key={service.id}
            className="relative  overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-md"
          >
            <Image
              alt="Office"
              src={service.src}
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-to-t from-background/50 to-background/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <Link href="/#">
                  <h3 className="mt-0.5 text-foreground scroll-m-20 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-foreground/95 ">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default Service;
