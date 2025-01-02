import { getBlogData } from "@/lib/microCMS/blogs";
import React from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { SiQiita, SiZenn } from "react-icons/si";
import BlogCard from "./components/BlogCard";
import BlogList from "./components/BlogList";

const page = async () => {
	const blogs = await getBlogData();
	return (
		<main className="h-auto sm:h-auto w-full mt-16 mb-32">
			<div className="h-72 md:h-96 flex mb-20 bg-gradient-to-t from-base-100 to-green-500">
				<div className="object-cover h-full sm:w-2/5 " />
				<img
					src={blogs[0].eyecatch?.url}
					alt="Shoes"
					className="object-cover h-full flex-1 sm:clip-left-skew"
				/>
				{/* <div className="hidden lg:block z-30 md:bg-gradient-to-br from-base-100 to-green-500 w-1/4 font-bold">
          <div className='p-3'>
            <div className='flex items-center '>
              <label className="input input-sm input-success  flex items-center flex-1">
                <input type="text" className="grow" placeholder="記事を検索" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <title>記事を検索</title>
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button type='button' className='btn btn-square btn-sm btn-base-100 '><BiFilter /></button>
            </div>
          </div>
          <div className='text-center mt-auto'>
            not found
          </div>
        </div> */}
			</div>

			<div className="absolute top-16 right-0 left-0 bg-opacity-70 w-full h-72 md:h-96 shadow-xl z-20 bg-black">
				<div className="flex justify-between p-10 md:p-10 lg:p-20 h-full w-full ">
					<div className="flex flex-col font-mono prose  text-gray-100">
						<h2 className="text-gray-100 ">ブログ一覧</h2>
						<ul className=" flex flex-col">
							<li className="badge md:badge-lg badge-outline sm:w-40">
								テック系
							</li>
							<li className="badge md:badge-lg badge-outline sm:w-36">
								個人開発
							</li>
							<li className="badge md:badge-lg badge-outline sm:w-32">
								資格勉強
							</li>
							<li className="badge md:badge-lg badge-outline sm:w-28">
								リリース
							</li>
							<li className="badge md:badge-lg badge-outline sm:w-24">
								時事ネタ
							</li>
						</ul>
					</div>
					<div className="flex flex-col mt-auto gap-5 items-end">
						<h2 className="text-sm md:text-md">Qiita・Zennで更新中</h2>
						<div className="flex items-center gap-5">
							<button
								type="button"
								className="btn btn-ghost btn-sm md:btn-md bg-white bg-opacity-40"
							>
								<SiQiita className="text-2xl md:text-4xl" />
							</button>
							<button
								type="button"
								className="btn btn-ghost btn-sm md:btn-md bg-white bg-opacity-40"
							>
								<SiZenn className="text-2xl md:text-4xl" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="block lg:hidden z-30 w-11/12 mx-auto font-bold mb-5">
          <div className='p-3'>
            <div className='flex items-center '>
              <label className="input input-sm input-success  flex items-center flex-1">
                <input type="text" className="grow" placeholder="記事を検索" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <title>記事を検索</title>
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button type='button' className='btn btn-square btn-sm btn-base-100 '><BiFilter /></button>
            </div>
          </div>
        </div>

      <div className="mx-3 md:mx-10">
        <ul className="hidden md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly md:gap-9 lg:gap-12">
          {blogs.map((data) => (
            <div key={data.id} className=''>
              <BlogCard data={data} />
            </div>
          ))}
        </ul>
        <div className="block md:hidden overflow-x-auto">
          <table className="table bg-gradient-to-r to-green-500 from-base-300">
            <thead>
              <tr>
                <th>タイトル</th>
                <th>更新日</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((e) => (
                <tr key={e.id}>
                  <td className="flex flex-col justify-start">
                    <span>{e.title}</span>
                    <span className="badge badge-sm badge-outline">React</span>
                  </td>
                  <td>{new Date(e.publishedAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
			<BlogList blogs={blogs} />
		</main>
	);
};

export default page;
