import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [id, setId] = useState("1");
  const [title, setTitle] = useState("");

  // let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  // const fetchData = async () => {
  //   let { data } = await axios.get(url);
  //   console.log("Datas: ", data);
  //   setTitle(data.title);
  // };
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const fetchData = async () => {
      let { data } = await axios.get(url);
      console.log("Datas: ", data);
      setTitle(data.title);
    };
    let myTimemout = setTimeout(() => {
      fetchData();
    }, 3000);
    return () => {
      clearTimeout(myTimemout);
    };
  }, [id]);

  return (
    <>
      <input onInput={(e) => setId(e.target.value)} />
      {/* <button onClick={fetchData}> Retreive Data</button> */}
      <b>Title: </b> {title}
    </>
  );
}
export default Post;
