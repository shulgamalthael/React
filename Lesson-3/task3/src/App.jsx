import React from "react";
import Comment from './Comment';

const userInfo = {
    name: "Tom",
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVK7xUD2P-8Dqt-CDb1JLDHzE_2yAns-AttA&usqp=CAU'
};

const App = () => {
    return (
        <Comment 
            user={userInfo} 
            text="Good job!" 
            date={new Date("2019 -01-01T11:32:19.566Z")} 
        />
    );
};

export default App;