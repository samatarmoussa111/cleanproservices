"use client";

import Link from "next/link";
import Container from "../ui/container";
import { ModeToggle } from "../ui/mode-toggle";
import { ButtonIcon } from "../ui/button-icon";
import { useState } from "react";
import { menus } from "@/lib/links-app";

const Header = () => {
  const [value, setvalue] = useState<boolean>(false);
  return (
    <header className=" relative bg-transparent">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight hover:text-foreground/75 transition">
                CleanProServices
              </h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {menus.map((menu) => (
                  <li key={menu.title}>
                    <Link
                      href={menu.path}
                      className="text-foreground text-[16px] transition hover:text-foreground/75"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}

                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <ModeToggle />
              </div>
              <div className="block md:hidden">
                <ButtonIcon
                  action={() => {
                    setvalue(!value);
                  }}
                  iconName="Menu"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
