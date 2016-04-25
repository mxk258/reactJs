/**
 * 制作组件：
 * 为CommentList和CommentForm搭建顾家。
 */
var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return (
			React.createElement("div", {className: "commentList"}, 
				"Hello, world! I am a CommentList."
			)
		);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function(){
		return (
			React.createElement("div", {className: "commentForm"}, 
				"Hello, world! I am a CommentForm."
			)
		);
	}
});
