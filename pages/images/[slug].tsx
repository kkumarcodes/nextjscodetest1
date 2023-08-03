import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Comment from '../../components/Comment'
import AddComment from '../../components/AddComment'

export default function Preview() {
  const router = useRouter();
  const imageContainer = useRef<HTMLImageElement>(null);

  const { slug } = router.query;
  const [comments, setComments] = useState([])
  const [tempPosition, setTempPosition] = useState({ x: -1, y: 0 })

  const getComments = async () => {

    const res = await axios.get(`${process.env.REACT_APP_DB_URL}/api/comments/${slug}`)
    setComments(res.data.data);
    setTempPosition({ x: -1, y: 0 })
  }
  useEffect(() => {
    if (slug && imageContainer) {
      imageContainer.current!.addEventListener("click", getClickPosition, false);
      getComments();
    }
  }, [slug, imageContainer])

  const getClickPosition = (e: any) => {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    console.log(xPosition, yPosition);
    setTempPosition({ x: xPosition, y: yPosition })
  }

  return (
    <>
      <main>
        <Image src={`/${slug}`} alt="13" ref={imageContainer} height={640} width={480} priority />
        {comments && comments.map(el => {
          return <Comment data={el} />
        })}

        {tempPosition.x !== -1 && <AddComment data={tempPosition} getComments={getComments} />}
      </main>
    </>
  );
}
