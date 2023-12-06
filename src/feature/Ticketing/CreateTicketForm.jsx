import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
} from "@chakra-ui/react";
import { useAddTicket } from "./useAddTicket";
import { useForm } from "react-hook-form";
import useUsers from "../Users/useUsers";
import useTickets from "./useTickets";

function CreateTicketForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createTicketApi } = useAddTicket();
  const { userItems, isLoading } = useUsers();
  const { refetch } = useTickets();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    const user = userItems.filter(
      (item) => item.id === Number(values.user)
    )?.[0];
    await createTicketApi({ ...values, status: "unassigned", user });
    onClose();
    refetch();
  }
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Ticket</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl isInvalid={errors.title}>
                <Input
                  id="title"
                  {...register("title", {
                    required: "this is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.user}>
                <span> Assign to :</span>
                <Select
                  id="user"
                  {...register("user", {
                    required: "this is required",
                  })}
                >
                  {userItems?.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.firstName}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit" isLoading={isSubmitting}>
                create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTicketForm;
