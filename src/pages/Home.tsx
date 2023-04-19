import {
  Card,
  CardHeader,
  Heading,
  HStack,
  Container,
  CardBody,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useBoards, useCreateBoard,useDeleteBoard } from "../services/useBoards";

export default function Home() {
  const { data: boards } = useBoards();

  const { mutate, isLoading: isDeleting } = useDeleteBoard();
 
  const OnDelete = () => mutate("643fc1057956c23c5ff03306");
 

  const navigate = useNavigate();

  return (
    <Container py="8" flex="1" maxW="100%">
      <Heading size={"md"} mb={4}>
        Boards
      </Heading>
      <HStack spacing={4}>
        {boards?.map((board: any) => (
          <Card
            cursor={"pointer"}
            key={board.id}
            w="200px"
            h="100px"
            minW="100px"
            size={"sm"}
            onClick={() => navigate(`/Board/${board.id}`)}
          >
            <CardHeader>
              <Heading size="xs">{board.name}</Heading>
            </CardHeader>
          </Card>
        ))}
        <Card
          cursor="pointer"
          display="flex"
          alignItems={"center"}
          w="200px"
          h="100px"
          size={"sm"}
          align="center"
          onClick={OnDelete}
        >
          <CardBody>
            {isDeleting ? (
              <Spinner />
            ) : (
              <Text fontSize={"md"}>Create New Board</Text>
            )}
          </CardBody>
        </Card>
      </HStack>
    </Container>
  );
}