import { SectionOverride } from "@faststore/core";
import { CustomButton } from "../molecules/CustomButton";

const override: SectionOverride = {
  section: "ProductDetails",
  components: {
    ProductTitle: {
      Component: (props) => <div>Component de title custom: {props.title}</div>,
    },
    BuyButton: {
      Component: CustomButton,
    },
  },
};

export { override };
