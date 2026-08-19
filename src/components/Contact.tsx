import { motion } from "framer-motion";
import { cascade, cascadeItem } from "../lib/motion";
import { LINKS } from "../data";
import SectionHeading from "./SectionHeading";

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
    >
      <motion.div
        variants={cascade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-8"
      >
        <SectionHeading code="04" label="INITIALIZE_CONNECTION" />

        <motion.div
          variants={cascadeItem}
          className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
        >
          {/* ambient corner glow + faint dot matrix */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-signal/[0.07] blur-[100px]"
          />
          <div
            aria-hidden
            className="dot-grid absolute inset-0 opacity-[0.025] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_20%,black,transparent)]"
          />

          <div className="relative px-6 py-14 sm:px-12 sm:py-20">
            <motion.h2
              variants={cascadeItem}
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            >
              Let&rsquo;s build something{" "}
              <span className="whitespace-nowrap">intelligent.</span>
            </motion.h2>

            <motion.p
              variants={cascadeItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              Available for freelance work and projects on contract. The
              fastest way to reach me is WhatsApp.
            </motion.p>

            <motion.div
              variants={cascadeItem}
              className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12"
            >
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3.5 rounded-md bg-white px-6 py-4 text-[15px] font-semibold tracking-tight text-black transition-all duration-200 hover:bg-neutral-200 hover:shadow-[0_0_60px_rgba(16,185,129,0.14)] active:translate-y-px"
              >
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500 opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <WhatsAppIcon />
                Message on WhatsApp
                <ArrowIcon />
              </a>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] text-gray-500">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  email: <span className="text-gray-300">{LINKS.email}</span>
                </a>
                <span className="text-gray-700" aria-hidden>
                  |
                </span>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  linkedin:{" "}
                  <span className="text-gray-300">{LINKS.linkedinDisplay}</span>
                </a>
                <span className="text-gray-700" aria-hidden>
                  |
                </span>
                <span>
                  signal:{" "}
                  <span className="text-gray-300">{LINKS.whatsappDisplay}</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
