import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card } from 'reactstrap';
import { API, SEND_COMMENT } from 'utils/api/api';
import Skeleton from 'react-content-loader'
import Loading from "./Loading";

export default function Comment({ roomId }) {
  const [comment, setComment] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [session, setSession] = useState("");
  const [textComment, setTextComment] = useState('');
  const [error, setError] = useState("");

  useEffect(() => {
    async function getComments() {
      await axios.get(`${API}/lives/comments/${roomId}`).then(res => {
        const comments = res.data
        setTimeout(() => {
          setComment(comments)
        }, 2000);
      });
    }
    getComments()
  }, [comment, textComment]);

  useEffect(() => {
    const userSession = localStorage.getItem("session");
    if (userSession) {
      const foundSession = JSON.parse(userSession);
      setSession(foundSession);
    }
  }, []);


  const sendComment = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    try {
      const response = await axios.post(SEND_COMMENT, {
        room_id: roomId,
        comment: textComment,
        csrf: session.csrf_token,
        cookies_id: session.cookie_login_id,
      });
      console.log(response.data);
      setTextComment('')
      setButtonLoading(false);
    } catch (err) {
      setButtonLoading(false);
      setError('Please try again');
    }
  };

  const LoadingMessage = () => (
    <>
      <h5 style={styles.name}>
        <img src="https://image.showroom-cdn.com/showroom-prod/image/avatar/1028686.png?v=87" width="30" className="mr-2 mb-1" alt="avatar" />
        Tunggu Wots
        <img src="https://image.showroom-cdn.com/showroom-prod/image/avatar/1028686.png?v=87" width="30" className="ml-2 mb-1" alt="avatar" />
      </h5>
      <hr />
    </>
  );

  const CommentList = () => (
    Array.from(Array(7), (e, i) => {
      return (
        <div>
          <Skeleton viewBox="0 0 300 100" height={90} width={200} backgroundColor="#D1D7E0">
            <rect x="70" y="10" rx="4" ry="4" width="170" height="10" />
            <rect x="70" y="30" rx="3" ry="3" width="200" height="10" />
            <circle cx="25" cy="25" r="25" />
          </Skeleton>
        </div>
      )
    })
  );


  return (
    <Card body inverse color="dark" className='p-0 mb-5'>
      <Card body inverse color="dark" className="scroll">
        <div>
          {comment && comment.length !== 0 ? comment.map((item, idx) => (
            item.comment.length != '2' && item.comment.length != '1' &&
            <div key={idx}>
              <h5 style={styles.name}>
                <img src={item.avatar_url} width="25" alt={item.name} className="mr-2 mb-1" />
                {item.name}
              </h5>
              <p style={styles.comment}>{item.comment}</p>
              <hr />
            </div>
          )) : (
            <div>
              <LoadingMessage />
              <CommentList />
            </div>
          )}
        </div>
      </Card>

      {session ? (

        <div>
          {error ? (
            <p className='pl-2 pb-0 text-danger'>
              {error}
            </p>
          ) : ''}

          <form onSubmit={sendComment} style={{ display: "flex" }}>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: '0 0 0 .25rem', height: "3rem" }}
              placeholder="Comment"
              value={textComment}
              onChange={(e) => setTextComment(e.target.value)}
            />
            <button
              type="submit"
              className="btn text-light"
              style={{ borderRadius: '0 0 .25rem 0', height: "3rem", backgroundColor: 'rgb(0, 139, 155)', width: "90px" }}
              disabled={buttonLoading ? true : false}
            >
              {buttonLoading ? <Loading color="white" size={8} /> : "Send"}
            </button>
          </form>
        </div>
      ) : ''}
    </Card>
  )
}

const styles = {
  name: {
    display: 'inline',
    color: '#24a2b7',
    fontWeight: 500,
    fontSize: '17px'
  },
  comment: {
    marginTop: 6,
    fontSize: '15px'
  }
}
