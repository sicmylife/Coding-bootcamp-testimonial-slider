const right = document.getElementById("right");
const left = document.getElementById("left");
const image = document.querySelector(".image");
const content = document.querySelector(".content");



const data = [
  {
    name: "Tanya Sinclair",
    profecion: "UX Engineer",
    info: "“ Ive been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. Im now inthe job of my dreams and so excited about the future. ”",
    image: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkporv",
    profecion: "Junior Front-end Developer",
    info: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "./images/image-john.jpg",
  },
];


let index = 0;

const navigation=()=>{
if (index > data.length -1  ) {
    index = 0;}
 image.innerHTML = `<img src="${data[index].image}" class="img-fluid" />`;

content.innerHTML = `   <img src="./images/pattern-quotes.svg" alt="" srcset="">
<p>
${data[index].info}
</p>
<h2>${data[index].name}</h2> <span class="grey"> ${data[index].profecion}</span></h2>
`;
index++;
}

navigation()

right.addEventListener('click', navigation)
left.addEventListener('click', navigation)
