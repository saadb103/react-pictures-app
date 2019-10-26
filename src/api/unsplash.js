import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d0bebd864ddb2f5b2493b997def030f18442bd04317e05f983a47c1a558cd4f2"
  }
});
