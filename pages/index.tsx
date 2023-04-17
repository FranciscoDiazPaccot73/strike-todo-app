import Image from 'next/image'
import { useEffect, useContext } from 'react'
import { Inter } from 'next/font/google'

import NewTodo from './components/NewTodo'
import TodoListComponent from './components/TodoList'

import { PageContext } from '@/store';
import { setInitialValues } from '@/store/actions';
import { getInfo } from '@/services/firebase'
import { TodoList } from './types'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ list }: TodoList) => {
  const { dispatch } = useContext(PageContext);
  useEffect(() => {
    setInitialValues(dispatch, list)
  }, [])
  
  return (
    <div className="min-h-screen w-full px-8">
      <section className="flex place-items-center absolute top-0 left-0 -z-10 w-full h-64 overflow-hidden opacity-90 md:h-72">
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
      <section className='max-w-3xl mx-auto'>
        <p className='py-10 font-bold text-4xl dark:text-white md:py-14'>TODO</p>
        <NewTodo />
        <TodoListComponent />
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
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
