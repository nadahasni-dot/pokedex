"use client"

import { useQuery } from 'react-query';
import NewsItem from "./NewsItem";
import axios from "axios";
import Loading from "../Loading";

export default function NewsList() {
  const fetchNews = () => {
    return axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Pokemon',
        sortBy: 'popularity ',
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      }
    })
  }
  const { isLoading, isError, data, error } = useQuery('todos', fetchNews)

  function news() {
    if (data === undefined) {
      return [];
    }

    return data?.data.articles;
  }

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news().map((item: News, index: number) => {
        return <NewsItem key={item.publishedAt + index} title={item.title} image={item.urlToImage} url={item.url} timestamp={item.publishedAt} />;
      })}
    </section>
  )
}
