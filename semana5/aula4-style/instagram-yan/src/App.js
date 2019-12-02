import React from 'react';
import './App.css';
import Flex from './Components/Flex/Flex'
import PostContainer from './Components/PostContainer/PostContainer'
import PostContainerHeader from './Components/PostContainerHeader/PostContainerHeader'
import PostLikeAndComent from './Components/PostLikeAndComent/PostLikeAndComent'


function App() {
  return (
    <Flex>
    <PostContainer>
      <PostContainerHeader imagem="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-9/s960x960/70538724_2714465428578031_8686958100785135616_o.jpg?_nc_cat=102&_nc_ohc=3zXL4wABd4kAQmCTIuSkpaVVQKgxpAO2VO24jBzBWrlClPOHzG_wGnH0w&_nc_ht=scontent.fcpq5-1.fna&oh=a86e0656b36432688730b72038649864&oe=5E77784A" nome="borntobeurban"/>
      <img src="https://1h4hfe10xz8m3g3xkh2wb9lc-wpengine.netdna-ssl.com/blog/files/2015/08/thestocks-imagem.jpg"/>
      <PostLikeAndComent/>
    </PostContainer>

    <PostContainer>
    <PostContainerHeader imagem="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-9/s960x960/70538724_2714465428578031_8686958100785135616_o.jpg?_nc_cat=102&_nc_ohc=3zXL4wABd4kAQmCTIuSkpaVVQKgxpAO2VO24jBzBWrlClPOHzG_wGnH0w&_nc_ht=scontent.fcpq5-1.fna&oh=a86e0656b36432688730b72038649864&oe=5E77784A" nome="borntobeurban"/>
      <img src="https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"/>
      <PostLikeAndComent/>
    </PostContainer>

    <PostContainer>
    <PostContainerHeader imagem="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-9/s960x960/70538724_2714465428578031_8686958100785135616_o.jpg?_nc_cat=102&_nc_ohc=3zXL4wABd4kAQmCTIuSkpaVVQKgxpAO2VO24jBzBWrlClPOHzG_wGnH0w&_nc_ht=scontent.fcpq5-1.fna&oh=a86e0656b36432688730b72038649864&oe=5E77784A" nome="borntobeurban"/>
      <img src="https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg"/>
      <PostLikeAndComent/>
    </PostContainer>
    </Flex>
  )
}

export default App;
