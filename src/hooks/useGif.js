import { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = 'neKkOKsaWSMEf07Jy0urAByoO7rMTIkL';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : `${url}`);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return {gif, loading, fetchData};
}

export default useGif;
