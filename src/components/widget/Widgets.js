import { Search } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widgets_input">
				<Search className="widgets_searchIcon" />
				<input placeholder="キーワード検索" type="text" />
			</div>

			<div className="widgets_widgetContainer">
				<h2>いまどうしてる？</h2>

				{/* ライブラリを追加 */}
				<TwitterTweetEmbed tweetId={"1505049049250275328"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="tubuyakisayumin"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://twitter.com/Shin_Engineer"}
					options={{
						text: "#react X Firebase 勉強中なう。",
						via: "Shin_Engineer",
					}}
				/>
			</div>
		</div>
	);
};

export default Widgets;
