/**
 * 制作组件：
 * 使用属性
 * 让我们创建 Comment 组件，该组件依赖于从父级传入的数据。从父组件传入的数据会做为子组件的 属性（ property ） ，这些 属性（ properties ） 可以通过 this.props 访问到。使用属性（ props ），我们就可以读到从 CommentList 传到 Comment 的数据，然后渲染一些标记：
 * 
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});
