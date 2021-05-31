import React from "react"

class Comment extends React.Component {
    render(){

        const ReplyButton = () =>{
            let input =  document.getElementById(`${this.props.user.id}`)
            input.style.display === 'none' ? input.style.display = 'block' : input.style.display = 'none'
        }

        return (
            <>
                <div className="CommentCard">

                    <h1>{this.props.user.name} <span><small><i>{this.props.user.date}</i></small></span></h1>
                    <div className="CommentMessage">{this.props.user.message}</div>
                    <button className="CommentReply" onClick={ReplyButton}>Reply</button><small>{this.props.user.reply} Replies</small><hr/>


                    <div className="CommentInput" id={this.props.user.id} style={{display:'none'}}>
                        <textarea placeholder='Write Your Reply...' cols="50" rows="6"></textarea>
                        <button>Send</button>
                    </div>


                    <div className="ReplyComment">
                        <h1>Levi <span><small><i>May 24th 2021</i></small></span></h1>
                        <div className="ReplyCommentMessage">But i like it anyway ! </div>
                    </div>

                
              </div><br/><br/>
              
            </>
        )
    }
}

export {
    Comment
}