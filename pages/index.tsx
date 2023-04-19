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
import { META, HOME_H1 } from '@/utils/constants';
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
        <title>{META.TITLE}</title>
        <meta name="description" content={META.DESCRIPTION} />
        <meta name="title" content={META.TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex place-items-center absolute top-0 left-0 w-full h-64 overflow-hidden opacity-90 md:h-72">
        <div className='relative w-full h-64 md:h-72 overflow-hidden'>
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
          <p className='py-10 font-bold text-4xl text-main-light dark:text-white md:py-14'>{HOME_H1}</p>
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
