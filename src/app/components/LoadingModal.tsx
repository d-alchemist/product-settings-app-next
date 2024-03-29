import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";

type Props = {
  loadingText?: string;
};

export default function LoadingModal({
  loadingText = "Loading...",
}: Props) {
  return (
    <Modal isCentered isOpen={true} onClose={() => null} size="xl">
      <ModalOverlay />
      <ModalContent mx="5">
        <ModalBody bg="transparent">
          <Flex flexDir="column"  bg="transparent" py="8" alignItems="center" gap="5">
            <Spinner size="xl" />
            <Text fontSize="xl" fontWeight="medium" textAlign="center">
              {loadingText}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
