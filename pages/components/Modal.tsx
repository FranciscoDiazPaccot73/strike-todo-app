import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ show, setShowModal }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="z-10 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
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
            className="absolute t-0 z-10 p-7 bg-white h-auto w-full max-w-xs rounded my-7 md:max-w-2xl"
          >
            <button
              onClick={() => setShowModal((modal: boolean) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-slate-600 border border-slate-600 h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <div className="relative overflow-hidden h-auto">
                <p>HOLA</p>
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
            onClick={() => setShowModal((modal: boolean) => !modal)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
