type post = {
    author: string,
    text: string
}

const post1: post ={
    author: "Yan",
    text: "oi, eu sou o Yan"
}
const post2: post ={
    author: "Yuri",
    text: "oi, eu sou o Yuri"
}
const post3: post ={
    author: "Felps",
    text: "oi, eu sou o Felps"
}

const post4: post ={
    author: "Friday",
    text: "oi, eu sou o Friday"
}
const post5: post ={
    author: "Yan",
    text: "oi, eu sou o Friday"
}

const postList: post[] = [post1,post2,post3,post4,post5]

const showPost = (postList: post[], author: string): post[] =>{
    const filteredPosts: post[] = postList.filter((post)=>{
        return post.author === author;
    })

    return filteredPosts
}

