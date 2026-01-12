import { stagger } from "motion";

export let containerAnimation = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.5),
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
  },
  hide: {
    opacity: 0,
    y: -32,
  },
};
