import { BoxProps, chakra, forwardRef } from "@chakra-ui/react";

interface CustomPositionProps extends Omit<BoxProps, "position"> {
  position: BoxProps["position"] | "allovertheplace";
}

const CustomPosition = forwardRef<CustomPositionProps, "div">(function (
  { position, ...props },
  ref
) {
  const sx =
    position === "allovertheplace"
      ? {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute"
        }
      : {};
  return <chakra.div sx={sx} {...props} />;
});

function TestDirectly() {
  return <CustomPosition position="allovertheplace" />;
}

function TestWithAsConflicting() {
  return <chakra.div as={CustomPosition} position="allovertheplace" />;
}

function TestWithAs() {
  return <chakra.div as={CustomPosition} position="absolute" />;
}
