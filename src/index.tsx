import {
  FieldError,
  FieldValues,
  Form,
  TextField,
  Submit,
  useForm
} from "@redwoodjs/forms";

import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Button,
  chakra
} from "@chakra-ui/react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const formMethods = useForm<FieldValues>({
    mode: "onTouched",
    defaultValues: { message: "" }
  });

  const errors = formMethods.formState.errors;

  function handleSubmit(input: { message: string }, e) {
    alert(input.message);
    console.log(e);
  }

  return (
    <>
      <Heading>Redwood Forms + Chakra + TS</Heading>
      <chakra.form
        as={Form}
        onSubmit={handleSubmit}
        formMethods={formMethods}
        borderWidth="1px"
        borderColor="cyan.400"
        borderRadius="2xl"
        w="50%"
        m={8}
        p={4}
      >
        <FormControl pb={4} isInvalid={!!errors.message}>
          <Input
            as={TextField}
            variant="flushed"
            placeholder="Say something nice"
            name="message"
            validation={{
              required: {
                value: true,
                message: "Oh come on, why don't you wanna say something nice?"
              },
              minLength: {
                value: 10,
                message: "Please make your effort at least 10 characters long"
              }
            }}
          />

          <FormErrorMessage>
            <FieldError name="message" />
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" as={Submit}>
          Submit
        </Button>
      </chakra.form>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
