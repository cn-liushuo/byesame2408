import { useSearchParams, useParams } from "react-router-dom";

const Article = () => {
  // 1、使用useSearchParams获取searchParams传参
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // const name = params.get("name");

  // 2、使用useParams获取Params传参
  const params = useParams();
  const id = params.id;
  const name = params.name;

  return (
    <>
      <div>我是文章页{id}-{name}</div>
    </>
  );
};

export default Article;
