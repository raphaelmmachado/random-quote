import { useEffect, useState } from "react";
import fetchQuotes from "../utils/fetchQuotes";
import { TwitterIcon, TwitterShareButton } from "react-share";
export default function Quote_Container() {
  const [quote, setQuote] = useState<Quote>();
  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = async () => {
    await fetchQuotes().then((res) => {
      setQuote(res.data[0] as Quote);
    });
  };
  return (
    <section id="quote-box" className="bg-slate-400 p-4 max-w-md rounded-md">
      <p id="text" className="text-2xl font-bold text-zinc-800 p-3">
        "{quote?.quote}"
      </p>
      <br />
      <h3>
        by{" "}
        <span id="author" className="font-medium text-lg">
          {quote?.author}
        </span>
      </h3>
      <div className="flex justify-between w-full mt-4">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"></a>
        <TwitterShareButton
          url=" "
          title={`${quote?.quote}. ${quote?.author}`}
          via="RaphaelmDev"
          hashtags={["quotes"]}
        >
          <TwitterIcon size={40} className="rounded-md" />
        </TwitterShareButton>
        <button
          id="new-quote"
          onClick={() => getQuotes()}
          className="p-3 bg-slate-500 rounded-md text-slate-50"
        >
          new quote
        </button>
      </div>
    </section>
  );
}
