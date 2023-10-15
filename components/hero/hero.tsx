import { GetAQuote } from "../contact/get-a-quote";
import { Button } from "../ui/button";
import Container from "../ui/container";

const Hero = () => {
  return (
    <Container className="relative py-32 lg:flex  lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className=" scroll-m-20 text-3xl lg:text-6xl font-extrabold tracking-tight">
          Commercial & Residential Cleaning Services
        </h1>

        <p className="mt-4 sm:text-xl/relaxed leading-7 [&:not(:first-child)]:mt-6">
          CleanProServices offers a complete range of high-quality cleaning
          services tailored to meet our customer’s needs.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GetAQuote>
            <Button>Get a Quote</Button>
          </GetAQuote>
          <Button variant="secondary">Our Services</Button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
