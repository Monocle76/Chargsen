import { Button, Container, Heading, Text, Stack, Box, OrderedList, ListItem, InputGroup, Input, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";

function App() {
  var [users, setUsers] = useState([{}]);
  var [click, setClick] = useState(false)
  function getData() {
    axios.get("/api/users").then((data) => {
      setUsers(data.data)
      setClick(true)
    })
  }
  var userInput = useRef();
  function handleSubmit() {
    var username = userInput.current.value;
    var user = {
      name: username,
      id: users.length + 1
    }
    axios.post("/api/users", user).then(response => {
      setUsers(response.data);
    })
    // getData();
  }

  return (
    <Container maxW={"4xl"} mt={7}>
      <Stack spacing={7} align={"start"}>
        <Heading color={"teal.900"} fontWeight={800}>Welcome to my app!</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore, rem dolorem reiciendis perferendis maxime neque ducimus asperiores! Assumenda corrupti deserunt praesentium repellendus sint aperiam quas voluptatum qui voluptatibus?</Text>
        {click && <Box>
          <OrderedList>
            {click && users.map(({id, name}) => <ListItem key={id}>{name}</ListItem>)}
          </OrderedList>
        </Box>}
        <Button colorScheme={"teal"} onClick={getData}>Load Data from server</Button>
        <InputGroup w={400} gap={2}>
          <Input placeholder="Enter the user" ref={userInput}/>
          <Button colorScheme={"teal"} onClick={handleSubmit}>Submit</Button>
        </InputGroup>
      </Stack>
    </Container>
  );
}

export default App;
