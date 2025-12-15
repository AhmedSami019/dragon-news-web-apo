import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightAside from "../../Components/HomeLayoutsComponents/RightAside/RightAside";
import NewsDetailsCArd from "../../Components/NewsDetailsCArd/NewsDetailsCArd";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  // add a state for news
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNewsDetails = async () => {
      const newsDetails = newsData.find((singleNews) => singleNews.id == id);
      setNews(newsDetails);
      window.scroll(0, 0);
    };

    fetchNewsDetails();
  }, [newsData, id]);

  // console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto my-10 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-xl font-medium">Dragon News</h2>
          <NewsDetailsCArd news={news}></NewsDetailsCArd>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
