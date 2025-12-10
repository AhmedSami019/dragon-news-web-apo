import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [newsData, setNewsData] = useState([]);


  useEffect(() => {
    async function filterNews() {
      if (id === "0") {
        setNewsData(data);
      } else if (id === "1") {
        const filtered = data.filter(
          (news) => news.others.is_today_pick === true
        );
        setNewsData(filtered);
      } else {
        const filtered = data.filter((news) => news.category_id == id);
        setNewsData(filtered);
      }
    }
    filterNews();
  }, [id, data]);

  console.log(newsData);
  return (
    <div>
      <h2>category news - {id}</h2>
    </div>
  );
};

export default CategoryNews;
