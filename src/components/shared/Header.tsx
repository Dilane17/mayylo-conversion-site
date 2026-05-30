"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WA_HREF = "https://wa.me/2290190913589";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`cap-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-main inner">
        <a href="#top" className="brand" aria-label="Mayylo">
          <Image
            src="/logo/logo%20officiel%20Maylo.png"
            alt="Mayylo"
            width={82}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </a>

        <div className="actions">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="cap-wa-link"
          >
            <span className="wic">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.7-5.1A8 8 0 1 1 9 19.4L3 21z" />
                <path d="M8 11.5c.4 1.4 1.5 2.6 3 3.1l1-1 2 1c0 .8-.6 1.4-1.5 1.4-3 0-5.5-2.5-5.5-5.5C7 9.6 7.6 9 8.4 9l1 2-1 .5z" />
              </svg>
            </span>
            <span className="lbl">WhatsApp</span>
          </a>
          <a href="#formulaire" className="btn btn-primary btn-sm">
            Rejoindre la liste d'attente
          </a>
        </div>
      </div>
    </header>
  );
}
