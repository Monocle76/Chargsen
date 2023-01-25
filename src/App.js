import { Button, Container, Heading, Text, Stack, Spacer, Box, OrderedList, ListItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  var [users, setUsers] = useState([{}]);
  var [click, setClick] = useState(false)
  function getData() {
    axios.get("/api/users").then((data) => {
      setUsers(data.data)
      setClick(true)
    })
  }

  // useEffect(() => {
  //   getData();
  // }, [])

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
      </Stack>
    </Container>
  );
}

export default App;
