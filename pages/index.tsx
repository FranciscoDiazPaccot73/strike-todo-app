import Head from 'next/head';
import { useContext } from 'react'
import Image from 'next/image'
import { motion  } from 'framer-motion';

import NewTodo from '@components/NewTodo'
import TodoListComponent from '@components/TodoList'
import Modal from '@components/Modal'

import { PageContext } from '@store/index';
import { setModalContent, deleteDocs } from '@store/actions';
import { getInfo } from '@services/firebase'

import { Todo, TodoList } from './types'

const Home = ({ list }: TodoList) => {
  const { dispatch, state: { modal } } = useContext(PageContext);

  const handleResetModal = () => {
    setModalContent(dispatch, null);
  }

  const handleRemove = async (todos: Todo[]) => {
    await deleteDocs(dispatch, todos);
    handleResetModal();
  }
  
  return (
    <div className="w-full px-8 pb-40">
      <Head>
        <title>Strike Todo App challenge</title>
        <meta name="description" content="Francisco Diaz Paccot | Strike Todo App" />
        <meta name="title" content="Strike Todo App challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex place-items-center absolute top-0 left-0 w-full h-64 overflow-hidden opacity-90 md:h-72">
        <div className='relative w-full h-full'>
          <div className='w-full h-full z-10 absolute bg-gradient-to-r from-blue-80 to-purple-80' />
          <Image
            className="relative"
            src="/hero2.webp"
            alt="Hero image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>
      <section className='max-w-3xl mx-auto relative'>
        <motion.div
          animate={{
            scale: modal ? 0.95 : 1,
            opacity: modal ? 0.5 : 1
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <p className='py-10 font-bold text-4xl dark:text-white md:py-14'>TODO</p>
          <NewTodo />
          <TodoListComponent list={list} />
        </motion.div>
        <Modal onAction={handleRemove} content={modal} resetModal={handleResetModal} />
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const list = await getInfo();

  return {
    props: {
      list,
    }
  }
}

export default Home;
