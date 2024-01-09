import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import todoService, { useTodosListQuery } from "services/todo.service";

const Page = () => {
  const { data: { todos } = {} } = useTodosListQuery();

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   todoService.getList().then((res) => setTodos(res.todos ?? []));
  // }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading fontSize="5xl" color="primary.main" mb={4}>
        To do remote app
      </Heading>

      <Stack h={500} overflow="auto" spacing={4}>
        {todos?.map((todo) => (
          <Flex
            width={500}
            border="1px solid"
            borderColor="primary.100"
            color="red"
            p={5}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{todo.todo}</Text>
            <Checkbox size="lg" isChecked={todo.completed} />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};
export default Page;
