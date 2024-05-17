import { useState } from "react";
import { GlobalModal } from "../../components/globalModal/globalModal";
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";

export default function TrackerPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <GlobalModal
        isOpen={isModalOpen}
        title={"Setting"}
        onRequestClose={handleCloseModal}
      >
        <UserSettingsForm onClose={handleCloseModal} />
      </GlobalModal>
    </div>
  );
}
