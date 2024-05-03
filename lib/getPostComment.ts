export default async function getPostComments(id:any) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if(!result?.ok){
    throw new Error ('There was an error fetching single post')
  }
  return result.json()
}
