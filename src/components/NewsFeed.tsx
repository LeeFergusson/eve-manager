import { api } from "../utils/api";

const NewsFeed: React.FC = () => {
  const news = api.news.getLatest.useQuery();
  return (
    <section className="flex-shrink-0 rounded-sm border-t-4 border-yellow-500 bg-gray-300 shadow-lg">
      <h3 className=" border-gray-500 bg-slate-200 p-2 text-lg font-semibold">
        News Feed
      </h3>
      {news.data ? (
        <ul>
          {news.data.map((item) => {
            return (
              <li
                className="m-2 mb-2 rounded-r-md border-l-4 border-gray-500 bg-gray-100 p-2 shadow-md hover:border-blue-500"
                key={item.id}
              >
                <div className="text-sm text-gray-500">
                  {item.posted.toDateString()}
                </div>
                <div>{item.title}</div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default NewsFeed;
