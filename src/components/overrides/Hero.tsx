import { SectionOverride } from "@faststore/core";

const override: SectionOverride = {
  section: "Hero",
  components: {
    Hero: { Component: () => <h1>Meu primeiro override component</h1> },
  },
};

export { override };
