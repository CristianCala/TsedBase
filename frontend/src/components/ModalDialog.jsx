import React from "react";

export const ModalDialog = ({
  width,
  children,
  handdleShow,
  show,
  center = false,
}) => {
  const handdleHideModal = (e) => {
    if (e.target.classList.contains("modal_dialog")) {
      handdleShow(false);
    }
  };

  return (
    <div
      onClick={handdleHideModal}
      class={`modal_dialog bg-black bg-opacity-40 fixed top-0 left-0 right-0 z-50 ${
        show ? "" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center ${
        center ? "items-center" : ""
      }`}
    >
      <div
        class={`relative w-full h-full md:h-auto ${
          width ? width : "max-w-2xl"
        }`}
      >
        <div class="relative bg-white rounded-lg shadow p-6">
          {/* <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 ">Static modal</h3>
          </div> */}

          <div class=" space-y-6 ">{children}</div>
        </div>
      </div>
    </div>
  );
};
