import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>;

/**
 * Component for "Logos" Slices.
 */
const Logos = ({ slice }: LogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for logos (variation: {slice.variation}) Slices
    </section>
  );
};

export default Logos;
