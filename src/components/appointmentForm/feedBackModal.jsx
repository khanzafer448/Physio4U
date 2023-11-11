import PropsType from "prop-types";
import { Modal } from "react-bootstrap";

const FeedBackModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
      }}
      centered
      className="success-modal"
    >
      <Modal.Body>
        <div className="success-content">
          <h5>Well done!</h5>
          <p>Your form is successfully sent to Physio4U team.</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

FeedBackModal.defaultProps = {
  showModal: false,
  setShowModal: () => {},
};

FeedBackModal.propTypes = {
  showModal: PropsType.bool,
  setShowModal: PropsType.func,
};

export default FeedBackModal;
