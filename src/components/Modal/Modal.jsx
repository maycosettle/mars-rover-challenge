import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { Footer } from './Footer';

import useStyles from './styles';

const Modal = ({ openModal, onClose, onSubmit, children }) => {
  const styles = useStyles();

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className={styles.mainContainer} onClose={onClose}>
        <div className={styles.container}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={styles.overlay} />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {children && (
              <div className={styles.children}>
                {children}
                <Footer onClose={onClose} onSubmit={onSubmit} />
              </div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Modal.propTypes = {
  openModal: PropTypes.func,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.propTypes = {
  openModal: () => {},
  onClose: () => {},
  onSubmit: () => {},
};

export default Modal;
