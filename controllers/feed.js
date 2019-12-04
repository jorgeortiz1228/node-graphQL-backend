exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'Gabys First Post', content: 'Your moms a hoe and also I dont want to donate to kesem bc im a wanker asss niggaaa .' }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //create post in db
    res.status(201).json({
        message: 'Post createds successfully !',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};