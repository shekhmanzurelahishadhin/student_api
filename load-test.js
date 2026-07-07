import http from "k6/http";

export const options = {
  vus: 50,
  duration: "30s",
};

export default function () {
  http.get("http://43.205.127.39:3000/");
}
