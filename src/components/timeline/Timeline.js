import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Timeline = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const postData = collection(db, "posts");
		const q = query(postData, orderBy("timestamp", "desc"));

		//非リアルタイムデータ取得
		// getDocs(q).then((QuerySnapshot) => {
		// setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
		// });

		//リアルタイムデータ取得
		onSnapshot(q, (querySnapShot) => {
			setPosts(querySnapShot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<div className="timeline">
			{/* Header */}
			<div className="timeline_header">
				<h2>ホーム</h2>
			</div>
			{/* Tweetbox */}
			<TweetBox />

			{/* Post */}
			{/* <FlipMove> */}
			{posts.map((post, index) => (
				<Post
					key={index}
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					text={post.text}
					avatar={post.avatar}
					image={post.image}
				/>
			))}
			{/* </FlipMove> */}
		</div>
	);
};

export default Timeline;
