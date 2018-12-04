const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=06d6226b19f248688191260e6520d438";

  export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
  }
