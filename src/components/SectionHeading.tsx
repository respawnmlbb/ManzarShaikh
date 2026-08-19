import { motion } from "framer-motion";
import { rise } from "../lib/motion";

type Props = {
  code: string;
  label: string;
  className?: string;
};

/** Mono pre-heading: [ 02 ] // DEPLOYED_INSTANCES — with a trailing hairline. */
export default function SectionHeading({ code, label, className = "" }: Props) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="font-mono text-xs tracking-[0.18em] text-signal">
        [ {code} ]
      </span>
      <span className="font-mono text-xs tracking-[0.18em] text-gray-500">
        // {label}
      </span>
      <span className="hairline-mask h-px flex-1 bg-white/10" aria-hidden />
    </motion.div>
  );
}
