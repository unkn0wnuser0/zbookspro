import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ExperienceBlock`.
 */
export type ExperienceBlockProps =
  SliceComponentProps<Content.ExperienceBlockSlice>;

/**
 * Component for "ExperienceBlock" Slices.
 */
const ExperienceBlock = ({ slice }: ExperienceBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for experience_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ExperienceBlock;
