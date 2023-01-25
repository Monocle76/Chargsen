import { Button, Container, Heading, Text, Stack, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW={"4xl"} mt={7}>
      <Stack spacing={7} align={"start"}>
        <Heading color={"teal.700"}>Welcome to my app!</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore, rem dolorem reiciendis perferendis maxime neque ducimus asperiores! Assumenda corrupti deserunt praesentium repellendus sint aperiam quas voluptatum qui voluptatibus?</Text>
        <Button colorScheme={"teal"}>Load Data from server</Button>
      </Stack>
    </Container>
  );
}

export default App;
