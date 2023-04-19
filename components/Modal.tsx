import { motion, AnimatePresence } from "framer-motion";

import { Modal, Todo } from "@pages/types";
import { MODAL } from "./utils/constants";

const Modal = ({ content, resetModal, onAction = () => {} }: Modal) => {
  const handleAction = () => content && onAction(content);
  
  return (
    <AnimatePresence>
      {content && (
        <div className="z-20 px-5 fixed h-full w-full flex justify-center top-0 left-0 pt-32 md:pt-44">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -50,
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute t-0 z-10 p-7 bg-light-modal h-auto w-full max-w-xs rounded my-7 shadow-md md:max-w-2xl dark:bg-dark-modal"
          >
            <button
              aria-label="Close modal"
              onClick={resetModal}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-light-modal text-white border border-slate-600 h-8 w-8 block mb-2 rounded-full dark:bg-dark-modal"
            >
              &times;
            </button>
            <div className="relative overflow-hidden h-auto w-full">
              <p className="font-bold text-xl mb-3 dark:text-white">{MODAL.TITLE}</p>
              <ul>
                {content.map((item: Todo) => (
                  <li className="dark:text-white" key={`modal-${item.id}`}>&#x2022; {item.label}</li>
                ))}
              </ul>
              <div className="w-full mt-5 flex justify-end">
                <button
                  aria-label="Confirm remove done tasks"
                  onClick={handleAction}
                  className="ml-auto px-2 py-1 rounded-md hover:bg-light-card dark:text-white hover:dark:bg-dark-card"
                >
                  {MODAL.ACTION}
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={resetModal}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  )
};

export default Modal;
