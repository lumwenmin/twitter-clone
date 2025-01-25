"use client";

import Likes from "./likes";
import { useOptimistic } from "react";

export default function Tweets({ tweets }: { tweets: TweetWithAuthor[] }) {
  const [useOptimisticTweets, addOptimisticTweet] = useOptimistic<
    TweetWithAuthor[],
    TweetWithAuthor
  >(tweets, (currentOptimisticTweets, newTweet) => {
    const newOptimisticTweets = [...currentOptimisticTweets];
    const index = newOptimisticTweets.findIndex(
      (tweet) => tweet.id === newTweet.id
    );
    newOptimisticTweets[index] = newTweet;
    return newOptimisticTweets;
  });

  return useOptimisticTweets.map((tweet) => (
    <div key={tweet.id}>
      <p>{tweet.author.name}</p>
      <p>{tweet.title}</p>
      <Likes tweet={tweet} addOptimisticTweet={addOptimisticTweet} />
    </div>
  ));
}
