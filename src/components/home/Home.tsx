import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { HomepageSection } from '../../lib/getSectionArticles';

import './Home.css';

import MajorLayout from '../../layouts/MajorLayout';
import MinorLayout from '../../layouts/MinorLayout';

type Props = {
  voices: HomepageSection;
  investigations: HomepageSection;
  humour: HomepageSection;
};

export default function Home({ voices, investigations, humour }: Props) {
  const [active, setActive] = useState<'voices' | 'investigations' | 'humour'>(
    'investigations',
  );

  const spring = {
    type: 'spring' as const,
    stiffness: 120,
    damping: 20,
  };

  return (
    <section className="home-grid">
      <motion.aside
        layout
        onMouseEnter={() => setActive('voices')}
        initial={{ flexGrow: 2 }}
        animate={{ flexGrow: active === 'voices' ? 6 : 2 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={active === 'voices' ? 'voices-major' : 'voices-minor'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'voices' ? (
              <MajorLayout data={voices} />
            ) : (
              <MinorLayout data={voices} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.aside>

      <motion.main
        layout
        onMouseEnter={() => setActive('investigations')}
        initial={{ flexGrow: 6 }}
        animate={{ flexGrow: active === 'investigations' ? 6 : 2 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={
              active === 'investigations'
                ? 'investigations-major'
                : 'investigations-minor'
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'investigations' ? (
              <MajorLayout data={investigations} />
            ) : (
              <MinorLayout data={investigations} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.main>

      <motion.aside
        layout
        onMouseEnter={() => setActive('humour')}
        initial={{ flexGrow: 2 }}
        animate={{ flexGrow: active === 'humour' ? 6 : 2 }}
        transition={spring}
      >
        <div className="ghost" />

        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={active === 'humour' ? 'humour-major' : 'humour-minor'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'humour' ? (
              <MajorLayout data={humour} />
            ) : (
              <MinorLayout data={humour} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.aside>
    </section>
  );
}
