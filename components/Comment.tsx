import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function AddComment({ data }) {
  return (
    <div
      style={{
        position: "absolute",
        top: data.y + "px",
        left: data.x + "px",
        padding: '5px',
        background: '#222',
        borderRadius: '8px',
        borderBottomLeftRadius: '0px',
        color: 'white',
        fontSize: '12px',
      }}
    >
      {data.comment}
    </div>
  );
}
