import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function AddComment({ data, getComments }) {
  const [comment, setComment] = useState('')
  const router = useRouter();
  const { slug } = router.query;
  const changeHandler = e => {
    setComment(e.target.value)
  }

  const addHandler = async () => {
    console.log(comment, 'ssss')
    if (comment !== '') {
      console.log(comment, 'ssss111')
      try {
        const res = await axios.post(`${process.env.REACT_APP_DB_URL}/api/comments`, {
          x: data.x,
          y: data.y,
          comment,
          image_name: slug
        });
        setComment('')
        getComments();
      } catch (error) {

      }
    }
  }
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: data.y + "px",
          left: data.x + "px",
          padding: '5px',
          background: '#222',
          borderRadius: '8px',
          color: 'white',
          fontSize: '12px',
        }}
      >
        <input type='text' value={comment} onChange={changeHandler} />
        <button type="button" onClick={e => addHandler()}>{"=>"}</button>
      </div>
    </>
  );
}
