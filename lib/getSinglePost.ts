export default async function getSinglePost(id:any) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(!result?.ok){
    throw new Error ('There was an error fetching single post')
  }
  return result.json()
}
