import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  //const [isOpenModal, setIsOpenModal] = useState(false);

  //function handleCloseModal() {
  //  setIsOpenModal((showForm) => !showForm);
  //}
  //return (
  //  <>
  //    <Button onClick={handleCloseModal}>Add new cabin</Button>
  //    {isOpenModal && (
  //      <Modal onClose={handleCloseModal}>
  //        <CreateCabinForm onCloseModal={handleCloseModal} />
  //      </Modal>
  //    )}
  //  </>
  //);
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
        {/*
      <Modal.Open opens="table">
      <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
      <CreateCabinForm />
      </Modal.Window>*/}
      </Modal>
    </div>
  );
}

export default AddCabin;
