/**
 * 制作组件：
 * 追加新的评论
 * 当用户提交表单的时候，我们应该清空表单，发送一个请求到服务器，然后刷新评论列表。
 * 首先，监听表单的提交事件，然后清空表单。
 *
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit: function(e){
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if(!text || !author){
            return;
        }
        //send request to the server
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function(){
        return (
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
    }
});