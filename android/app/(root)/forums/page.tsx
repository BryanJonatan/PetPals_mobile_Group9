"use client";

import NormalContent from "../../components/ContentTemplate/NormalContent";
import PostFilter from "../../components/Forums/PostFilter";
import PostList from "../../components/Forums/PostList";
import PageNotFound from "../../components/PageNotFound";
import { useForums } from "../../context/forums/ForumsContext";
import { useUsers } from "../../context/users/UsersContext";

import Link from "next/link";
import { useEffect } from "react";




const Forums = () => {
  const { isLoggedIn } = useUsers();
  const { forumCategoryId, fetchForumCategories, fetchForumPosts, error } =
    useForums();

  useEffect(() => {
    fetchForumCategories();
    fetchForumPosts();
  }, []);

  useEffect(() => {
    fetchForumPosts();
  }, [forumCategoryId]);

  if (error) {
    return (
      <NormalContent>
        <PageNotFound
          image_url="/img/page-not-found.png"
          message="Pet not found"
        />
      </NormalContent>
    );
  }

  return (
    <NormalContent>
      <div className="w-full max-w-2xl mx-auto p-6 dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Forum PetPals</h1>
          <Link href={`${isLoggedIn ? "/forums/new" : "/login"}`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 cursor-pointer">
              Buat Postingan
            </button>
          </Link>
        </div>

        <PostFilter />
        <PostList />
      </div>
    </NormalContent>
  );
};

export default Forums;
