import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

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
      <div className="grid grid-cols-1 gap-5">
        {
            newsData.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
