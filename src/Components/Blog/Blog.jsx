import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const BlogDetail = lazy(() => import("./BlogDetail/BlogDetail"));

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
