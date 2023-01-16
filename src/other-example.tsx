import { chakra, ChakraProps, forwardRef } from "@chakra-ui/react";

interface StringTabIndexedProps extends Omit<ChakraProps, "tabIndex"> {
  tabIndex: string | undefined;
}

const StringTabIndexed = forwardRef<StringTabIndexedProps, "div">(function (
  { tabIndex, ...props },
  ref
) {
  const tabIndexInt = parseInt(tabIndex, 10);
  return <chakra.div tabIndex={tabIndexInt} {...props} />;
});

function Directly() {
  return <StringTabIndexed tabIndex="-1" />;
}

function WithAsConflicting() {
  return <chakra.div tabIndex="-1" as={StringTabIndexed} />;
}

function WithAs() {
  return <chakra.div tabIndex={1} as={StringTabIndexed} />;
}
