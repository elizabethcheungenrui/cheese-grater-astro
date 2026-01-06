import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { HomepageSection } from "../../lib/getSectionArticles";

import "./HomeMobile.css";

import MajorLayoutMobile from "../../layouts/MajorLayoutMobile";
import MinorLayoutMobile from "../../layouts/MinorLayoutMobile";

type Props = {
  voices: HomepageSection;
  investigations: HomepageSection;
  humour: HomepageSection;
};

export default function HomeMobile({
  voices,
  investigations,
  humour,
}: Props) {
  const [active, setActive] = useState<"voices" | "investigations" | "humour">(
    "investigations");

  const spring = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
  };

  return (
    <section className="home-grid-mobile">
      {/* VOICES COLUMN */}
      <motion.aside
        layout
        onMouseEnter={() => setActive("voices")}
        initial={{ flexGrow: 1 }}
        animate={{ flexGrow: active === "voices" ? 9 : 1 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={active === "voices" ? "voices-major" : "voices-minor"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === "voices" ? (
              <MajorLayoutMobile data={voices} />
            ) : (
              <MinorLayoutMobile data={voices} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.aside>

      {/* INVESTIGATIONS COLUMN */}
      <motion.main
        layout
        onMouseEnter={() => setActive("investigations")}
        initial={{ flexGrow: 9 }}
        animate={{ flexGrow: active === "investigations" ? 9 : 1 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={
              active === "investigations"
                ? "investigations-major"
                : "investigations-minor"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === "investigations" ? (
              <MajorLayoutMobile data={investigations} />
            ) : (
              <MinorLayoutMobile data={investigations} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.main>

      {/* HUMOUR COLUMN */}
      <motion.aside
        layout
        onMouseEnter={() => setActive("humour")}
        initial={{ flexGrow: 1 }}
        animate={{ flexGrow: active === "humour" ? 9 : 1 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={active === "humour" ? "humour-major" : "humour-minor"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === "humour" ? (
              <MajorLayoutMobile data={humour} />
            ) : (
              <MinorLayoutMobile data={humour} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.aside>
    </section>
  );
}
