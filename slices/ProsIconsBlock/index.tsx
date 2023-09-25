import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProsIconsBlock`.
 */
export type ProsIconsBlockProps =
  SliceComponentProps<Content.ProsIconsBlockSlice>;

/**
 * Component for "ProsIconsBlock" Slices.
 */
const ProsIconsBlock = ({ slice }: ProsIconsBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pros_icons_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProsIconsBlock;
