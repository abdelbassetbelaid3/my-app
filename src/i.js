import React from 'react'
import { createRoot } from 'react-dom/client';

const data = [
 {
  id: 1,
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
 },
 {
  id: 2,
  img:'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
 },
 {
  id: 3,
  img:'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
  title: 'The Vanishing Half: A Novel',
  author: 'Brit Bennett',}, 
];


function Books () {
  return (
    <div>
      {data.map((book)=>{
        return <Book key={book.id} book={book}></Book>;
      })}
    </div>);

}
function click(){
  console.log("clicked")
}

function Book(props){
  const {img,title,author}=props.book
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={() => click()}>button</button>
    </article>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(<Books/>);