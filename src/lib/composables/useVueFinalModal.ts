import { useModal } from "vue-final-modal";
import type { Constructor } from "vue-final-modal";

const useVueFinalModal = <P extends Record<string, unknown>>(
  modalComponent: Constructor,
  props: P
) => {
  const instance = useModal({
    component: modalComponent,
    attrs: {
      ...props,
      onClose() {
        instance.close();
      },
    },
  });
  return instance;
};
export default useVueFinalModal;
