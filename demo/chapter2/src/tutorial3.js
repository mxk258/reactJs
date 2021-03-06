/**
 * 制作组件：
 * 更新CommentBox组件代码，使用新创建的组件。
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentBox = Reqct.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});
