import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProsListBlock`.
 */
export type ProsListBlockProps =
  SliceComponentProps<Content.ProsListBlockSlice>;

/**
 * Component for "ProsListBlock" Slices.
 */
const ProsListBlock = ({ slice }: ProsListBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pros_list_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProsListBlock;
