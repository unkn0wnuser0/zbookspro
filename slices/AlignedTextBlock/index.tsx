import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AlignedTextBlock`.
 */
export type AlignedTextBlockProps =
  SliceComponentProps<Content.AlignedTextBlockSlice>;

/**
 * Component for "AlignedTextBlock" Slices.
 */
const AlignedTextBlock = ({ slice }: AlignedTextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for aligned_text_block (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default AlignedTextBlock;
