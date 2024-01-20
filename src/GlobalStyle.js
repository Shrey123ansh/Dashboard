import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 font-family: 'Gentium Book Basic','Josefin Sans',
    'sans-serif';

 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
.hero-img{
  height:300px;
  width:500px;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}
.speak{
  
  margin: 10px auto;
  font-size:5em;
  color:white;

  font-weight:800;
  text-shadow: 0 1px 0 #ccc, 
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15),
  0 30px 20px rgba(0,0,0,.1);  
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 3rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 300;
}

p {
  color:white;
  opacity: .8;
  font-size: 1.4rem;
  line-height: 1.7;
  margin-top: 1rem;

  font-weight:400;
}
.btnn{
  max-width: 16rem;
    margin-top: 2rem;
    background-color: red;
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
   
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
}
.det{
  margin-top:10px;
  color:white;
}
a {
  text-decoration: none;
}
a:hover{
  color:blue;
}

li {
  list-style: none;
}

.container3{
  background-color:#111111;
  width:100%;
  padding-left:60px;
  padding-right:60px;
  margin: 0 auto;
 
}
.details{
  font-size: 2.8rem;
  font-weight: 400;
}
.det2{
  
  font-size: 40px;
  font-weight: 400;
  color:white;
}
.det3{
  font-size:15px;
  font-weight: 200;
  color:white;
}
.det4{
  font-size:15px;
  font-weight: 200;
  color:black;
}
.jj{
  display:flex;
  padding:60px;
  background-color:#111111;
  height:500px;
  width:100%;
}
.grid {
  display: grid;
  gap: 9rem;
}
.ok{
  display:flex;
  justify-content:center;
  padding:10px;
}
.textcenter{
width:40%;

font-size:20px;
}
.det4{font-size:18px;
 

}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1.2fr .8fr 1.5fr .5fr ;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

    .hidden{
      font-size: 2.5rem;
      font-weight: 400;
      color:red;
    }



@media (max-width:${({ theme }) => theme.media.tab}) {
      .container3{
        padding: 0 3.2rem;
      }hr{
        color:transparent;
      }
      .jj{
        padding:60px;
        background-color:#111111;
        height:600px;
        width:100%;
      }
      
.ok{
  display:flex;
  justify-content:center;
  padding:10px;
}
.textcenter{
width:80%;

font-size:15px;
}
.det4{font-size:15px;

}
        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  .jj{
    padding:60px;
    background-color:#111111;
    height:600px;
    width:100%;
  }
      html{
        font-size: 50%;
      }hr{
        color:#111111;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}

@media (max-width:850px) {
  h3 {
    font-size: 2rem;
    font-weight: 300;
  }
  .details{
    font-size: 2.6rem;
    font-weight: 400;
  }
  .jj{
    padding:60px;
    background-color:#111111;
    height:780px;
    width:100%;
  }
    .grid-three-column {
  grid-template-columns: 1fr 1fr;
}
}
@media (max-width:300px) {
  h3 {
    font-size: 2rem;
    font-weight: 300;
  }
  .details{
    font-size: 2.6rem;
    font-weight: 400;
  }
  .jj{
    padding:60px;
    background-color:#111111;
    height:1200px;
    width:100%;
  }
    .grid-three-column {
  grid-template-columns: 1fr 1fr;
}
}
@media(max-width:600px)
{
  hr{
    color:#111111;
  }
}
@media (max-width:400px) {
 
  .jj{
    padding:60px;
    background-color:#111111;
    height:900px;
    width:100%;
  }
    .grid-three-column {
  grid-template-columns: 1fr 1fr;
}
}

@media (max-width:350px) and (min-width:100px){
 
  .jj{
    padding:60px;
    background-color:#111111;
    height:1400px;
    width:100%;
  }
    .grid-three-column {
  grid-template-columns: 1fr 1fr;
}
}


`;
