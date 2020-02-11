const post1 = {
    author: "Yan",
    text: "oi, eu sou o Yan"
};
const post2 = {
    author: "Yuri",
    text: "oi, eu sou o Yuri"
};
const post3 = {
    author: "Felps",
    text: "oi, eu sou o Felps"
};
const post4 = {
    author: "Friday",
    text: "oi, eu sou o Friday"
};
const post5 = {
    author: "Yan",
    text: "oi, eu sou o Friday"
};
const postList = [post1, post2, post3, post4, post5];
const showPost = (postList, author) => {
    const filteredPosts = postList.filter((post) => {
        return post.author === author;
    });
    return filteredPosts;
};
//# sourceMappingURL=ex2.js.map