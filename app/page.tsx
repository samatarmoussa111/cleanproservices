import Header from "@/components/navigation/header";
import Hero from "@/components/hero/hero";
import Service from "@/components/serviceSection/service";

export default function Home() {
  return (
    <>
      <section className="relative lg:h-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-background/60  "></div>
        <Header />
        <Hero />
      </section>
      <Service />
    </>
  );
}
