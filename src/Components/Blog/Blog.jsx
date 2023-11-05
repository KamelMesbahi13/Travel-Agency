import { lazy } from "react";

const BlogDetail = lazy(() => import("./BlogDetail/BlogDetail"));
const Header = lazy(() => import("./Header/Header"));

const Blog = () => {
  return (
    <>
      <div className="mt-8">
        <Header />
      </div>
      <div>
        <div className="container">
          <BlogDetail />
        </div>
      </div>
    </>
  );
};

export default Blog;
