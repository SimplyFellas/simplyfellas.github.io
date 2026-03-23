import { stagger } from "motion";

export let containerAnimation = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.2),
    },
  },
  hide: {
    opacity: 0,
  },
};

export let sectionsAnimation = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.2),
      type: "spring",
      duration: 3
    },
  },
  hide: {
    opacity: 0,
  },
};

export let itemAnimation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  },
  hide: {
    opacity: 0,
    y: -12,
  },
};
