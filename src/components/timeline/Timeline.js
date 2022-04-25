import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

const Timeline = () => {
	return (
		<div className="timeline">
			{/* Header */}
			<div className="timeline_header">
				<h2>ホーム</h2>
			</div>
			{/* Tweetbox */}
			<TweetBox />

			{/* Post */}
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
};

export default Timeline;
